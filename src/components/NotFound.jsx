import React from "react";
import { Container, Typography, Box, Button } from "@mui/material";
import ErrorOutlineIcon from "@mui/icons-material/ErrorOutline";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <Container maxWidth="md" sx={{ py: 10, textAlign: "center" }}>
      <Box mb={4}>
        <ErrorOutlineIcon color="error" sx={{ fontSize: 80 }} />
      </Box>
      <Typography variant="h3" fontWeight="bold" gutterBottom>
        404 - Page Not Found
      </Typography>
      <Typography variant="h6" color="text.secondary" mb={4}>
        Oops! The page you're looking for doesn't exist or has been moved.
      </Typography>
      <Button
        component={Link}
        to="/"
        variant="contained"
        size="large"
        sx={{
          backgroundColor: "#212121",
          color: "#ffffff",
          px: 5,
          py: 1.5,
          "&:hover": {
            backgroundColor: "#000000",
          },
        }}
      >
        Go to Homepage
      </Button>
    </Container>
  );
};

export default NotFound;
