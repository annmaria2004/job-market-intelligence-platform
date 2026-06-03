import { useEffect, useState } from "react";
import {
  Container,
  Grid,
  Paper,
  Typography,
} from "@mui/material";

import Navbar from "../components/Navbar";
import API from "../services/api";
import AnalyticsCharts from "../components/AnalyticsCharts";

function Analytics() {
  const [totalJobs, setTotalJobs] = useState(0);
  const [countries, setCountries] = useState([]);
  const [remoteData, setRemoteData] = useState([]);
  const [experienceData, setExperienceData] = useState([]);

  useEffect(() => {
    fetchAnalytics();
  }, []);

  const fetchAnalytics = async () => {
    try {
      const totalRes = await API.get("/total-jobs");
      const countriesRes = await API.get("/countries");
      const remoteRes = await API.get("/remote-distribution");
      const experienceRes = await API.get(
        "/experience-distribution"
      );

      setTotalJobs(totalRes.data.total_jobs);
      setCountries(countriesRes.data);
      setRemoteData(remoteRes.data);
      setExperienceData(experienceRes.data);
    } catch (error) {
      console.error("Analytics Error:", error);
    }
  };

  return (
    <>
      <Navbar />

      <Container sx={{ mt: 4 }}>
        <Typography
          variant="h4"
          sx={{
            color: "white",
            mb: 4,
            fontWeight: "bold",
          }}
        >
          Job Market Analytics
        </Typography>

        <Grid container spacing={3}>
          <Grid item xs={12} md={3}>
            <Paper
              sx={{
                p: 3,
                background: "#111827",
                color: "white",
              }}
            >
              <Typography>Total Jobs</Typography>

              <Typography variant="h4">
                {totalJobs.toLocaleString()}
              </Typography>
            </Paper>
          </Grid>

          <Grid item xs={12} md={3}>
            <Paper
              sx={{
                p: 3,
                background: "#111827",
                color: "white",
              }}
            >
              <Typography>Countries</Typography>

              <Typography variant="h4">
                {countries.length}
              </Typography>
            </Paper>
          </Grid>

          <Grid item xs={12} md={3}>
            <Paper
              sx={{
                p: 3,
                background: "#111827",
                color: "white",
              }}
            >
              <Typography>Remote Types</Typography>

              <Typography variant="h4">
                {remoteData.length}
              </Typography>
            </Paper>
          </Grid>

          <Grid item xs={12} md={3}>
            <Paper
              sx={{
                p: 3,
                background: "#111827",
                color: "white",
              }}
            >
              <Typography>Experience Levels</Typography>

              <Typography variant="h4">
                {experienceData.length}
              </Typography>
            </Paper>
          </Grid>
        </Grid>

        <Paper
          sx={{
            mt: 4,
            p: 3,
            background: "#111827",
            color: "white",
          }}
        >
          <Typography variant="h6" sx={{ mb: 2 }}>
            Top Countries
          </Typography>

          {countries.slice(0, 6).map((country, index) => (
            <Typography key={index}>
              {country._id} : {country.count.toLocaleString()} jobs
            </Typography>
          ))}
        </Paper>
        <AnalyticsCharts
  countries={countries}
  remoteData={remoteData}
/>
      </Container>
    </>
  );
}

export default Analytics;