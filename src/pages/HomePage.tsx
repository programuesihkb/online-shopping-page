import Main from "../components/Main";
import Navbar from "../components/Navbar";
import FeaturedProducts from "../components/FeaturedProducts";
import { Box } from "@mui/material";
import Footer from "../components/Footer";

function HomePage() {


  return (
    <Box sx={{
            display: 'flex',
            flexDirection: 'column',
            minHeight: '100vh',
            backgroundColor: 'background.default',
            color: 'text.primary',
        }}>
      <Navbar />
      <Main />
      <FeaturedProducts />
      <Footer />
    </Box>
  );

}

export default HomePage
