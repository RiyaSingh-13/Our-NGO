import React, { useState } from "react";
import {
  Box,
  IconButton,
  Dialog,
  DialogTitle,
  DialogContent,
  Typography,
  Tooltip,
} from "@mui/material";
import InfoIcon from "@mui/icons-material/Info";

const BotInfo = () => {
  const [open, setOpen] = useState(false);
  return (
    <Box sx={{ position: "fixed", bottom: 24, right: 24, zIndex: 9999 }}>
      <Tooltip title="Need help?">
        <IconButton color="primary" size="large" onClick={() => setOpen(true)}>
          <InfoIcon fontSize="large" />
        </IconButton>
      </Tooltip>
      <Dialog open={open} onClose={() => setOpen(false)}>
        <DialogTitle>NGO Bot Information</DialogTitle>
        <DialogContent>
          <Typography variant="body1" sx={{ mb: 2 }}>
            Welcome! I am your NGO assistant bot. I can help you with
            registration, donations, volunteering, and certificates. If you have
            any questions, just ask!
          </Typography>
          <Typography variant="body2" color="text.secondary">
            For urgent help, contact us via the Contact page or email.
          </Typography>
        </DialogContent>
      </Dialog>
    </Box>
  );
};

export default BotInfo;
