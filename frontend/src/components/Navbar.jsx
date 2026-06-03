import {
  AppBar,
  Toolbar,
  Typography,
  Button,
} from "@mui/material";

import { Link } from "react-router-dom";

function Navbar() {
  return (
    <AppBar
      position="sticky"
      sx={{
        background: "#111827",
        boxShadow: "none",
        borderBottom: "1px solid #1F2937",
      }}
    >
      <Toolbar>
        <Typography
          variant="h6"
          sx={{
            flexGrow: 1,
            fontWeight: 700,
          }}
        >
          AI Job Intelligence
        </Typography>

        <Button color="inherit" component={Link} to="/">
          Home
        </Button>

        <Button color="inherit" component={Link} to="/jobs">
          Jobs
        </Button>

        <Button color="inherit" component={Link} to="/analytics">
          Analytics
        </Button>

        <Button color="inherit" component={Link} to="/about">
          About
        </Button>
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;