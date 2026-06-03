import { useEffect, useState } from "react";
import {
  TextField,
  Container,
  Typography,
  InputAdornment,
  Button,
  Box,
} from "@mui/material";

import SearchIcon from "@mui/icons-material/Search";

import Navbar from "../components/Navbar";
import JobCard from "../components/JobCard";
import API from "../services/api";

function Jobs() {
  const [jobs, setJobs] = useState([]);
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);

  useEffect(() => {
    fetchJobs(page);
  }, [page]);

  const fetchJobs = async (currentPage) => {
    try {
      const res = await API.get(
        `/jobs?page=${currentPage}&limit=20`
      );

      setJobs(res.data);
    } catch (err) {
      console.error(err);
    }
  };

  const searchJobs = async (value) => {
    setSearch(value);

    if (value.trim() === "") {
      fetchJobs(page);
      return;
    }

    try {
      const res = await API.get(
        `/search?title=${value}`
      );

      setJobs(res.data);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <>
      <Navbar />

      <Container maxWidth="lg" sx={{ mt: 5 }}>
        <Typography
          variant="h3"
          sx={{
            color: "white",
            fontWeight: 700,
            mb: 1,
          }}
        >
          Find Your Next AI Job
        </Typography>

        <Typography
          sx={{
            color: "#94A3B8",
            mb: 4,
          }}
        >
          Search from 50,000+ AI, Machine Learning,
          Data Science and Analytics jobs worldwide.
        </Typography>

        <TextField
          fullWidth
          placeholder="Search jobs (Engineer, Scientist, Analyst...)"
          value={search}
          onChange={(e) =>
            searchJobs(e.target.value)
          }
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon
                  sx={{ color: "#94A3B8" }}
                />
              </InputAdornment>
            ),
          }}
          sx={{
            mb: 4,

            "& .MuiOutlinedInput-root": {
              color: "white",
              background: "#111827",
              borderRadius: "12px",

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
            color: "#94A3B8",
            mb: 2,
          }}
        >
          Showing {jobs.length} jobs
        </Typography>

        <div>
          {jobs.map((job, index) => (
            <JobCard
              key={index}
              job={job}
            />
          ))}
        </div>

        {/* Pagination */}

        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: 2,
            mt: 5,
            mb: 5,
          }}
        >
          <Button
            variant="outlined"
            disabled={page === 1}
            onClick={() =>
              setPage(page - 1)
            }
          >
            Previous
          </Button>

          <Typography
            sx={{
              color: "white",
              fontWeight: "bold",
            }}
          >
            Page {page}
          </Typography>

          <Button
            variant="contained"
            onClick={() =>
              setPage(page + 1)
            }
          >
            Next
          </Button>
        </Box>
      </Container>
    </>
  );
}

export default Jobs;