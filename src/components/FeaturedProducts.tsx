import { Box, Container, Grid, Typography, Button } from "@mui/material";
import { Link } from "react-router";
import ProductCard from "./ProductCard";
import useGetProducts from "../services/useGetProducts";

const FeaturedProducts = () => {
  
  const { products, loading, error } = useGetProducts(4, 'womens-dresses');

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <Container sx={{ py: 8 }}>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', mb: 5 }}>
        <Typography variant="h2" sx={{ color: 'text.secondary' }}>
          New Arrivals
        </Typography>
        <Button
          component={Link}
          to="/products"
          sx={{
            color: 'text.primary',
            textTransform: 'uppercase',
            letterSpacing: '0.1em',
            fontWeight: 400,
          }}
        >
          View All
        </Button>
      </Box>
      <Grid container spacing={8} columnSpacing={{ xs: 3, sm: 5, md: 7 }}>
        {products.slice(0, 4).map((product) => (
          <Grid key={product.id} size={{ xs: 6, sm: 4, md: 3 }}>
            <ProductCard product={product} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default FeaturedProducts;
