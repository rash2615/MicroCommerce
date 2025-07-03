import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { AppBar, Toolbar, Typography, Button, Container, Box } from '@mui/material';
import PeopleIcon from '@mui/icons-material/People';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import StoreIcon from '@mui/icons-material/Store';
import CustomerPage from './pages/CustomerPage';
import ProductPage from './pages/ProductPage';
import OrderPage from './pages/OrderPage';

function App() {
  return (
    <Router>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" sx={{ flexGrow: 1 }}>
            MicroCommerce
          </Typography>
          <Button color="inherit" component={Link} to="/customers" startIcon={<PeopleIcon />}>Clients</Button>
          <Button color="inherit" component={Link} to="/products" startIcon={<StoreIcon />}>Produits</Button>
          <Button color="inherit" component={Link} to="/orders" startIcon={<ShoppingCartIcon />}>Commandes</Button>
        </Toolbar>
      </AppBar>
      <Container sx={{ mt: 4 }}>
        <Routes>
          <Route path="/customers" element={<CustomerPage />} />
          <Route path="/products" element={<ProductPage />} />
          <Route path="/orders" element={<OrderPage />} />
          <Route path="*" element={<Box textAlign="center"><Typography variant="h4">Bienvenue sur MicroCommerce !</Typography></Box>} />
        </Routes>
      </Container>
    </Router>
  );
}

export default App;
