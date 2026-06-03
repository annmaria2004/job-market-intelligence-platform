
from fastapi import FastAPI
from pymongo import MongoClient
from fastapi.middleware.cors import CORSMiddleware
import os
import requests

MONGO_URI = os.getenv("MONGO_URI")

app = FastAPI()
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

client = MongoClient(MONGO_URI)

db = client["job_market_intelligence"]
jobs_collection = db["jobs"]


@app.get("/")
def home():
    return {"message": "AI Job Market Intelligence API Running"}


@app.get("/total-jobs")
def total_jobs():
    return {
        "total_jobs": jobs_collection.count_documents({})
    }


@app.get("/countries")
def countries():

    pipeline = [
        {
            "$group": {
                "_id": "$country",
                "count": {"$sum": 1}
            }
        },
        {
            "$sort": {
                "count": -1
            }
        }
    ]

    return list(jobs_collection.aggregate(pipeline))


@app.get("/salary-by-role")
def salary_by_role():

    pipeline = [
        {
            "$group": {
                "_id": "$job_title",
                "avg_salary": {"$avg": "$salary_max_usd"}
            }
        },
        {
            "$sort": {
                "avg_salary": -1
            }
        }
    ]

    results = list(jobs_collection.aggregate(pipeline))

    for item in results:
        item["avg_salary"] = round(item["avg_salary"])

    return results


@app.get("/remote-distribution")
def remote_distribution():

    pipeline = [
        {
            "$group": {
                "_id": "$remote_type",
                "count": {"$sum": 1}
            }
        }
    ]

    return list(jobs_collection.aggregate(pipeline))


@app.get("/experience-distribution")
def experience_distribution():

    pipeline = [
        {
            "$group": {
                "_id": "$experience_level",
                "count": {"$sum": 1}
            }
        }
    ]

    return list(jobs_collection.aggregate(pipeline))
@app.get("/jobs")
def get_jobs(page: int = 1, limit: int = 20):

    skip = (page - 1) * limit

    jobs = list(
        jobs_collection.find(
            {},
            {"_id": 0}
        )
        .skip(skip)
        .limit(limit)
    )

    return jobs
@app.get("/search")
def search_jobs(title: str = ""):

    jobs = list(
        jobs_collection.find(
            {
                "job_title": {
                    "$regex": title,
                    "$options": "i"
                }
            },
            {"_id": 0}
        ).limit(50)
    )

    return jobs
@app.get("/live-jobs")
def get_live_jobs():
    try:
        url = "https://www.arbeitnow.com/api/job-board-api"

        response = requests.get(url, timeout=10)

        if response.status_code != 200:
            return {
                "error": f"API returned status {response.status_code}"
            }

        data = response.json()

        jobs = []

        for job in data.get("data", [])[:50]:
            jobs.append({
                "title": job.get("title"),
                "company": job.get("company_name"),
                "location": job.get("location"),
                "remote": job.get("remote"),
                "url": job.get("url")
            })

        return jobs

    except Exception as e:
        return {
            "error": str(e)
        }

