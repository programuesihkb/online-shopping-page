import useCartStore from '../store/useCartStore';
import useGetProductsDetails from '../services/useGetProductsDetails';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { Button } from '@mui/material';

const ProductDisplay = ({ setCheckoutItems }: { setCheckoutItems: React.Dispatch<React.SetStateAction<any[]>> }) => {
    const cartItemsDetails = useCartStore((state) => state.cartItems);

    const { products, loading } = useGetProductsDetails(cartItemsDetails);

  return (
    <Box sx={{ px: { xs: 3, md: 6 }, py: 6 }}>
        <Typography
          variant="h4"
          sx={{
            mb: 5,
            textTransform: 'uppercase',
            letterSpacing: '0.1em',
            color: 'text.secondary',
          }}
        >
          Shopping Cart
        </Typography>

        {!loading && products.length === 0 ? (
            <Box sx={{ py: 8, borderTop: '1px solid', borderColor: 'rgba(0,0,0,0.1)' }}>
                <Typography variant="h6" sx={{ mb: 1, color: 'text.secondary' }}>
                    Your cart is empty
                </Typography>
                <Typography variant="body2" color="text.primary">
                    Add some products to your cart to see them here.
                </Typography>
            </Box>
        ) : (
            <Box sx={{ display: 'flex', flexDirection: 'column', borderTop: '1px solid', borderColor: 'rgba(0,0,0,0.1)' }}>
                {products.map((product) => (
                <Box
                    key={product.id}
                    sx={{
                        display: 'flex',
                        gap: 3,
                        py: 3,
                        borderBottom: '1px solid',
                        borderColor: 'rgba(0,0,0,0.1)',
                    }}
                >
                    <Box sx={{ width: 120, height: 120, flexShrink: 0, overflow: 'hidden' }}>
                        <Box
                            component="img"
                            src={product.thumbnail}
                            alt={product.title}
                            sx={{
                                width: '100%',
                                height: '100%',
                                objectFit: 'cover',
                                transition: 'transform 0.4s ease',
                                '&:hover': { transform: 'scale(1.1)' },
                            }}
                        />
                    </Box>

                    <Box sx={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'space-between', minWidth: 0 }}>
                        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: 2 }}>
                            <Box sx={{ minWidth: 0 }}>
                                <Typography
                                    variant="h6"
                                    sx={{
                                        fontWeight: 400,
                                        textTransform: 'uppercase',
                                        letterSpacing: '0.05em',
                                        fontSize: '1rem',
                                        color: 'text.primary',
                                    }}
                                >
                                    {product.title}
                                </Typography>
                                <Typography variant="body2" color="text.secondary" sx={{ mt: 0.5 }}>
                                    {product.category}
                                </Typography>
                            </Box>
                            <Typography variant="body1" sx={{ fontWeight: 500, color: 'text.primary', whiteSpace: 'nowrap' }}>
                                ${product.price.toFixed(2)}
                                <Box component="span" sx={{ color: 'text.secondary', fontWeight: 400 }}> &times;{product.quantity}</Box>
                            </Typography>
                        </Box>

                        <Box sx={{ display: 'flex', gap: 2, mt: 2 }}>
                            <Button
                                variant="outlined"
                                disableElevation
                                onClick={() => useCartStore.getState().removeFromCart(product.id)}
                                sx={{
                                    borderRadius: 0,
                                    textTransform: 'uppercase',
                                    fontWeight: 400,
                                    fontSize: '0.7rem',
                                    letterSpacing: '0.05em',
                                    borderColor: 'rgba(0,0,0,0.2)',
                                    color: 'text.secondary',
                                    '&:hover': { borderColor: 'text.secondary', backgroundColor: 'transparent' },
                                }}
                            >
                                Remove
                            </Button>
                            <Button
                                variant="contained"
                                color="secondary"
                                disableElevation
                                onClick={() => setCheckoutItems((prevItems: any) => [...prevItems, product])}
                                sx={{
                                    borderRadius: 0,
                                    color: 'primary.main',
                                    textTransform: 'uppercase',
                                    fontWeight: 400,
                                    fontSize: '0.7rem',
                                    letterSpacing: '0.05em',
                                    transition: 'background-color 0.3s ease',
                                    '&:hover': { backgroundColor: 'text.primary' },
                                }}
                            >
                                Checkout
                            </Button>
                        </Box>
                    </Box>
                </Box>
            ))}
            </Box>
        )}
    </Box>
  );
};



export default ProductDisplay;
