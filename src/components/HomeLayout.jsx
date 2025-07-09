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

const HomeLayout = () => {
  return (
    <Container maxWidth="lg" sx={{ py: 8 }}>
      {/* Header */}
      <Box textAlign="center" mb={6}>
        <Typography variant="h3" fontWeight="bold" gutterBottom>
          Welcome to NoteFlow
        </Typography>
        <Typography variant="h6" color="text.secondary">
          A modern MERN-powered notes app to capture, organize, and manage your
          thoughts with ease.
        </Typography>
      </Box>

      {/* Features */}
      <Grid container spacing={4}>
        {[
          {
            icon: <NoteAddIcon color="primary" sx={{ fontSize: 40 }} />,
            title: "Add Notes",
            desc: "Quickly create and save notes with titles, descriptions, and optional images.",
          },
          {
            icon: <VisibilityIcon color="warning" sx={{ fontSize: 40 }} />,
            title: "View with Metadata",
            desc: "See all your notes with preview, date, and details at a glance.",
          },
          {
            icon: <SortIcon color="success" sx={{ fontSize: 40 }} />,
            title: "Sort Notes",
            desc: "Easily organize your notes by date in ascending or descending order.",
          },
          {
            icon: <DeleteSweepIcon color="error" sx={{ fontSize: 40 }} />,
            title: "Delete Notes",
            desc: "Remove unwanted notes instantly with a single click.",
          },
        ].map((feature, index) => (
          <Grid item xs={12} sm={6} md={3} key={index}>
            <Card
              sx={{ textAlign: "center", p: 2, minHeight: 220, boxShadow: 3 }}
            >
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
          Ready to take control of your notes?
        </Typography>
        <Button
          component={Link}
          to="/login"
          variant="contained"
          size="large"
          sx={{
            backgroundColor: "#212121",
            color: "#ffffff",
            px: 5,
            py: 1.5,
            mt: 3,
            "&:hover": {
              backgroundColor: "#000000",
            },
          }}
        >
          Get Started
        </Button>
      </Box>
    </Container>
  );
};

export default HomeLayout;
