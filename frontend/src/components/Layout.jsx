import React from 'react';
import { AppBar, Toolbar, Typography, Box, Button, Link as MuiLink, InputBase, Container, IconButton, useTheme } from '@mui/material';
import { Link, useLocation } from 'react-router-dom';
import SearchIcon from '@mui/icons-material/Search';
import EmailIcon from '@mui/icons-material/EmailOutlined';
import PhoneIcon from '@mui/icons-material/PhoneOutlined';
import LocationOnIcon from '@mui/icons-material/LocationOnOutlined';

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
  const theme = useTheme();
  return (
    <Box sx={{ minHeight: '100vh', bgcolor: '#f7fafd', display: 'flex', flexDirection: 'column' }}>
      {/* Header */}
      <AppBar position="static" elevation={2} sx={{
        bgcolor: 'transparent',
        background: 'linear-gradient(90deg, #1976d2 70%, #63a4ff 100%)',
        boxShadow: '0 2px 8px 0 rgba(25, 118, 210, 0.08)',
        width: '100%',
        height: 64,
        justifyContent: 'center',
      }}>
        <Toolbar sx={{ justifyContent: 'space-between', minHeight: 56, px: { xs: 1, md: 3 }, flexWrap: 'wrap' }}>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
            <Typography variant="h6" sx={{ fontWeight: 700, letterSpacing: 1, mr: 2, fontSize: 22, color: '#fff', display: 'flex', alignItems: 'center' }}>
              <span role="img" aria-label="logo" style={{ fontSize: 26, marginRight: 6 }}>🛒</span> MicroCommerce
            </Typography>
            {menu.slice(0, 4).map(item => (
              <Button
                key={item.text}
                component={Link}
                to={item.path}
                color="inherit"
                sx={{
                  fontWeight: location.pathname === item.path ? 700 : 400,
                  borderBottom: location.pathname === item.path ? '2px solid #fff' : 'none',
                  borderRadius: 0,
                  color: '#fff',
                  fontSize: 16,
                  minWidth: 0,
                  px: 1.5,
                  mx: 0.5,
                  opacity: location.pathname === item.path ? 1 : 0.85,
                  transition: 'all 0.2s',
                  '&:hover': { opacity: 1, bgcolor: 'transparent', borderBottom: '2px solid #fff' },
                }}
              >
                {item.text}
              </Button>
            ))}
          </Box>
          <Box sx={{ display: 'flex', alignItems: 'center', bgcolor: '#fff', borderRadius: 99, px: 1.5, boxShadow: 1, width: 260, maxWidth: '100%', height: 38 }}>
            <InputBase placeholder="Recherche globale..." inputProps={{ 'aria-label': 'Recherche globale' }} sx={{ ml: 1, flex: 1, color: '#222', fontSize: 15 }} />
            <IconButton type="submit" sx={{ p: '7px' }} aria-label="search">
              <SearchIcon fontSize="small" />
            </IconButton>
          </Box>
        </Toolbar>
        <Box sx={{ display: { xs: 'flex', md: 'none' }, justifyContent: 'center', pb: 1 }}>
          {/* Menu mobile (à faire si besoin) */}
        </Box>
      </AppBar>
      {/* Contenu principal */}
      <Box component="main" sx={{ flex: 1, width: '100%', px: 0, py: 0 }}>
        {children}
      </Box>
      {/* Footer */}
      <Box component="footer" sx={{ bgcolor: '#23272f', color: '#fff', py: 2, px: 0, width: '100%', mt: 4 }}>
        <Container maxWidth={false} sx={{ width: '100%' }}>
          <Box sx={{ display: 'flex', flexWrap: 'wrap', justifyContent: { xs: 'center', md: 'space-between' }, alignItems: 'center', width: '100%', gap: 2 }}>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 0.5, minWidth: 200 }}>
              <Typography variant="body1" fontWeight={700} sx={{ fontSize: 17 }}>MicroCommerce</Typography>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                <LocationOnIcon fontSize="small" sx={{ opacity: 0.7 }} />
                <Typography variant="body2" sx={{ opacity: 0.7 }}>123 Rue Fictive, 75000 Paris</Typography>
              </Box>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                <EmailIcon fontSize="small" sx={{ opacity: 0.7 }} />
                <Typography variant="body2" sx={{ opacity: 0.7 }}>contact@microcommerce.fr</Typography>
              </Box>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                <PhoneIcon fontSize="small" sx={{ opacity: 0.7 }} />
                <Typography variant="body2" sx={{ opacity: 0.7 }}>01 23 45 67 89</Typography>
              </Box>
              <Typography variant="body2" sx={{ opacity: 0.7 }}>Lun-Ven : 9h-18h</Typography>
            </Box>
            <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap', justifyContent: { xs: 'center', md: 'flex-start' }, alignItems: 'center' }}>
              <MuiLink component={Link} to="/mentions-legales" color="inherit" underline="hover" sx={{ fontSize: 15, opacity: 0.8 }}>Mentions légales</MuiLink>
              <MuiLink component={Link} to="/cgv" color="inherit" underline="hover" sx={{ fontSize: 15, opacity: 0.8 }}>CGV</MuiLink>
            </Box>
            <Box sx={{ textAlign: { xs: 'center', md: 'right' }, width: '100%', maxWidth: 300 }}>
              <Typography variant="body2" sx={{ fontSize: 14, opacity: 0.7 }}>
                © {new Date().getFullYear()} MicroCommerce. Tous droits réservés.
              </Typography>
            </Box>
          </Box>
        </Container>
      </Box>
    </Box>
  );
} 