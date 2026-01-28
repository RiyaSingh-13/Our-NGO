import React, { useState } from "react";
import {
  Box,
  Button,
  Typography,
  Checkbox,
  FormControlLabel,
  TextField,
  Paper,
} from "@mui/material";

const RegistrationPage = () => {
  const [userType, setUserType] = useState({ donor: false, volunteer: false });
  const [form, setForm] = useState({ name: "", email: "", password: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleTypeChange = (e) => {
    setUserType({ ...userType, [e.target.name]: e.target.checked });
  };

  const handleInputChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!userType.donor && !userType.volunteer) return;
    setSubmitted(true);
    // Here you would send data to backend or context
  };

  if (submitted) {
    return (
      <Paper elevation={3} sx={{ p: 4, mt: 4, textAlign: "center" }}>
        <Typography variant="h5" color="success.main">
          Registration Successful!
        </Typography>
        <Typography variant="body1" sx={{ mt: 2 }}>
          Welcome, {form.name}! You registered as{" "}
          {userType.donor && userType.volunteer
            ? "Donor & Volunteer"
            : userType.donor
              ? "Donor"
              : "Volunteer"}
          .
        </Typography>
      </Paper>
    );
  }

  return (
    <Box sx={{ maxWidth: 400, mx: "auto", mt: 6 }}>
      <Paper elevation={3} sx={{ p: 4 }}>
        <Typography variant="h4" gutterBottom>
          Register
        </Typography>
        <form onSubmit={handleSubmit}>
          <TextField
            label="Name"
            name="name"
            value={form.name}
            onChange={handleInputChange}
            fullWidth
            required
            margin="normal"
          />
          <TextField
            label="Email"
            name="email"
            type="email"
            value={form.email}
            onChange={handleInputChange}
            fullWidth
            required
            margin="normal"
          />
          <TextField
            label="Password"
            name="password"
            type="password"
            value={form.password}
            onChange={handleInputChange}
            fullWidth
            required
            margin="normal"
          />
          <Box sx={{ mt: 2 }}>
            <FormControlLabel
              control={
                <Checkbox
                  checked={userType.donor}
                  onChange={handleTypeChange}
                  name="donor"
                />
              }
              label="Register as Donor"
            />
            <FormControlLabel
              control={
                <Checkbox
                  checked={userType.volunteer}
                  onChange={handleTypeChange}
                  name="volunteer"
                />
              }
              label="Register as Volunteer"
            />
          </Box>
          <Button
            type="submit"
            variant="contained"
            color="primary"
            fullWidth
            sx={{ mt: 3 }}
            disabled={!userType.donor && !userType.volunteer}
          >
            Register
          </Button>
        </form>
      </Paper>
    </Box>
  );
};

export default RegistrationPage;
