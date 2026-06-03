import { useEffect, useState } from "react";
import {
  Container,
  Typography,
  Card,
  CardContent,
  Button,
  Chip,
} from "@mui/material";

import Navbar from "../components/Navbar";
import API from "../services/api";

function SavedJobs() {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    fetchSavedJobs();
  }, []);

  const fetchSavedJobs = async () => {
    try {
      const res = await API.get("/saved-jobs");
      setJobs(res.data);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <>
      <Navbar />

      <Container maxWidth="lg" sx={{ mt: 5, mb: 5 }}>
        <Typography
          variant="h3"
          sx={{
            color: "white",
            fontWeight: 700,
            mb: 2,
          }}
        >
          Saved Jobs
        </Typography>

        <Typography
          sx={{
            color: "#94A3B8",
            mb: 4,
          }}
        >
          View and manage jobs you have saved for future applications.
        </Typography>

        <Typography
          sx={{
            color: "#3B82F6",
            fontWeight: 600,
            mb: 3,
          }}
        >
          {jobs.length} Saved Jobs
        </Typography>

        {jobs.length === 0 ? (
          <Typography
            sx={{
              color: "#CBD5E1",
            }}
          >
            No saved jobs found.
          </Typography>
        ) : (
          jobs.map((job, index) => (
            <Card
              key={index}
              sx={{
                mb: 3,
                background: "#111827",
                color: "white",
                borderRadius: "18px",
                border: "1px solid #1F2937",
              }}
            >
              <CardContent>
                <Typography
                  variant="h5"
                  sx={{
                    fontWeight: 700,
                    mb: 1,
                  }}
                >
                  {job.title}
                </Typography>

                <Typography
                  sx={{
                    color: "#60A5FA",
                    fontWeight: 600,
                    mb: 2,
                  }}
                >
                  {job.company}
                </Typography>

                <Typography sx={{ mb: 1 }}>
                  📍 {job.location || "Location Not Available"}
                </Typography>

                <Typography sx={{ mb: 2 }}>
                  💼 {job.employment_type || "Not Specified"}
                </Typography>

                <div
                  style={{
                    display: "flex",
                    gap: "10px",
                    flexWrap: "wrap",
                    marginBottom: "15px",
                  }}
                >
                  <Chip
                    label="Saved"
                    sx={{
                      background: "#065F46",
                      color: "white",
                    }}
                  />

                  {job.salary && (
                    <Chip
                      label={job.salary}
                      sx={{
                        background: "#1E293B",
                        color: "#38BDF8",
                      }}
                    />
                  )}
                </div>

                <Button
                  variant="contained"
                  href={job.apply_link}
                  target="_blank"
                  sx={{
                    background: "#2563EB",
                    borderRadius: "10px",
                  }}
                >
                  Apply Now
                </Button>
              </CardContent>
            </Card>
          ))
        )}
      </Container>
    </>
  );
}

export default SavedJobs;