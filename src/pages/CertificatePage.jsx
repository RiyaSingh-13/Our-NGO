import React from "react";
import { Box, Paper, Typography, Button } from "@mui/material";
import { usePoints } from "../context/PointsContext";

const CERTIFICATE_THRESHOLD = 50;

const CertificatePage = () => {
  const { points } = usePoints();
  const totalPoints = points.donor + points.volunteer;
  const eligible = totalPoints >= CERTIFICATE_THRESHOLD;

  return (
    <Box sx={{ maxWidth: 500, mx: "auto", mt: 6 }}>
      <Paper elevation={3} sx={{ p: 4, textAlign: "center" }}>
        <Typography variant="h4" gutterBottom>
          Certificate
        </Typography>
        <Typography variant="body1" sx={{ mb: 2 }}>
          Your Points: {totalPoints} (Donor: {points.donor}, Volunteer:{" "}
          {points.volunteer})
        </Typography>
        {eligible ? (
          <>
            <Typography variant="h6" color="success.main" sx={{ mb: 2 }}>
              Congratulations! You are eligible for a certificate.
            </Typography>
            <Button
              variant="contained"
              color="primary"
              onClick={() => window.print()}
            >
              Download/Print Certificate
            </Button>
            <Paper elevation={1} sx={{ mt: 4, p: 3, background: "#f5f5f5" }}>
              <Typography variant="h5">Certificate of Appreciation</Typography>
              <Typography variant="body1" sx={{ mt: 2 }}>
                This is to certify that you have contributed selflessly as a
                Donor/Volunteer and achieved {totalPoints} points in our NGO
                platform.
              </Typography>
              <Typography variant="body2" sx={{ mt: 2 }}>
                Date: {new Date().toLocaleDateString()}
              </Typography>
            </Paper>
          </>
        ) : (
          <Typography variant="body1" color="error">
            Earn {CERTIFICATE_THRESHOLD - totalPoints} more points to unlock
            your certificate.
          </Typography>
        )}
      </Paper>
    </Box>
  );
};

export default CertificatePage;
