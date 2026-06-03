import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Box,
} from "@mui/material";

import { Link } from "react-router-dom";

function Navbar() {
  return (
    <AppBar
      position="sticky"
      sx={{
        background: "#0F172A",
        borderBottom: "1px solid #1E293B",
        boxShadow: "none",
      }}
    >
      <Toolbar>
        <Typography
          variant="h6"
          sx={{
            flexGrow: 1,
            fontWeight: 800,
            color: "#3B82F6",
          }}
        >
          AI Job Intelligence
        </Typography>

        <Box
          sx={{
            display: "flex",
            gap: 1,
          }}
        >
          <Button
            color="inherit"
            component={Link}
            to="/"
          >
            Home
          </Button>

          <Button
            color="inherit"
            component={Link}
            to="/jobs"
          >
            Jobs
          </Button>

          <Button
            color="inherit"
            component={Link}
            to="/live-jobs"
          >
            Live Jobs
          </Button>
          <Button
  color="inherit"
  component={Link}
  to="/saved-jobs"
>
  Saved Jobs
</Button>

          <Button
            color="inherit"
            component={Link}
            to="/analytics"
          >
            Analytics
          </Button>

          <Button
            color="inherit"
            component={Link}
            to="/about"
          >
            About
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;