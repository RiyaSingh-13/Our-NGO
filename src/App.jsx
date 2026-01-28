import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

import DonorDashboard from "./pages/DonorDashboard";
import VolunteerDashboard from "./pages/VolunteerDashboard";
import RegistrationPage from "./pages/RegistrationPage";
import { PointsProvider } from "./context/PointsContext";
import CertificatePage from "./pages/CertificatePage";
import AdminDashboard from "./pages/AdminDashboard";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import { Box, Typography, Button, Container } from "@mui/material";
import Footer from "./components/Footer";
import BotInfo from "./components/BotInfo";
import AboutPage from "./pages/AboutPage";

function App() {
  const [count, setCount] = useState(0);

  return (
    <PointsProvider>
      <Router>
        <Navbar />
        <Routes>
          <Route
            path="/"
            element={
              <Container maxWidth="md" sx={{ mt: 8, mb: 8 }}>
                <Box
                  sx={{
                    textAlign: "center",
                    py: 6,
                    px: 2,
                    bgcolor: "#f5f7fa",
                    borderRadius: 4,
                    boxShadow: 3,
                  }}
                >
                  <img
                    src={viteLogo}
                    alt="Vite logo"
                    style={{
                      width: 80,
                      marginRight: 16,
                      verticalAlign: "middle",
                    }}
                  />
                  <img
                    src={reactLogo}
                    alt="React logo"
                    style={{ width: 80, verticalAlign: "middle" }}
                  />
                  <Typography
                    variant="h2"
                    sx={{
                      fontWeight: 700,
                      mt: 3,
                      mb: 2,
                      color: "primary.main",
                    }}
                  >
                    Welcome to Our NGO
                  </Typography>
                  <Typography
                    variant="h5"
                    sx={{ mb: 4, color: "text.secondary" }}
                  >
                    Join us in making a difference! Register as a donor or
                    volunteer, contribute, and earn certificates for your
                    impact.
                  </Typography>
                  <Button
                    variant="contained"
                    color="primary"
                    size="large"
                    href="/register"
                    sx={{ mr: 2 }}
                  >
                    Get Started
                  </Button>
                  <Button
                    variant="outlined"
                    color="primary"
                    size="large"
                    href="/donor"
                  >
                    Donate Now
                  </Button>
                </Box>
              </Container>
            }
          />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/register" element={<RegistrationPage />} />
          <Route path="/donor" element={<DonorDashboard />} />
          <Route path="/volunteer" element={<VolunteerDashboard />} />
          <Route path="/certificate" element={<CertificatePage />} />
          <Route path="/admin" element={<AdminDashboard />} />
        </Routes>
        <Footer />
        <BotInfo />
      </Router>
    </PointsProvider>
  );
}

export default App;
