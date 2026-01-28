import React from "react";
import { AppBar, Toolbar, Typography, Button, Box } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";

const Navbar = () => {
  return (
    <AppBar position="static" color="primary" sx={{ mb: 4 }}>
      <Toolbar>
        <Typography variant="h6" sx={{ flexGrow: 1, fontWeight: 700 }}>
          Our NGO
        </Typography>
        <Box>
          <Button color="inherit" component={RouterLink} to="/">
            Home
          </Button>
          <Button color="inherit" component={RouterLink} to="/register">
            Register
          </Button>
          <Button color="inherit" component={RouterLink} to="/donor">
            Donor
          </Button>
          <Button color="inherit" component={RouterLink} to="/volunteer">
            Volunteer
          </Button>
          <Button color="inherit" component={RouterLink} to="/certificate">
            Certificate
          </Button>
          <Button color="inherit" component={RouterLink} to="/admin">
            Admin
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
