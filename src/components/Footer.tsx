import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

const Footer = () => {
  return (
    <Box style={{
        backgroundColor: 'transparent',
        padding: '20px 0 0 0',
        textAlign: 'center',
        marginTop: 'auto',
      }}>
        <Typography sx={{
          fontFamily: '"Playfair Display", serif',
        }}>
          © 2026 All rights reserved. Created by Elion Emini
        </Typography>
      
    </Box>
  );
};

export default Footer;