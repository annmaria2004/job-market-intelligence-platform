import Navbar from "../components/Navbar";
import {
  Container,
  Typography,
  Paper,
  Grid,
} from "@mui/material";

function About() {
  return (
    <>
      <Navbar />

      <Container maxWidth="lg" sx={{ py: 6 }}>
        <Typography
          variant="h3"
          sx={{
            color: "white",
            fontWeight: 700,
            mb: 3,
          }}
        >
          About AI Job Intelligence
        </Typography>

        <Typography
          sx={{
            color: "#CBD5E1",
            fontSize: "1.1rem",
            lineHeight: 1.8,
            mb: 5,
          }}
        >
          AI Job Intelligence is a web platform designed to help
          users explore Artificial Intelligence, Machine Learning,
          Data Science, and Analytics job opportunities while
          providing insights into current market trends.
          The platform combines job search, live job listings,
          and analytics into a single dashboard.
        </Typography>

        <Grid container spacing={3}>
          <Grid item xs={12} md={4}>
            <Paper
              sx={{
                p: 4,
                background: "#111827",
                color: "white",
                borderRadius: "16px",
              }}
            >
              <Typography variant="h6" sx={{ mb: 2 }}>
                Job Search
              </Typography>

              <Typography color="#CBD5E1">
                Search and explore AI-related jobs from a curated dataset.
              </Typography>
            </Paper>
          </Grid>

          <Grid item xs={12} md={4}>
            <Paper
              sx={{
                p: 4,
                background: "#111827",
                color: "white",
                borderRadius: "16px",
              }}
            >
              <Typography variant="h6" sx={{ mb: 2 }}>
                Live Jobs
              </Typography>

              <Typography color="#CBD5E1">
                Access real-time job opportunities powered by external APIs.
              </Typography>
            </Paper>
          </Grid>

          <Grid item xs={12} md={4}>
            <Paper
              sx={{
                p: 4,
                background: "#111827",
                color: "white",
                borderRadius: "16px",
              }}
            >
              <Typography variant="h6" sx={{ mb: 2 }}>
                Analytics
              </Typography>

              <Typography color="#CBD5E1">
                Analyze hiring trends, salaries, remote work adoption,
                and country-wise demand.
              </Typography>
            </Paper>
          </Grid>
        </Grid>

        <Typography
          variant="h4"
          sx={{
            color: "white",
            mt: 7,
            mb: 3,
            fontWeight: 600,
          }}
        >
          Technology Stack
        </Typography>

        <Paper
          sx={{
            p: 4,
            background: "#111827",
            color: "white",
            borderRadius: "16px",
          }}
        >
          <Typography sx={{ lineHeight: 2 }}>
            • Frontend: React + Material UI <br />
            • Backend: FastAPI (Python) <br />
            • Database: MongoDB Atlas <br />
            • APIs: JSearch API <br />
            • Deployment: Render Cloud
          </Typography>
        </Paper>
      </Container>
    </>
  );
}

export default About;