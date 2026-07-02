import Navbar from "../components/Navbar";
import { Box, Container, Typography } from "@mui/material";

const ErrorPage = () => {
  return (
    <Box sx={{
      display: 'flex',
      flexDirection: 'column',
      minHeight: '100vh',
      backgroundColor: 'background.default',
      color: 'text.primary',
    }}>
      <Navbar />
      <Container sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center', 
        flexGrow: 1,
        textAlign: 'center',
      }}>
      <Typography>An error occurred while loading the page.</Typography>
      <Typography>Get back to the <a href="/">homepage</a>.</Typography>
      </Container>
    </Box>
  );
};

export default ErrorPage;