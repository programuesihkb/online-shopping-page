import ProductCard from "./ProductCard";
import { Container, Grid } from "@mui/material";
import useGetProducts from "../services/useGetProducts";

const ShoppingProductsBoard = ({ category }: { category?: string }) => {

  const { products, loading, error } = useGetProducts(null, category);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <Container sx={{ py: 6 }}>
        <Grid container spacing={8} columnSpacing={{ xs: 3, sm: 5, md: 7 }}>
      {products.map((product) => (
        <Grid key={product.id} size={{ xs: 6, sm: 4, md: 3 }}>
          <ProductCard product={product} />
        </Grid>
      ))}
    </Grid>
    </Container>

  );
};

export default ShoppingProductsBoard;