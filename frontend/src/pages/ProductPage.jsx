import React from 'react';
import { Box, Typography, Grid, Card, CardContent, CardMedia, CardActions, Button, IconButton, Rating, Chip, Fade, Slide } from '@mui/material';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorderOutlined';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCartOutlined';

const products = [
  {
    id: 1,
    name: 'Wall clock gray pink',
    price: 22.99,
    oldPrice: 25.00,
    rating: 5,
    image: 'https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=400&q=80',
  },
  {
    id: 2,
    name: 'Sockeraert vase black',
    price: 15.00,
    oldPrice: 21.00,
    rating: 5,
    image: 'https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=400&q=80',
  },
  {
    id: 3,
    name: 'Decorative mirror',
    price: 10.99,
    oldPrice: 12.00,
    rating: 5,
    image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80',
  },
  {
    id: 4,
    name: 'Speaker with lamp',
    price: 19.99,
    oldPrice: 17.99,
    rating: 5,
    image: 'https://images.unsplash.com/photo-1515168833906-d2a3b82b1a48?auto=format&fit=crop&w=400&q=80',
  },
  {
    id: 5,
    name: 'Wifi speaker lamp',
    price: 18.99,
    oldPrice: 25.00,
    rating: 5,
    image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80',
  },
];

export default function ProductPage() {
  return (
    <Box sx={{ width: '100%', bgcolor: '#f7fafc', minHeight: '100vh', py: 6, px: { xs: 2, md: 8 } }}>
      <Typography variant="h3" sx={{ fontWeight: 900, fontSize: { xs: 28, md: 40 }, color: '#222', mb: 4, fontFamily: 'Montserrat, Inter, sans-serif', textAlign: 'center' }}>
        Our new arrivals
      </Typography>
      <Grid container spacing={4} justifyContent="center">
        {products.map((product, idx) => (
          <Fade in={true} timeout={700 + idx * 200} key={product.id}>
            <Slide in={true} direction="up" timeout={700 + idx * 200}>
              <Grid item xs={12} sm={6} md={4} lg={3}>
                <Card sx={{ borderRadius: 4, boxShadow: '0 2px 16px 0 rgba(25,118,210,0.06)', bgcolor: '#f4f7f9', p: 1, position: 'relative', transition: 'box-shadow 0.2s', ':hover': { boxShadow: '0 8px 32px 0 rgba(25,118,210,0.12)' } }}>
                  <CardMedia
                    component="img"
                    height="220"
                    image={product.image}
                    alt={product.name}
                    sx={{ borderRadius: 3, objectFit: 'cover', mb: 1 }}
                  />
                  <IconButton sx={{ position: 'absolute', top: 18, right: 18, bgcolor: '#fff', boxShadow: 1, ':hover': { bgcolor: '#f7fafc' }, ':focus-visible': { outline: '2px solid #1976d2', outlineOffset: 2 } }} aria-label={`Ajouter ${product.name} aux favoris`} tabIndex={0}>
                    <FavoriteBorderIcon sx={{ color: '#1976d2' }} />
                  </IconButton>
                  <CardContent sx={{ pb: 1 }}>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 1 }}>
                      <Rating value={product.rating} readOnly size="small" />
                      <Chip label="New" color="primary" size="small" sx={{ fontWeight: 700, fontSize: 12, ml: 1 }} />
                    </Box>
                    <Typography variant="h6" sx={{ fontWeight: 700, fontSize: 19, color: '#222', mb: 0.5, fontFamily: 'Montserrat, Inter, sans-serif' }}>{product.name}</Typography>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                      <Typography variant="body1" sx={{ fontWeight: 700, color: '#1976d2', fontSize: 18 }}>{product.price.toLocaleString('en-US', { style: 'currency', currency: 'USD' })}</Typography>
                      <Typography variant="body2" sx={{ color: '#888', textDecoration: 'line-through', fontWeight: 500 }}>{product.oldPrice.toLocaleString('en-US', { style: 'currency', currency: 'USD' })}</Typography>
                    </Box>
                  </CardContent>
                  <CardActions sx={{ justifyContent: 'center', pb: 2 }}>
                    <Button variant="outlined" sx={{ borderRadius: 2, fontWeight: 700, px: 3, color: '#1976d2', borderColor: '#1976d2', ':hover': { bgcolor: '#1976d2', color: '#fff' }, ':focus-visible': { outline: '2px solid #1976d2', outlineOffset: 2 } }} aria-label={`Sélectionner les options pour ${product.name}`} tabIndex={0}>
                      Select options
                    </Button>
                    <Button variant="contained" sx={{ borderRadius: 2, fontWeight: 700, px: 3, bgcolor: '#1976d2', color: '#fff', ':hover': { bgcolor: '#1251a3' }, ':focus-visible': { outline: '2px solid #1976d2', outlineOffset: 2 } }} aria-label={`Voir rapidement ${product.name}`} tabIndex={0}>
                      Quick view
                    </Button>
                    <IconButton color="primary" aria-label={`Ajouter ${product.name} au panier`} tabIndex={0} sx={{ ':focus-visible': { outline: '2px solid #1976d2', outlineOffset: 2 } }}>
                      <ShoppingCartIcon />
                    </IconButton>
                  </CardActions>
                </Card>
              </Grid>
            </Slide>
          </Fade>
        ))}
      </Grid>
    </Box>
  );
} 