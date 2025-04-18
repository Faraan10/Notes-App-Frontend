import React from "react";
import {
  Container,
  Typography,
  Box,
  Grid,
  Card,
  CardContent,
  Button,
} from "@mui/material";
import NoteAddIcon from "@mui/icons-material/NoteAdd";
import DeleteSweepIcon from "@mui/icons-material/DeleteSweep";
import SortIcon from "@mui/icons-material/Sort";
import VisibilityIcon from "@mui/icons-material/Visibility";
import { Link } from "react-router-dom";

const StaticHome = () => {
  return (
    <Container maxWidth="lg" sx={{ py: 8 }}>
      {/* Header */}
      <Box textAlign="center" mb={6}>
        <Typography variant="h3" fontWeight="bold" gutterBottom>
          Welcome to NoteVault
        </Typography>
        <Typography variant="h6" color="text.secondary">
          A sleek, secure MERN-powered notes app to organize your thoughts
          effortlessly.
        </Typography>
      </Box>

      {/* Feature Highlights */}
      <Grid container spacing={4}>
        {[
          {
            icon: <NoteAddIcon color="primary" sx={{ fontSize: 40 }} />,
            title: "Add Notes",
            desc: "Create new notes with title, description, and optional images.",
          },
          {
            icon: <VisibilityIcon color="primary" sx={{ fontSize: 40 }} />,
            title: "View with Metadata",
            desc: "View all notes on your dashboard with date and content preview.",
          },
          {
            icon: <SortIcon color="primary" sx={{ fontSize: 40 }} />,
            title: "Sort Notes",
            desc: "Sort your notes by ascending or descending creation date.",
          },
          {
            icon: <DeleteSweepIcon color="error" sx={{ fontSize: 40 }} />,
            title: "Delete Notes",
            desc: "Easily remove notes with one click from your dashboard.",
          },
        ].map((feature, index) => (
          <Grid item xs={12} sm={6} md={3} key={index}>
            <Card sx={{ textAlign: "center", p: 2, minHeight: 220 }}>
              <CardContent>
                <Box mb={2}>{feature.icon}</Box>
                <Typography variant="h6" gutterBottom>
                  {feature.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {feature.desc}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>

      {/* Call to Action */}
      <Box textAlign="center" mt={8}>
        <Typography variant="h5" gutterBottom>
          Ready to manage your notes like a pro?
        </Typography>
        <Button
          component={Link}
          to="/login"
          variant="contained"
          size="large"
          sx={{ mt: 2, px: 5, py: 1.5 }}
        >
          Get Started
        </Button>
      </Box>
    </Container>
  );
};

export default StaticHome;
