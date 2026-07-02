import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router";
import {ThemeProvider, createTheme} from "@mui/material";
import './index.css';
import routes from "./routes.tsx";
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import '@fontsource/playfair-display/400.css';
import '@fontsource/playfair-display/500.css';
import '@fontsource/playfair-display/600.css';
import '@fontsource/playfair-display/400-italic.css';


const theme = createTheme({
  palette: {
    primary: {
      main: '#f3e5da',
    },
    secondary: {
      main: '#a18168',
    },
    background: {
      default: '#f9f4f0',
    },
    text: {
      primary: '#9a785d',
      secondary: '#5a3e2b',
    },

  },
  typography: {
    fontFamily: 'Roboto, Arial, sans-serif',
    h1: {
      fontFamily: '"Playfair Display", serif',
      fontSize: '2rem',
      fontWeight: 500,
    },
    h2: {
      fontFamily: '"Playfair Display", serif',
      fontSize: '1.5rem',
      fontWeight: 500,
    },
    h4: {
      fontFamily: '"Playfair Display", serif',
    },
    h6: {
      fontFamily: '"Playfair Display", serif',
    },
    body1: {
      fontSize: '1rem',
    },
  },
});

const router = createBrowserRouter(routes);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ThemeProvider theme={theme}>
      <RouterProvider router={router} />
    </ThemeProvider>
  </StrictMode>
);