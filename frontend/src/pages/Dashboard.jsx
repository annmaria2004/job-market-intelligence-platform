import { useEffect, useState } from "react";
import { Container, Grid } from "@mui/material";

import Navbar from "../components/Navbar";
import StatCard from "../components/StatCard";
import API from "../services/api";

function Dashboard() {
  const [totalJobs, setTotalJobs] = useState(0);
  const [countries, setCountries] = useState(0);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const jobsRes = await API.get("/total-jobs");
      setTotalJobs(jobsRes.data.total_jobs);

      const countriesRes = await API.get("/countries");
      setCountries(countriesRes.data.length);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  return (
    <>
      <Navbar />

      <Container sx={{ mt: 4 }}>
        <Grid container spacing={3}>
          <Grid item xs={12} md={3}>
            <StatCard
              title="Total Jobs"
              value={totalJobs}
            />
          </Grid>

          <Grid item xs={12} md={3}>
            <StatCard
              title="Countries"
              value={countries}
            />
          </Grid>

          <Grid item xs={12} md={3}>
            <StatCard
              title="Avg Salary"
              value="$120K"
            />
          </Grid>

          <Grid item xs={12} md={3}>
            <StatCard
              title="Remote Jobs"
              value="33%"
            />
          </Grid>
        </Grid>
      </Container>
    </>
  );
}

export default Dashboard;