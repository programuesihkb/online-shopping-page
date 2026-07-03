import ProductCard from "./ProductCard";
import { Container, Grid } from "@mui/material";
import useGetProducts from "../services/useGetProducts";

const ShoppingProductsBoard = ({ category, categorySlugs }: { category?: string; categorySlugs?: string[] }) => {

  const { products, loading, error } = useGetProducts(0, category);

  const productsToDisplay = products.filter(product => categorySlugs?.includes(product.category));


  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <Container sx={{ py: 6 }}>
        <Grid container spacing={8} columnSpacing={{ xs: 3, sm: 5, md: 7 }}>
      {productsToDisplay.map((product) => (
        <Grid key={product.id} size={{ xs: 6, sm: 4, md: 3 }}>
          <ProductCard product={product} />
        </Grid>
      ))}
    </Grid>
    </Container>

  );
};

export default ShoppingProductsBoard;