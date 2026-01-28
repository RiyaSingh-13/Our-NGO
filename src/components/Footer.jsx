import React from "react";
import { Box, Typography, Link, Container } from "@mui/material";

const Footer = () => (
  <Box sx={{ bgcolor: "primary.main", color: "white", py: 3, mt: 8 }}>
    <Container maxWidth="md" sx={{ textAlign: "center" }}>
      <Typography variant="body1" sx={{ mb: 1 }}>
        &copy; {new Date().getFullYear()} Our NGO. All rights reserved.
      </Typography>
      <Typography variant="body2">
        <Link href="/about" color="inherit" underline="hover" sx={{ mx: 1 }}>
          About Us
        </Link>
        <Link href="/register" color="inherit" underline="hover" sx={{ mx: 1 }}>
          Register
        </Link>
        <Link href="/donor" color="inherit" underline="hover" sx={{ mx: 1 }}>
          Donate
        </Link>
        <Link
          href="/volunteer"
          color="inherit"
          underline="hover"
          sx={{ mx: 1 }}
        >
          Volunteer
        </Link>
      </Typography>
    </Container>
  </Box>
);

export default Footer;
