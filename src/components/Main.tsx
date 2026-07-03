import { Box, Typography, Button } from "@mui/material";
import { Link } from "react-router";
import backgroundImage from "../assets/background_image.jpg";

const Main = () => {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        height: "calc(100vh - 64px)",
        width: "100%",
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center"
      }}
    >
      <Box sx={{ px: { xs: 4, md: 10 }, maxWidth: 440 }}>
        <Typography
          variant="body2"
          sx={{
            letterSpacing: '0.3em',
            textTransform: 'uppercase',
            color: 'text.secondary',
            mb: 2,
          }}
        >
          New Collection
        </Typography>
        <Typography variant="h1" sx={{ color: 'text.secondary', mb: 3 }}>
          Timeless Elegance
        </Typography>
        <Button
          component={Link}
          to="/products"
          variant="contained"
          color="secondary"
          disableElevation
          sx={{
            borderRadius: 0,
            color: 'primary.main',
            textTransform: 'uppercase',
            letterSpacing: '0.1em',
            fontWeight: 400,
            px: 4,
            py: 1.5,
            '&:hover': { backgroundColor: 'text.primary' },
          }}
        >
          Shop Now
        </Button>
      </Box>
    </Box>
  );
};

export default Main;