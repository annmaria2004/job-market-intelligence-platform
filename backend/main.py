
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
saved_jobs_collection = db["saved_jobs"]


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
def live_jobs():

    url = "https://jsearch.p.rapidapi.com/search"

    headers = {
        "X-RapidAPI-Key": os.getenv("RAPIDAPI_KEY"),
        "X-RapidAPI-Host": "jsearch.p.rapidapi.com"
    }

    params = {
        "query": "artificial intelligence OR machine learning OR data scientist",
        "page": "1",
        "num_pages": "1",
        "country": "us"
    }

    response = requests.get(
        url,
        headers=headers,
        params=params
    )

    data = response.json()

    jobs = []

    for job in data["data"][:30]:

        jobs.append({
            "title": job.get("job_title"),
            "company": job.get("employer_name"),
            "location": job.get("job_location"),
            "salary": job.get("job_salary_string"),
            "employment_type": job.get("job_employment_type"),
            "apply_link": job.get("job_apply_link")
        })

    return jobs
@app.get("/test-jsearch")
def test_jsearch():

    url = "https://jsearch.p.rapidapi.com/search"

    headers = {
        "X-RapidAPI-Key": os.getenv("RAPIDAPI_KEY"),
        "X-RapidAPI-Host": "jsearch.p.rapidapi.com"
    }

    params = {
        "query": "machine learning engineer",
        "page": "1",
        "num_pages": "1"
    }

    response = requests.get(
        url,
        headers=headers,
        params=params
    )

    return response.json()
@app.post("/save-job")
def save_job(job: dict):

    saved_jobs_collection.insert_one(job)

    return {
        "message": "Job saved successfully"
    }

@app.get("/saved-jobs")
def get_saved_jobs():

    jobs = list(
        saved_jobs_collection.find(
            {},
            {"_id": 0}
        )
    )

    return jobs

