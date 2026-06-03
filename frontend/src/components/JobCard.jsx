import {
  Card,
  CardContent,
  Typography,
  Chip,
  Stack,
  Box,
} from "@mui/material";

function JobCard({ job }) {
  return (
    <Card
      sx={{
        mb: 3,
        background: "#111827",
        color: "white",
        border: "1px solid #1F2937",
        borderRadius: "16px",
        transition: "0.3s",

        "&:hover": {
          transform: "translateY(-4px)",
          borderColor: "#3B82F6",
          boxShadow:
            "0 10px 30px rgba(59,130,246,0.15)",
        },
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
          {job.job_title}
        </Typography>

        <Typography
          sx={{
            color: "#94A3B8",
            mb: 2,
          }}
        >
          {job.industry}
        </Typography>

        <Box sx={{ mb: 2 }}>
          <Typography sx={{ color: "#E5E7EB" }}>
            📍 {job.city}, {job.country}
          </Typography>
        </Box>

        <Stack
          direction="row"
          spacing={1}
          flexWrap="wrap"
          sx={{ mb: 2 }}
        >
          <Chip
            label={job.remote_type}
            sx={{
              background: "#1E3A8A",
              color: "white",
            }}
          />

          <Chip
            label={job.experience_level}
            sx={{
              background: "#065F46",
              color: "white",
            }}
          />

          <Chip
            label={job.employment_type}
            sx={{
              background: "#374151",
              color: "white",
            }}
          />
        </Stack>

        <Typography
          sx={{
            color: "#10B981",
            fontWeight: 700,
            fontSize: "18px",
          }}
        >
          💰 $
          {job.salary_min_usd.toLocaleString()}
          {" - "}
          $
          {job.salary_max_usd.toLocaleString()}
        </Typography>

        <Typography
          sx={{
            mt: 1,
            color: "#94A3B8",
          }}
        >
          Company Size: {job.company_size}
        </Typography>
      </CardContent>
    </Card>
  );
}

export default JobCard;