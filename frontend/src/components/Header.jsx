import React, { useState } from 'react';
import { AppBar, Toolbar, Typography, Box, Button, IconButton, Badge, Drawer, List, ListItem, ListItemButton, ListItemText, Divider, Slide } from '@mui/material';
import { Link, useLocation } from 'react-router-dom';
import MenuIcon from '@mui/icons-material/Menu';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCartOutlined';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorderOutlined';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';

const menu = [
  { text: 'Accueil', path: '/' },
  { text: 'Boutique', path: '/products' },
  { text: 'Avis', path: '/reviews' },
  { text: 'Contact', path: '/contact' },
];

export default function Header() {
  const location = useLocation();
  const [open, setOpen] = useState(false);

  return (
    <AppBar position="sticky" elevation={0} sx={{ bgcolor: 'var(--color-white)', boxShadow: '0 2px 12px 0 rgba(35,35,35,0.06)', py: 0.5, transition: 'var(--transition)' }}>
      <Toolbar sx={{ justifyContent: 'space-between', minHeight: 68, px: { xs: 1, md: 4 } }}>
        {/* Logo */}
        <Typography component={Link} to="/" aria-label="Accueil MicroCommerce" sx={{ fontWeight: 900, fontSize: 28, color: 'var(--color-black)', textDecoration: 'none', fontFamily: 'Poppins, Inter, sans-serif', letterSpacing: 0.5, display: 'flex', alignItems: 'center' }}>
          <span role="img" aria-label="logo boutique" style={{ fontWeight: 900, color: 'var(--color-gold)', marginRight: 8, fontSize: 32 }}>🛍️</span> MicroCommerce
        </Typography>
        {/* Menu desktop */}
        <Box sx={{ display: { xs: 'none', md: 'flex' }, gap: 2 }} role="navigation" aria-label="Menu principal">
          {menu.map(item => (
            <Button
              key={item.text}
              component={Link}
              to={item.path}
              tabIndex={0}
              aria-current={location.pathname === item.path ? 'page' : undefined}
              sx={{
                color: location.pathname === item.path ? 'var(--color-gold)' : 'var(--color-black)',
                fontWeight: 600,
                fontSize: 17,
                fontFamily: 'Poppins, Inter, sans-serif',
                textTransform: 'none',
                borderBottom: location.pathname === item.path ? '2px solid var(--color-gold)' : '2px solid transparent',
                borderRadius: 0,
                px: 2,
                transition: 'var(--transition)',
                bgcolor: 'transparent',
                outline: 'none',
                ':focus-visible': { outline: '2px solid var(--color-sage)', outlineOffset: 2 },
                ':hover': { color: 'var(--color-gold)', bgcolor: 'transparent', borderBottom: '2px solid var(--color-gold)' },
              }}
            >
              {item.text}
            </Button>
          ))}
        </Box>
        {/* Icônes desktop */}
        <Box sx={{ display: { xs: 'none', md: 'flex' }, gap: 1 }}>
          <IconButton color="inherit" size="large" aria-label="Favoris" tabIndex={0}>
            <Badge badgeContent={2} sx={{ '& .MuiBadge-badge': { bgcolor: 'var(--color-sage)', color: 'var(--color-black)', fontWeight: 700 } }}>
              <FavoriteBorderIcon sx={{ color: 'var(--color-black)' }} />
            </Badge>
          </IconButton>
          <IconButton color="inherit" size="large" aria-label="Panier" tabIndex={0}>
            <Badge badgeContent={3} sx={{ '& .MuiBadge-badge': { bgcolor: 'var(--color-gold)', color: 'var(--color-white)', fontWeight: 700 } }}>
              <ShoppingCartIcon sx={{ color: 'var(--color-black)' }} />
            </Badge>
          </IconButton>
          <IconButton color="inherit" size="large" aria-label="Compte utilisateur" tabIndex={0}>
            <PersonOutlineIcon sx={{ color: 'var(--color-black)' }} />
          </IconButton>
        </Box>
        {/* Menu burger mobile/tablette */}
        <Box sx={{ display: { xs: 'flex', md: 'none' }, alignItems: 'center' }}>
          <IconButton
            aria-label="Ouvrir le menu"
            onClick={() => setOpen(true)}
            sx={{ color: 'var(--color-black)', fontSize: 30 }}
          >
            <MenuIcon fontSize="inherit" />
          </IconButton>
          <Drawer
            anchor="right"
            open={open}
            onClose={() => setOpen(false)}
            PaperProps={{
              sx: {
                bgcolor: 'var(--color-white)',
                minWidth: 260,
                borderTopLeftRadius: '32px',
                borderBottomLeftRadius: '32px',
                boxShadow: '0 8px 32px 0 rgba(35,35,35,0.13)',
                p: 0,
                transition: 'var(--transition)',
              },
            }}
          >
            <Slide in={open} direction="left" timeout={400}>
              <Box sx={{ width: 260, py: 3, px: 2, display: 'flex', flexDirection: 'column', height: '100%' }}>
                <Typography variant="h5" sx={{ fontWeight: 900, color: 'var(--color-gold)', mb: 2, fontFamily: 'Poppins, Inter, sans-serif' }}>
                  Menu
                </Typography>
                <Divider sx={{ mb: 2 }} />
                <List>
                  {menu.map(item => (
                    <ListItem key={item.text} disablePadding>
                      <ListItemButton
                        component={Link}
                        to={item.path}
                        selected={location.pathname === item.path}
                        onClick={() => setOpen(false)}
                        sx={{
                          color: location.pathname === item.path ? 'var(--color-gold)' : 'var(--color-black)',
                          fontWeight: 600,
                          fontSize: 17,
                          fontFamily: 'Poppins, Inter, sans-serif',
                          borderRadius: 2,
                          mb: 0.5,
                          transition: 'var(--transition)',
                          ':hover': { bgcolor: 'var(--color-sage)', color: 'var(--color-black)' },
                        }}
                        aria-current={location.pathname === item.path ? 'page' : undefined}
                      >
                        <ListItemText primary={item.text} />
                      </ListItemButton>
                    </ListItem>
                  ))}
                </List>
                <Divider sx={{ my: 2 }} />
                <Box sx={{ display: 'flex', gap: 1, justifyContent: 'center', mt: 'auto' }}>
                  <IconButton color="inherit" size="large" aria-label="Favoris" tabIndex={0}>
                    <FavoriteBorderIcon sx={{ color: 'var(--color-black)' }} />
                  </IconButton>
                  <IconButton color="inherit" size="large" aria-label="Panier" tabIndex={0}>
                    <ShoppingCartIcon sx={{ color: 'var(--color-black)' }} />
                  </IconButton>
                  <IconButton color="inherit" size="large" aria-label="Compte utilisateur" tabIndex={0}>
                    <PersonOutlineIcon sx={{ color: 'var(--color-black)' }} />
                  </IconButton>
                </Box>
              </Box>
            </Slide>
          </Drawer>
        </Box>
      </Toolbar>
    </AppBar>
  );
} 