import React, { useState } from "react";
import {
  Box,
  Button,
  Typography,
  Paper,
  List,
  ListItem,
  ListItemText,
  ListItemAvatar,
  Avatar,
  Divider,
  Chip,
} from "@mui/material";

// Mock data for admin approval
const mockPending = [
  {
    id: 1,
    type: "Clothes",
    description: "Winter jackets and sweaters",
    location: "Sector 21, City Center",
    photo: "",
    status: "pending",
    donor: "Amit Kumar",
  },
  {
    id: 2,
    type: "Stationary",
    description: "Notebooks and pens",
    location: "Near School Road",
    photo: "",
    status: "pending",
    donor: "Priya Singh",
  },
];

const AdminDashboard = () => {
  const [pending, setPending] = useState(mockPending);
  const [approved, setApproved] = useState([]);
  const [rejected, setRejected] = useState([]);

  const handleApprove = (id) => {
    setApproved([...approved, id]);
    setPending(pending.filter((d) => d.id !== id));
    // Here you would update backend or context
  };

  const handleReject = (id) => {
    setRejected([...rejected, id]);
    setPending(pending.filter((d) => d.id !== id));
    // Here you would update backend or context
  };

  return (
    <Box sx={{ maxWidth: 700, mx: "auto", mt: 6 }}>
      <Paper elevation={3} sx={{ p: 4 }}>
        <Typography variant="h4" gutterBottom>
          Admin Dashboard
        </Typography>
        <Typography variant="body1" sx={{ mb: 2 }}>
          Pending Donations for Approval:
        </Typography>
        <List>
          {pending.length === 0 && (
            <Typography
              color="text.secondary"
              sx={{ textAlign: "center", my: 2 }}
            >
              No pending donations.
            </Typography>
          )}
          {pending.map((donation) => (
            <React.Fragment key={donation.id}>
              <ListItem alignItems="flex-start">
                <ListItemAvatar>
                  <Avatar>{donation.type.charAt(0)}</Avatar>
                </ListItemAvatar>
                <ListItemText
                  primary={donation.type}
                  secondary={
                    <>
                      <Typography
                        component="span"
                        variant="body2"
                        color="text.primary"
                      >
                        {donation.description}
                      </Typography>
                      <br />
                      <Typography
                        component="span"
                        variant="body2"
                        color="text.secondary"
                      >
                        Location: {donation.location}
                      </Typography>
                      <br />
                      <Chip
                        label={`Donor: ${donation.donor}`}
                        size="small"
                        sx={{ mt: 1 }}
                      />
                    </>
                  }
                />
                <Button
                  variant="contained"
                  color="success"
                  onClick={() => handleApprove(donation.id)}
                  sx={{ ml: 2 }}
                >
                  Approve
                </Button>
                <Button
                  variant="outlined"
                  color="error"
                  onClick={() => handleReject(donation.id)}
                  sx={{ ml: 1 }}
                >
                  Reject
                </Button>
              </ListItem>
              <Divider component="li" />
            </React.Fragment>
          ))}
        </List>
      </Paper>
    </Box>
  );
};

export default AdminDashboard;
