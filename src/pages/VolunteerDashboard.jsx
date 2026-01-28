import React, { useState } from "react";
import { usePoints } from "../context/PointsContext";
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
} from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

// Mock data for pending donations
const mockDonations = [
  {
    id: 1,
    type: "Clothes",
    description: "Winter jackets and sweaters",
    location: "Sector 21, City Center",
    photo: "",
    status: "pending",
  },
  {
    id: 2,
    type: "Stationary",
    description: "Notebooks and pens",
    location: "Near School Road",
    photo: "",
    status: "pending",
  },
];

const VolunteerDashboard = () => {
  const [donations, setDonations] = useState(mockDonations);
  const [completed, setCompleted] = useState([]);
  const { addVolunteerPoints } = usePoints();

  const handleAccept = (id) => {
    setCompleted([...completed, id]);
    addVolunteerPoints(10);
    // Here you would update backend or context
  };

  return (
    <Box sx={{ maxWidth: 600, mx: "auto", mt: 6 }}>
      <Paper elevation={3} sx={{ p: 4 }}>
        <Typography variant="h4" gutterBottom>
          Volunteer Dashboard
        </Typography>
        <Typography variant="body1" sx={{ mb: 2 }}>
          Pending Pickups:
        </Typography>
        <List>
          {donations.map((donation) => (
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
                    </>
                  }
                />
                {completed.includes(donation.id) ? (
                  <CheckCircleIcon color="success" sx={{ ml: 2 }} />
                ) : (
                  <Button
                    variant="contained"
                    color="primary"
                    onClick={() => handleAccept(donation.id)}
                    sx={{ ml: 2 }}
                  >
                    Mark as Picked Up
                  </Button>
                )}
              </ListItem>
              <Divider component="li" />
            </React.Fragment>
          ))}
        </List>
      </Paper>
    </Box>
  );
};

export default VolunteerDashboard;
