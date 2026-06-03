import Navbar from "../components/Navbar";
import {
  Container,
  Typography,
  Button,
  Grid,
  Paper,
  Box,
} from "@mui/material";
import { Link } from "react-router-dom";

function Home() {
  return (
    <>
      <Navbar />

      <Container maxWidth="xl">
        {/* HERO */}

        <Box
          sx={{
            textAlign: "center",
            py: 12,
          }}
        >
          <Typography
            variant="h1"
            sx={{
              fontWeight: 800,
              color: "white",
              mb: 3,
              fontSize: {
                xs: "3rem",
                md: "5rem",
              },
            }}
          >
            Global AI Job Market
          </Typography>

          <Typography
            sx={{
              color: "#94A3B8",
              fontSize: "1.5rem",
              maxWidth: "900px",
              mx: "auto",
              mb: 5,
            }}
          >
            Search 50,000+ AI, Machine Learning,
            Data Science and Analytics jobs
            worldwide.
          </Typography>

          <Button
            component={Link}
            to="/jobs"
            variant="contained"
            size="large"
            sx={{
              px: 5,
              py: 1.5,
              borderRadius: "14px",
              fontWeight: 700,
              fontSize: "1rem",
            }}
          >
            SEARCH JOBS
          </Button>
        </Box>

        {/* STATS */}

        <Grid
          container
          spacing={4}
          justifyContent="center"
          sx={{ mb: 12 }}
        >
          <Grid size={{ xs: 12, md: 4 }}>
            <Paper
              sx={{
                p: 5,
                textAlign: "center",
                background: "#111827",
                color: "white",
                borderRadius: "20px",
              }}
            >
              <Typography variant="h2">
                50K+
              </Typography>

              <Typography sx={{ mt: 2 }}>
                AI Jobs Available
              </Typography>
            </Paper>
          </Grid>

          <Grid size={{ xs: 12, md: 4 }}>
            <Paper
              sx={{
                p: 5,
                textAlign: "center",
                background: "#111827",
                color: "white",
                borderRadius: "20px",
              }}
            >
              <Typography variant="h2">
                6
              </Typography>

              <Typography sx={{ mt: 2 }}>
                Countries Covered
              </Typography>
            </Paper>
          </Grid>

          <Grid size={{ xs: 12, md: 4 }}>
            <Paper
              sx={{
                p: 5,
                textAlign: "center",
                background: "#111827",
                color: "white",
                borderRadius: "20px",
              }}
            >
              <Typography variant="h2">
                AI
              </Typography>

              <Typography sx={{ mt: 2 }}>
                ML • DS • Analytics
              </Typography>
            </Paper>
          </Grid>
        </Grid>

        {/* FEATURES */}

        <Typography
          variant="h2"
          sx={{
            color: "white",
            textAlign: "center",
            mb: 6,
            fontWeight: 700,
          }}
        >
          Platform Features
        </Typography>

        <Grid
          container
          spacing={4}
          sx={{ mb: 10 }}
        >
          <Grid size={{ xs: 12, md: 4 }}>
            <Paper
              sx={{
                p: 4,
                background: "#111827",
                color: "white",
                borderRadius: "20px",
                height: "100%",
              }}
            >
              <Typography variant="h5">
                🔍 Job Search
              </Typography>

              <Typography sx={{ mt: 2 }}>
                Search thousands of AI,
                Machine Learning and Data
                Science jobs instantly.
              </Typography>
            </Paper>
          </Grid>

          <Grid size={{ xs: 12, md: 4 }}>
            <Paper
              sx={{
                p: 4,
                background: "#111827",
                color: "white",
                borderRadius: "20px",
                height: "100%",
              }}
            >
              <Typography variant="h5">
                📊 Market Analytics
              </Typography>

              <Typography sx={{ mt: 2 }}>
                Explore salary trends,
                remote work statistics,
                and country-wise demand.
              </Typography>
            </Paper>
          </Grid>

          <Grid size={{ xs: 12, md: 4 }}>
            <Paper
              sx={{
                p: 4,
                background: "#111827",
                color: "white",
                borderRadius: "20px",
                height: "100%",
              }}
            >
              <Typography variant="h5">
                🌍 Global Coverage
              </Typography>

              <Typography sx={{ mt: 2 }}>
                Jobs from USA, UK,
                Germany, Canada,
                India and Australia.
              </Typography>
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </>
  );
}

export default Home;