import React from 'react';
import { AppBar, Toolbar, Typography, Box, Button, Link as MuiLink, InputBase, Container, IconButton } from '@mui/material';
import { Link, useLocation } from 'react-router-dom';
import SearchIcon from '@mui/icons-material/Search';

const menu = [
  { text: 'Accueil', path: '/' },
  { text: 'Produits', path: '/products' },
  { text: 'Clients', path: '/customers' },
  { text: 'Commandes', path: '/orders' },
  { text: 'Contact', path: '/contact' },
  { text: 'Mentions légales', path: '/mentions-legales' },
  { text: 'CGV', path: '/cgv' },
];

export default function Layout({ children }) {
  const location = useLocation();
  return (
    <Box sx={{ minHeight: '100vh', bgcolor: '#f4f6fa', display: 'flex', flexDirection: 'column' }}>
      {/* Header */}
      <AppBar position="static" sx={{ bgcolor: '#1976d2', width: '100%' }}>
        <Toolbar sx={{ justifyContent: 'space-between', flexWrap: 'wrap' }}>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
            <Typography variant="h6" sx={{ fontWeight: 700, letterSpacing: 1, mr: 2 }}>
              <span role="img" aria-label="logo">🛒</span> MicroCommerce
            </Typography>
            {menu.map(item => (
              <Button
                key={item.text}
                component={Link}
                to={item.path}
                color="inherit"
                sx={{ fontWeight: location.pathname === item.path ? 700 : 400, borderBottom: location.pathname === item.path ? '2px solid #fff' : 'none', borderRadius: 0 }}
              >
                {item.text}
              </Button>
            ))}
          </Box>
          <Box sx={{ display: 'flex', alignItems: 'center', bgcolor: '#fff', borderRadius: 2, px: 1, boxShadow: 1, width: 320, maxWidth: '100%' }}>
            <InputBase placeholder="Recherche globale..." inputProps={{ 'aria-label': 'Recherche globale' }} sx={{ ml: 1, flex: 1, color: '#222' }} />
            <IconButton type="submit" sx={{ p: '10px' }} aria-label="search">
              <SearchIcon />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
      {/* Contenu principal */}
      <Box component="main" sx={{ flex: 1, width: '100%', px: 0, py: 0 }}>
        {children}
      </Box>
      {/* Footer */}
      <Box component="footer" sx={{ bgcolor: '#222', color: '#fff', py: 3, px: 0, width: '100%', mt: 4 }}>
        <Container maxWidth={false} sx={{ width: '100%' }}>
          <Box sx={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'center', width: '100%' }}>
            <Box>
              <Typography variant="body1" fontWeight={700}>MicroCommerce</Typography>
              <Typography variant="body2">123 Rue Fictive, 75000 Paris</Typography>
              <Typography variant="body2">contact@microcommerce.fr</Typography>
              <Typography variant="body2">Tél : 01 23 45 67 89</Typography>
              <Typography variant="body2">Lun-Ven : 9h-18h</Typography>
            </Box>
            <Box>
              <MuiLink component={Link} to="/mentions-legales" color="inherit" underline="hover" sx={{ mr: 2 }}>Mentions légales</MuiLink>
              <MuiLink component={Link} to="/cgv" color="inherit" underline="hover">CGV</MuiLink>
            </Box>
            <Box>
              <Typography variant="body2">&copy; {new Date().getFullYear()} MicroCommerce. Tous droits réservés.</Typography>
            </Box>
          </Box>
        </Container>
      </Box>
    </Box>
  );
} 