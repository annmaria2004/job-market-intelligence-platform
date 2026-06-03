import Navbar from "../components/Navbar";
import {
  Container,
  Typography,
  Grid,
  Paper,
  Box,
} from "@mui/material";

function About() {
  return (
    <>
      <Navbar />

      <Container maxWidth="xl">
        {/* Hero Section */}

        <Box
          sx={{
            textAlign: "center",
            py: 10,
          }}
        >
          <Typography
            variant="h2"
            sx={{
              color: "white",
              fontWeight: 800,
              mb: 3,
            }}
          >
            About AI Job Intelligence
          </Typography>

          <Typography
            sx={{
              color: "#94A3B8",
              fontSize: "1.3rem",
              maxWidth: "900px",
              mx: "auto",
            }}
          >
            A modern platform designed to help
            professionals discover AI opportunities,
            analyze job market trends and explore
            global hiring insights.
          </Typography>
        </Box>

        {/* Mission & Vision */}

        <Grid container spacing={4}>
          <Grid size={{ xs: 12, md: 6 }}>
            <Paper
              sx={{
                p: 5,
                background: "#111827",
                color: "white",
                borderRadius: "20px",
                height: "100%",
              }}
            >
              <Typography
                variant="h4"
                sx={{ mb: 3 }}
              >
                🎯 Mission
              </Typography>

              <Typography>
                To simplify the job search process
                for AI, Machine Learning and Data
                Science professionals by providing
                a single intelligent platform for
                discovery and analysis.
              </Typography>
            </Paper>
          </Grid>

          <Grid size={{ xs: 12, md: 6 }}>
            <Paper
              sx={{
                p: 5,
                background: "#111827",
                color: "white",
                borderRadius: "20px",
                height: "100%",
              }}
            >
              <Typography
                variant="h4"
                sx={{ mb: 3 }}
              >
                🚀 Vision
              </Typography>

              <Typography>
                To become a global intelligence
                platform that connects talent with
                opportunities and provides insights
                into the future of AI employment.
              </Typography>
            </Paper>
          </Grid>
        </Grid>

        {/* Technology Stack */}

        <Typography
          variant="h3"
          sx={{
            color: "white",
            textAlign: "center",
            mt: 10,
            mb: 5,
          }}
        >
          Technology Stack
        </Typography>

        <Grid
          container
          spacing={3}
          sx={{ mb: 10 }}
        >
          <Grid size={{ xs: 12, md: 3 }}>
            <Paper
              sx={{
                p: 4,
                textAlign: "center",
                background: "#111827",
                color: "white",
                borderRadius: "20px",
              }}
            >
              <Typography variant="h4">
                ⚛️
              </Typography>

              <Typography sx={{ mt: 2 }}>
                React
              </Typography>
            </Paper>
          </Grid>

          <Grid size={{ xs: 12, md: 3 }}>
            <Paper
              sx={{
                p: 4,
                textAlign: "center",
                background: "#111827",
                color: "white",
                borderRadius: "20px",
              }}
            >
              <Typography variant="h4">
                🚀
              </Typography>

              <Typography sx={{ mt: 2 }}>
                FastAPI
              </Typography>
            </Paper>
          </Grid>

          <Grid size={{ xs: 12, md: 3 }}>
            <Paper
              sx={{
                p: 4,
                textAlign: "center",
                background: "#111827",
                color: "white",
                borderRadius: "20px",
              }}
            >
              <Typography variant="h4">
                🍃
              </Typography>

              <Typography sx={{ mt: 2 }}>
                MongoDB
              </Typography>
            </Paper>
          </Grid>

          <Grid size={{ xs: 12, md: 3 }}>
            <Paper
              sx={{
                p: 4,
                textAlign: "center",
                background: "#111827",
                color: "white",
                borderRadius: "20px",
              }}
            >
              <Typography variant="h4">
                ☁️
              </Typography>

              <Typography sx={{ mt: 2 }}>
                Render Cloud
              </Typography>
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </>
  );
}

export default About;