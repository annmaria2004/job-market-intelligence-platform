import Navbar from "../components/Navbar";
import { Container, Typography } from "@mui/material";

function LiveJobs() {
  return (
    <>
      <Navbar />

      <Container sx={{ mt: 5 }}>
        <Typography
          variant="h3"
          sx={{
            color: "white",
            fontWeight: 700,
          }}
        >
          Live Jobs
        </Typography>

        <Typography
          sx={{
            color: "#94A3B8",
            mt: 2,
          }}
        >
          Real-time jobs from external APIs will appear here.
        </Typography>
      </Container>
    </>
  );
}

export default LiveJobs;