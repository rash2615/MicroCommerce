import React, { useEffect, useState } from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import CustomerReviews from '../components/CustomerReviews';
import Footer from '../components/Footer';
import axios from 'axios';
import { Box, Typography, Grid, Card, CardContent, CardMedia, Button, CircularProgress, Alert } from '@mui/material';

function FeaturedProducts() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    axios.get('/api/products')
      .then(res => {
        setProducts(res.data.slice(0, 3));
        setError(null);
      })
      .catch(() => setError('Erreur lors du chargement des produits.'))
      .finally(() => setLoading(false));
  }, []);

  return (
    <Box sx={{ width: '100%', py: 8, px: { xs: 2, md: 8 }, bgcolor: 'var(--color-grey)' }}>
      <Typography variant="h4" fontWeight={900} sx={{ mb: 4, color: 'var(--color-black)', fontFamily: 'Poppins, Inter, sans-serif', textAlign: 'center' }}>
        Nos produits phares
      </Typography>
      {loading ? (
        <Box sx={{ display: 'flex', justifyContent: 'center', py: 4 }}>
          <CircularProgress color="inherit" />
        </Box>
      ) : error ? (
        <Alert severity="error">{error}</Alert>
      ) : Array.isArray(products) && products.length > 0 ? (
        <Grid container spacing={4} justifyContent="center">
          {products.map((product) => (
            <Grid item xs={12} md={4} key={product.id}>
              <Card sx={{ bgcolor: 'var(--color-white)', borderRadius: 4, p: 2, boxShadow: 'var(--shadow)', height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                <CardMedia
                  component="img"
                  height="180"
                  image={product.image || 'https://via.placeholder.com/400x220?text=Produit'}
                  alt={product.name}
                  sx={{ borderRadius: 3, objectFit: 'cover', mb: 2 }}
                />
                <CardContent sx={{ p: 0 }}>
                  <Typography variant="h6" fontWeight={700} sx={{ color: 'var(--color-black)', fontFamily: 'Poppins, Inter, sans-serif', mb: 1 }}>{product.name}</Typography>
                  <Typography variant="body2" sx={{ color: 'var(--color-gold)', fontWeight: 700, fontSize: 18 }}>{product.price?.toLocaleString('fr-FR', { style: 'currency', currency: 'EUR' })}</Typography>
                </CardContent>
                <Button variant="contained" href="/products" sx={{ mt: 2, bgcolor: 'var(--color-sage)', color: 'var(--color-black)', borderRadius: 2, fontWeight: 700, ':hover': { bgcolor: 'var(--color-gold)', color: 'var(--color-white)' }, transition: 'var(--transition)' }}>
                  Voir la boutique
                </Button>
              </Card>
            </Grid>
          ))}
        </Grid>
      ) : !loading && !error ? (
        <Typography>Aucun produit à afficher.</Typography>
      ) : null}
    </Box>
  );
}

export default function LandingPage() {
  return (
    <>
      <Header />
      <Hero />
      <FeaturedProducts />
      <CustomerReviews />
      <Footer />
    </>
  );
} 