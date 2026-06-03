import { useEffect, useState } from "react";
import {
  Container,
  Typography,
  Card,
  CardContent,
  Button,
  TextField,
  InputAdornment,
  Chip,
} from "@mui/material";

import SearchIcon from "@mui/icons-material/Search";
import BookmarkIcon from "@mui/icons-material/Bookmark";

import Navbar from "../components/Navbar";
import API from "../services/api";

function LiveJobs() {
  const [jobs, setJobs] = useState([]);
  const [filteredJobs, setFilteredJobs] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    fetchLiveJobs();
  }, []);

  const fetchLiveJobs = async () => {
    try {
      const res = await API.get("/live-jobs");

      setJobs(res.data);
      setFilteredJobs(res.data);
    } catch (err) {
      console.error(err);
    }
  };

  const saveJob = async (job) => {
    try {
      await API.post("/save-job", job);

      alert("Job Saved Successfully");
    } catch (err) {
      console.error(err);
      alert("Failed to save job");
    }
  };

  const handleSearch = (value) => {
    setSearch(value);

    const filtered = jobs.filter(
      (job) =>
        job.title?.toLowerCase().includes(value.toLowerCase()) ||
        job.company?.toLowerCase().includes(value.toLowerCase())
    );

    setFilteredJobs(filtered);
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
          Live AI Jobs
        </Typography>

        <Typography
          sx={{
            color: "#94A3B8",
            mb: 4,
            fontSize: "1.05rem",
          }}
        >
          Access real-time insights into the global AI talent market,
          featuring current openings across Machine Learning,
          Data Science, Analytics, and Emerging Technologies.
        </Typography>

        <TextField
          fullWidth
          placeholder="Search live jobs..."
          value={search}
          onChange={(e) => handleSearch(e.target.value)}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon sx={{ color: "#94A3B8" }} />
              </InputAdornment>
            ),
          }}
          sx={{
            mb: 4,

            "& .MuiOutlinedInput-root": {
              background: "#111827",
              color: "white",
              borderRadius: "14px",

              "& fieldset": {
                borderColor: "#374151",
              },

              "&:hover fieldset": {
                borderColor: "#3B82F6",
              },

              "&.Mui-focused fieldset": {
                borderColor: "#3B82F6",
              },
            },
          }}
        />

        <Typography
          sx={{
            color: "#3B82F6",
            fontWeight: 600,
            mb: 3,
          }}
        >
          {filteredJobs.length} Live Opportunities Found
        </Typography>

        {filteredJobs.map((job, index) => (
          <Card
            key={index}
            sx={{
              mb: 3,
              background: "#111827",
              color: "white",
              borderRadius: "18px",
              border: "1px solid #1F2937",

              "&:hover": {
                borderColor: "#3B82F6",
                transform: "translateY(-2px)",
              },

              transition: "0.3s",
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
                  marginBottom: "16px",
                }}
              >
                <Chip
                  label="Live Job"
                  sx={{
                    background: "#1E40AF",
                    color: "white",
                  }}
                />

                {job.salary && (
                  <Chip
                    label={job.salary}
                    sx={{
                      background: "#065F46",
                      color: "white",
                    }}
                  />
                )}
              </div>

              <div
                style={{
                  display: "flex",
                  gap: "10px",
                  marginTop: "15px",
                }}
              >
                <Button
                  variant="contained"
                  href={job.apply_link}
                  target="_blank"
                  sx={{
                    background: "#2563EB",
                    borderRadius: "10px",
                    px: 4,
                  }}
                >
                  Apply Now
                </Button>

                <Button
                  variant="outlined"
                  startIcon={<BookmarkIcon />}
                  onClick={() => saveJob(job)}
                  sx={{
                    borderColor: "#3B82F6",
                    color: "#3B82F6",
                    borderRadius: "10px",

                    "&:hover": {
                      borderColor: "#60A5FA",
                      background: "rgba(59,130,246,0.1)",
                    },
                  }}
                >
                  Save
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </Container>
    </>
  );
}

export default LiveJobs;