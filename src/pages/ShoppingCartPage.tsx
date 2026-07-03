import Navbar from "../components/Navbar";
import { useState } from "react";
import ProductDisplay from "../components/ProductDisplay";
import PaymentSummary from "../components/PaymentSummary";
import { Box } from "@mui/material";

const ShoppingCartPage = () => {

  const [checkoutItems, setCheckoutItems] = useState<any[]>([]);

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
        gridTemplateColumns: { xs: '1fr', md: '5fr 3fr' },
        justifyContent: 'center',
        gap: 4,
        maxWidth: '1400px',
        width: '100%',
        mx: 'auto',
      }}>
        <ProductDisplay setCheckoutItems={setCheckoutItems} />
        <PaymentSummary checkoutItems={checkoutItems} />
      </Box>
    </Box>
  );
};

export default ShoppingCartPage;