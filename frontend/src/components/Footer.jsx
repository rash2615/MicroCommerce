import React from 'react';
import { Box, Typography, Link as MuiLink } from '@mui/material';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <Box component="footer" sx={{ bgcolor: 'var(--color-bg)', color: 'var(--color-black)', py: 3, px: 2, textAlign: 'center', borderTop: '1px solid var(--color-grey)', mt: 8 }}>
      <Typography variant="body2" sx={{ fontFamily: 'Inter, Poppins, sans-serif', fontSize: 15, mb: 1, color: 'var(--color-black)' }}>
        © {new Date().getFullYear()} MicroCommerce. Tous droits réservés.
      </Typography>
      <Box sx={{ display: 'flex', justifyContent: 'center', gap: 3, flexWrap: 'wrap', mb: 1 }}>
        <MuiLink component={Link} to="/mentions-legales" color="inherit" underline="hover" sx={{ fontSize: 15, opacity: 0.8, color: 'var(--color-gold)', fontWeight: 600 }}>
          Mentions légales
        </MuiLink>
        <MuiLink component={Link} to="/cgv" color="inherit" underline="hover" sx={{ fontSize: 15, opacity: 0.8, color: 'var(--color-sage)', fontWeight: 600 }}>
          CGV
        </MuiLink>
        <MuiLink component={Link} to="/contact" color="inherit" underline="hover" sx={{ fontSize: 15, opacity: 0.8, color: 'var(--color-black)', fontWeight: 600 }}>
          Contact
        </MuiLink>
      </Box>
    </Box>
  );
} 