import React, { useEffect, useRef, useState } from 'react';
import { Box, Typography, Button, Grid, Fade, Slide } from '@mui/material';

export default function LandingPage() {
  // Parallax state
  const [offsetY, setOffsetY] = useState(0);
  const heroRef = useRef(null);
  // Animation state
  const [show, setShow] = useState(false);

  useEffect(() => {
    setShow(true);
    const handleScroll = () => {
      if (heroRef.current) {
        const scrollY = window.scrollY;
        setOffsetY(scrollY * 0.4); // Parallax ratio
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <Box sx={{ width: '100%', bgcolor: '#e3f2fd', minHeight: '100vh', pb: 6 }}>
      {/* Hero section avec parallax */}
      <Box
        ref={heroRef}
        sx={{
          width: '100%',
          minHeight: '60vh',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          flexDirection: 'column',
          py: 8,
          position: 'relative',
          overflow: 'hidden',
          background: 'linear-gradient(90deg, #1976d2 60%, #fff 100%)',
        }}
      >
        {/* Image de fond parallax */}
        <Box
          aria-hidden
          sx={{
            position: 'absolute',
            top: -120 + offsetY,
            left: 0,
            width: '100%',
            height: 400,
            backgroundImage: 'url(https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=1200&q=80)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            opacity: 0.18,
            zIndex: 0,
            transition: 'top 0.2s',
          }}
        />
        <Fade in={show} timeout={1200}>
          <Typography variant="h2" fontWeight={800} color="#fff" gutterBottom align="center" sx={{ zIndex: 1 }}>
            Bienvenue chez MicroCommerce
          </Typography>
        </Fade>
        <Slide in={show} direction="up" timeout={1400}>
          <Typography variant="h5" color="#fff" align="center" sx={{ maxWidth: 700, mb: 4, zIndex: 1 }}>
            Votre boutique de confiance pour tous vos besoins en produits et services, avec une gestion moderne et transparente.
          </Typography>
        </Slide>
        <Slide in={show} direction="up" timeout={1800}>
          <Button variant="contained" size="large" sx={{ fontWeight: 700, bgcolor: '#fff', color: '#1976d2', ':hover': { bgcolor: '#e3f2fd' }, zIndex: 1 }} href="#about">Découvrir</Button>
        </Slide>
      </Box>
      {/* À propos */}
      <Box id="about" sx={{ width: '100%', py: 8, px: { xs: 2, md: 8 }, bgcolor: '#fff' }}>
        <Grid container spacing={4} alignItems="center">
          <Grid item xs={12} md={6}>
            <Typography variant="h4" fontWeight={700} gutterBottom>Qui sommes-nous ?</Typography>
            <Typography variant="body1" color="text.secondary">
              MicroCommerce est une entreprise familiale fondée en 2024, spécialisée dans la vente de produits de qualité et la satisfaction client. Notre équipe passionnée vous accompagne dans tous vos projets, avec des conseils personnalisés et un service après-vente réactif.
            </Typography>
          </Grid>
          <Grid item xs={12} md={6}>
            <img src="https://images.unsplash.com/photo-1515168833906-d2a3b82b1a48?auto=format&fit=crop&w=800&q=80" alt="Notre équipe" style={{ width: '100%', borderRadius: 16, boxShadow: '0 4px 24px rgba(0,0,0,0.08)' }} />
          </Grid>
        </Grid>
      </Box>
      {/* Produits */}
      <Box sx={{ width: '100%', py: 8, px: { xs: 2, md: 8 }, bgcolor: '#f4f6fa' }}>
        <Typography variant="h4" fontWeight={700} gutterBottom>Nos produits phares</Typography>
        <Grid container spacing={4}>
          <Grid item xs={12} md={4}>
            <Box sx={{ bgcolor: '#fff', borderRadius: 4, p: 3, boxShadow: 2, height: '100%' }}>
              <img src="https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=400&q=80" alt="Produit 1" style={{ width: '100%', borderRadius: 8, marginBottom: 16 }} />
              <Typography variant="h6" fontWeight={600}>Ordinateur portable Pro</Typography>
              <Typography variant="body2" color="text.secondary">Performance, mobilité et design pour les pros exigeants.</Typography>
            </Box>
          </Grid>
          <Grid item xs={12} md={4}>
            <Box sx={{ bgcolor: '#fff', borderRadius: 4, p: 3, boxShadow: 2, height: '100%' }}>
              <img src="https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=400&q=80" alt="Produit 2" style={{ width: '100%', borderRadius: 8, marginBottom: 16 }} />
              <Typography variant="h6" fontWeight={600}>Smartphone Ultra</Typography>
              <Typography variant="body2" color="text.secondary">Technologie de pointe et autonomie record.</Typography>
            </Box>
          </Grid>
          <Grid item xs={12} md={4}>
            <Box sx={{ bgcolor: '#fff', borderRadius: 4, p: 3, boxShadow: 2, height: '100%' }}>
              <img src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80" alt="Produit 3" style={{ width: '100%', borderRadius: 8, marginBottom: 16 }} />
              <Typography variant="h6" fontWeight={600}>Accessoires connectés</Typography>
              <Typography variant="body2" color="text.secondary">Montres, écouteurs, objets connectés pour tous les usages.</Typography>
            </Box>
          </Grid>
        </Grid>
      </Box>
      {/* Valeurs */}
      <Box sx={{ width: '100%', py: 8, px: { xs: 2, md: 8 }, bgcolor: '#fff' }}>
        <Typography variant="h4" fontWeight={700} gutterBottom>Nos valeurs</Typography>
        <Grid container spacing={4}>
          <Grid item xs={12} md={4}>
            <Typography variant="h6" fontWeight={600}>Qualité</Typography>
            <Typography variant="body2" color="text.secondary">Des produits testés et approuvés par nos clients.</Typography>
          </Grid>
          <Grid item xs={12} md={4}>
            <Typography variant="h6" fontWeight={600}>Proximité</Typography>
            <Typography variant="body2" color="text.secondary">Une équipe à votre écoute, disponible et réactive.</Typography>
          </Grid>
          <Grid item xs={12} md={4}>
            <Typography variant="h6" fontWeight={600}>Innovation</Typography>
            <Typography variant="body2" color="text.secondary">Toujours à la recherche des dernières tendances et technologies.</Typography>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
} 