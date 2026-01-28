import React from "react";
import { Container, Typography, Box, Avatar, Grid, Paper } from "@mui/material";

const team = [
  {
    name: "Amit Kumar",
    role: "Founder",
    img: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    name: "Priya Singh",
    role: "Coordinator",
    img: "https://randomuser.me/api/portraits/women/44.jpg",
  },
];

const AboutPage = () => (
  <Container maxWidth="md" sx={{ mt: 8, mb: 8 }}>
    <Paper elevation={3} sx={{ p: 4, mb: 4 }}>
      <Typography
        variant="h3"
        sx={{ fontWeight: 700, mb: 2, color: "primary.main" }}
      >
        About Our NGO
      </Typography>
      <Typography variant="h6" sx={{ mb: 2 }}>
        Our mission is to empower communities through donations and
        volunteering. We believe in transparency, impact, and collaboration.
      </Typography>
      <Typography variant="body1" sx={{ mb: 2 }}>
        Since our founding, we have helped thousands of people with clothes,
        stationery, and essentials. Join us to make a difference!
      </Typography>
    </Paper>
    <Typography variant="h4" sx={{ mb: 2, mt: 4 }}>
      Meet Our Team
    </Typography>
    <Grid container spacing={4} justifyContent="center">
      {team.map((member) => (
        <Grid item key={member.name}>
          <Box sx={{ textAlign: "center" }}>
            <Avatar
              src={member.img}
              sx={{ width: 80, height: 80, mx: "auto", mb: 1 }}
            />
            <Typography variant="h6">{member.name}</Typography>
            <Typography variant="body2" color="text.secondary">
              {member.role}
            </Typography>
          </Box>
        </Grid>
      ))}
    </Grid>
  </Container>
);

export default AboutPage;
