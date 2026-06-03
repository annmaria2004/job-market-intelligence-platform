import { Card, CardContent, Typography } from "@mui/material";

function StatCard({ title, value }) {
  return (
    <Card elevation={3}>
      <CardContent>
        <Typography color="text.secondary">
          {title}
        </Typography>

        <Typography variant="h4" sx={{ mt: 1 }}>
          {value}
        </Typography>
      </CardContent>
    </Card>
  );
}

export default StatCard;