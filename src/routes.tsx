import HomePage from './pages/HomePage.tsx'
import ErrorPage from './pages/ErrorPage.tsx'
import ShopPage from './pages/ShopPage.tsx'
import ShoppingCartPage from './pages/ShoppingCartPage.tsx'

const routes = [
  {
    path: "/",
    element: <HomePage />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/home",
    element: <HomePage />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/products",
    element: <ShopPage />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/cart",
    element: <ShoppingCartPage />,
    errorElement: <ErrorPage />,
  }
];

export default routes;
