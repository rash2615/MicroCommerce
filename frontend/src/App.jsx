import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { AppBar, Toolbar, Typography, Button, Container, Box, Drawer, List, ListItem, ListItemIcon, ListItemText, IconButton, Divider, Snackbar, Alert } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import PeopleIcon from '@mui/icons-material/People';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import StoreIcon from '@mui/icons-material/Store';
import GavelIcon from '@mui/icons-material/Gavel';
import CustomerPage from './pages/CustomerPage';
import ProductPage from './pages/ProductPage';
import OrderPage from './pages/OrderPage';

const drawerWidth = 220;

function App() {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [rgpdOpen, setRgpdOpen] = useState(true);

  const menu = [
    { text: 'Clients', icon: <PeopleIcon />, path: '/customers' },
    { text: 'Produits', icon: <StoreIcon />, path: '/products' },
    { text: 'Commandes', icon: <ShoppingCartIcon />, path: '/orders' },
  ];

  return (
    <Router>
      <Box sx={{ display: 'flex' }}>
        <AppBar position="fixed" sx={{ zIndex: 1300 }}>
          <Toolbar>
            <IconButton color="inherit" edge="start" onClick={() => setDrawerOpen(true)} sx={{ mr: 2 }}>
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" sx={{ flexGrow: 1, fontWeight: 700, letterSpacing: 1 }}>
              <span role="img" aria-label="logo">🛒</span> MicroCommerce
            </Typography>
          </Toolbar>
        </AppBar>
        <Drawer
          variant="temporary"
          open={drawerOpen}
          onClose={() => setDrawerOpen(false)}
          sx={{
            '& .MuiDrawer-paper': { width: drawerWidth, boxSizing: 'border-box' },
          }}
        >
          <Toolbar />
          <Divider />
          <List>
            {menu.map((item) => (
              <ListItem button key={item.text} component={Link} to={item.path} onClick={() => setDrawerOpen(false)}>
                <ListItemIcon>{item.icon}</ListItemIcon>
                <ListItemText primary={item.text} />
              </ListItem>
            ))}
          </List>
          <Box sx={{ flexGrow: 1 }} />
          <Divider />
          <Box sx={{ p: 2, fontSize: 13, color: 'text.secondary' }}>
            <GavelIcon fontSize="small" sx={{ mr: 1, verticalAlign: 'middle' }} />
            Ce site utilise des cookies pour améliorer votre expérience. <Button size="small" onClick={() => setRgpdOpen(false)}>OK</Button>
          </Box>
        </Drawer>
        <Box component="main" sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` } }}>
          <Toolbar />
          <Container maxWidth="md">
            <Routes>
              <Route path="/customers" element={<CustomerPage />} />
              <Route path="/products" element={<ProductPage />} />
              <Route path="/orders" element={<OrderPage />} />
              <Route path="*" element={<Box textAlign="center"><Typography variant="h4">Bienvenue sur MicroCommerce !</Typography></Box>} />
            </Routes>
          </Container>
        </Box>
        <Snackbar open={rgpdOpen} anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}>
          <Alert severity="info" sx={{ width: '100%' }} action={<Button color="inherit" size="small" onClick={() => setRgpdOpen(false)}>OK</Button>}>
            Ce site utilise des cookies pour respecter la RGPD. Aucune donnée personnelle n'est conservée sans votre consentement.
          </Alert>
        </Snackbar>
      </Box>
    </Router>
  );
}

export default App;
