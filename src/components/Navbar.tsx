import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import ShoppingBasketOutlinedIcon from '@mui/icons-material/ShoppingBasketOutlined';
import { Link } from 'react-router';

export default function Navbar() {
  return (
      <AppBar position="static" sx={{ 
        backgroundColor: 'transparent',
        boxShadow: "none",
        color: "text.primary",
        fontWeight: "bold",
        }}>
        <Toolbar sx={{ mx:4 }}>
          
          <Typography variant="h4" component="div"  sx={{ flexGrow: 1, pl:3}}>
            <Link to="/home" style={{ textDecoration: 'none', color: 'inherit' }}>
              TRES JOLIE
            </Link>
          </Typography>

          <Button color="inherit" component={Link} to="/home">
            <Typography color="inherit" sx={{ mr: 1 }}>
              Home
            </Typography>
            </Button>
          <Button color="inherit" component={Link} to="/products">
            <Typography color="inherit" sx={{ mr: 1 }}>
              Products
            </Typography>
          </Button>
            <IconButton color="inherit" component={Link} to="/cart">
                <Typography sx={{ mr: 1, fontSize: '1rem', textTransform: 'uppercase' }}>
                    Cart
                </Typography>
                <ShoppingBasketOutlinedIcon />
            </IconButton>

        </Toolbar>
      </AppBar>
  );
}

