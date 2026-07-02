import Navbar from "../components/Navbar";
import ShoppingProductsBoard from "../components/ShoppingProductsBoard";
import { Box } from "@mui/material";
import CategoriesSidebar from "../components/CategoriesSidebar";
import { useState } from "react";


const ShopPage = () => {

  const [selectedCategory, setSelectedCategory] =   useState<string>("");


  return (
    <Box sx={{
      display: 'flex',
      flexDirection: 'column',
      minHeight: '100vh',
      backgroundColor: 'background.default',
      color: 'text.primary',
      }}>
        
      <Navbar />

      <Box sx={{
        display: 'grid',
        gridTemplateColumns: '1fr 7fr',
        minHeight: '100%',
      }}>
        <CategoriesSidebar setSelectedCategory={setSelectedCategory} />
        <ShoppingProductsBoard category={selectedCategory} />
      </Box>
      
      
    </Box>
  );
};

export default ShopPage;