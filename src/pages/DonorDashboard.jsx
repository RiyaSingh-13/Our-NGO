import React, { useState } from "react";
import {
  Box,
  Button,
  Typography,
  TextField,
  MenuItem,
  Paper,
  InputLabel,
  Select,
  FormControl,
} from "@mui/material";
import { usePoints } from "../context/PointsContext";

const donationTypes = [
  { value: "clothes", label: "Clothes" },
  { value: "money", label: "Money" },
  { value: "items", label: "Items" },
  { value: "stationary", label: "Stationary" },
  { value: "other", label: "Other" },
];

const DonorDashboard = () => {
  const [form, setForm] = useState({
    type: "",
    description: "",
    photo: null,
    location: "",
    amount: "",
  });
  const [preview, setPreview] = useState(null);
  const [submitted, setSubmitted] = useState(false);
  const { addDonorPoints } = usePoints();

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === "photo") {
      setForm({ ...form, photo: files[0] });
      setPreview(URL.createObjectURL(files[0]));
    } else {
      setForm({ ...form, [name]: value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    addDonorPoints(form.type === "money" ? Number(form.amount) || 10 : 10);
    // Here you would send data to backend or context
  };

  if (submitted) {
    return (
      <Paper elevation={3} sx={{ p: 4, mt: 4, textAlign: "center" }}>
        <Typography variant="h5" color="success.main">
          Donation Submitted!
        </Typography>
        <Typography variant="body1" sx={{ mt: 2 }}>
          Thank you for your contribution. Your donation is pending approval.
        </Typography>
      </Paper>
    );
  }

  return (
    <Box sx={{ maxWidth: 500, mx: "auto", mt: 6 }}>
      <Paper elevation={3} sx={{ p: 4 }}>
        <Typography variant="h4" gutterBottom>
          Donor Dashboard
        </Typography>
        <form onSubmit={handleSubmit}>
          <FormControl fullWidth margin="normal" required>
            <InputLabel>Donation Type</InputLabel>
            <Select
              name="type"
              value={form.type}
              label="Donation Type"
              onChange={handleChange}
            >
              {donationTypes.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
          {form.type === "money" && (
            <TextField
              label="Amount (INR)"
              name="amount"
              type="number"
              value={form.amount}
              onChange={handleChange}
              fullWidth
              required
              margin="normal"
            />
          )}
          <TextField
            label="Description"
            name="description"
            value={form.description}
            onChange={handleChange}
            fullWidth
            required
            margin="normal"
            multiline
            minRows={2}
          />
          <TextField
            label="Location (Address or Landmark)"
            name="location"
            value={form.location}
            onChange={handleChange}
            fullWidth
            required
            margin="normal"
          />
          <Button
            variant="contained"
            component="label"
            fullWidth
            sx={{ mt: 2 }}
          >
            Upload Photo
            <input
              type="file"
              name="photo"
              accept="image/*"
              hidden
              onChange={handleChange}
              required
            />
          </Button>
          {preview && (
            <Box sx={{ mt: 2, textAlign: "center" }}>
              <img
                src={preview}
                alt="Preview"
                style={{ maxWidth: "100%", maxHeight: 200 }}
              />
            </Box>
          )}
          <Button
            type="submit"
            variant="contained"
            color="primary"
            fullWidth
            sx={{ mt: 3 }}
            disabled={
              !form.type ||
              !form.description ||
              !form.location ||
              (form.type === "money" && !form.amount) ||
              !form.photo
            }
          >
            Submit Donation
          </Button>
        </form>
      </Paper>
    </Box>
  );
};

export default DonorDashboard;
