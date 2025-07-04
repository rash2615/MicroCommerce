// Composant Hero : section d'accroche animée de la landing page
import React from 'react';
import { Box, Typography, Button, Grid, Fade, Slide } from '@mui/material';

// Hero met en avant le slogan, l'image principale et le call-to-action
export default function Hero() {
  return (
    <Box sx={{ width: '100%', bgcolor: 'var(--color-bg)', py: { xs: 6, md: 10 }, px: { xs: 2, md: 8 }, minHeight: { xs: 320, md: 420 } }}>
      <Grid container spacing={6} alignItems="center" justifyContent="center">
        <Grid item xs={12} md={6}>
          <Fade in={true} timeout={900}>
            <Box sx={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
              <img src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80" alt="Modern lamp" style={{ width: '100%', maxWidth: 340, borderRadius: '32px', boxShadow: 'var(--shadow)' }} />
            </Box>
          </Fade>
        </Grid>
        <Grid item xs={12} md={6}>
          <Slide in={true} direction="up" timeout={1200}>
            <Box>
              <Typography variant="h2" sx={{ fontWeight: 900, fontSize: { xs: 32, md: 54 }, color: 'var(--color-black)', mb: 2, fontFamily: 'Poppins, Inter, sans-serif', lineHeight: 1.1 }}>
                Modern light lamp
              </Typography>
              <Typography variant="h5" sx={{ color: 'var(--color-black)', mb: 4, fontWeight: 400, fontFamily: 'Inter, sans-serif' }}>
                Nouvelle collection <span style={{ color: 'var(--color-gold)', fontWeight: 700 }}>50% de réduction</span> pour une durée limitée. Découvrez nos best-sellers et illuminez votre intérieur !
              </Typography>
              <Button variant="contained" size="large" sx={{ fontWeight: 700, fontSize: 18, borderRadius: 3, px: 5, py: 1.5, bgcolor: 'var(--color-sage)', color: 'var(--color-black)', boxShadow: 'none', ':hover': { bgcolor: 'var(--color-gold)', color: 'var(--color-white)' }, transition: 'var(--transition)' }}>
                Explorer la boutique
              </Button>
            </Box>
          </Slide>
        </Grid>
      </Grid>
    </Box>
  );
} 