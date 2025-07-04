import React, { useState, useEffect } from 'react';
import { Box, Typography, Grid, Card, CardContent, CardMedia, CardActions, Button, IconButton, Rating, Chip, Fade, Slide, Pagination, FormControl, InputLabel, Select, MenuItem, CircularProgress, Alert } from '@mui/material';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorderOutlined';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCartOutlined';
import axios from 'axios';

const PRODUCTS_PER_PAGE = 6;

export default function ShopPage() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [page, setPage] = useState(1);
  const [sort, setSort] = useState('default');
  const [category, setCategory] = useState('all');
  const [price, setPrice] = useState('all');

  useEffect(() => {
    setLoading(true);
    axios.get('/api/products')
      .then(res => {
        setProducts(Array.isArray(res.data) ? res.data : []);
        setError(null);
      })
      .catch(() => setError('Erreur lors du chargement des produits.'))
      .finally(() => setLoading(false));
  }, []);

  // Filtres dynamiques
  const categories = [...new Set(products.map(p => p.category || ''))].filter(Boolean);
  let filtered = products;
  if (category !== 'all') filtered = filtered.filter(p => (p.category || '') === category);
  if (price === 'low') filtered = filtered.filter(p => p.price < 20);
  if (price === 'mid') filtered = filtered.filter(p => p.price >= 20 && p.price < 30);
  if (price === 'high') filtered = filtered.filter(p => p.price >= 30);
  if (sort === 'price-asc') filtered = [...filtered].sort((a, b) => a.price - b.price);
  if (sort === 'price-desc') filtered = [...filtered].sort((a, b) => b.price - a.price);

  // Pagination
  const pageCount = Math.ceil(filtered.length / PRODUCTS_PER_PAGE);
  const paginated = filtered.slice((page - 1) * PRODUCTS_PER_PAGE, page * PRODUCTS_PER_PAGE);

  return (
    <Box sx={{ width: '100%', bgcolor: 'var(--color-bg)', minHeight: '100vh', py: 6, px: { xs: 2, md: 8 } }}>
      <Typography variant="h3" sx={{ fontWeight: 900, fontSize: { xs: 28, md: 40 }, color: 'var(--color-black)', mb: 4, fontFamily: 'Poppins, Inter, sans-serif', textAlign: 'center' }}>
        Boutique
      </Typography>
      <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 2, mb: 4, justifyContent: 'center' }}>
        <FormControl size="small" sx={{ minWidth: 140 }}>
          <InputLabel>Catégorie</InputLabel>
          <Select value={category} label="Catégorie" onChange={e => { setCategory(e.target.value); setPage(1); }}>
            <MenuItem value="all">Toutes</MenuItem>
            {categories.map(cat => <MenuItem key={cat} value={cat}>{cat}</MenuItem>)}
          </Select>
        </FormControl>
        <FormControl size="small" sx={{ minWidth: 140 }}>
          <InputLabel>Prix</InputLabel>
          <Select value={price} label="Prix" onChange={e => { setPrice(e.target.value); setPage(1); }}>
            <MenuItem value="all">Tous</MenuItem>
            <MenuItem value="low">Moins de 20€</MenuItem>
            <MenuItem value="mid">20€ à 30€</MenuItem>
            <MenuItem value="high">Plus de 30€</MenuItem>
          </Select>
        </FormControl>
        <FormControl size="small" sx={{ minWidth: 140 }}>
          <InputLabel>Trier</InputLabel>
          <Select value={sort} label="Trier" onChange={e => setSort(e.target.value)}>
            <MenuItem value="default">Par défaut</MenuItem>
            <MenuItem value="price-asc">Prix croissant</MenuItem>
            <MenuItem value="price-desc">Prix décroissant</MenuItem>
          </Select>
        </FormControl>
      </Box>
      {error ? (
        <Alert severity="error">{error}</Alert>
      ) : loading ? (
        <Box sx={{ display: 'flex', justifyContent: 'center', py: 4 }}>
          <CircularProgress color="inherit" />
        </Box>
      ) : Array.isArray(paginated) && paginated.length > 0 ? (
        <>
          <Grid container spacing={4} justifyContent="center">
            {paginated.map((product, idx) => (
              <Fade in={true} timeout={700 + idx * 200} key={product.id}>
                <Slide in={true} direction="up" timeout={700 + idx * 200}>
                  <Grid item xs={12} sm={6} md={4} lg={3}>
                    <Card sx={{ borderRadius: 4, boxShadow: 'var(--shadow)', bgcolor: 'var(--color-white)', p: 1, position: 'relative', transition: 'box-shadow 0.2s', ':hover': { boxShadow: '0 8px 32px 0 rgba(35,35,35,0.13)' } }}>
                      <CardMedia
                        component="img"
                        height="220"
                        image={product.image || 'https://via.placeholder.com/400x220?text=Produit'}
                        alt={product.name}
                        sx={{ borderRadius: 3, objectFit: 'cover', mb: 1 }}
                      />
                      <IconButton sx={{ position: 'absolute', top: 18, right: 18, bgcolor: 'var(--color-white)', boxShadow: 1, ':hover': { bgcolor: 'var(--color-sage)' }, ':focus-visible': { outline: '2px solid var(--color-sage)', outlineOffset: 2 } }} aria-label={`Ajouter ${product.name} aux favoris`} tabIndex={0}>
                        <FavoriteBorderIcon sx={{ color: 'var(--color-gold)' }} />
                      </IconButton>
                      <CardContent sx={{ pb: 1 }}>
                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 1 }}>
                          <Rating value={product.rating || 5} readOnly size="small" />
                          <Chip label="New" color="primary" size="small" sx={{ fontWeight: 700, fontSize: 12, ml: 1, bgcolor: 'var(--color-sage)', color: 'var(--color-black)' }} />
                        </Box>
                        <Typography variant="h6" sx={{ fontWeight: 700, fontSize: 19, color: 'var(--color-black)', mb: 0.5, fontFamily: 'Poppins, Inter, sans-serif' }}>{product.name}</Typography>
                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                          <Typography variant="body1" sx={{ fontWeight: 700, color: 'var(--color-gold)', fontSize: 18 }}>{product.price?.toLocaleString('fr-FR', { style: 'currency', currency: 'EUR' })}</Typography>
                          {product.oldPrice && (
                            <Typography variant="body2" sx={{ color: 'var(--color-grey)', textDecoration: 'line-through', fontWeight: 500 }}>{product.oldPrice.toLocaleString('fr-FR', { style: 'currency', currency: 'EUR' })}</Typography>
                          )}
                        </Box>
                      </CardContent>
                      <CardActions sx={{ justifyContent: 'center', pb: 2 }}>
                        <Button variant="outlined" sx={{ borderRadius: 2, fontWeight: 700, px: 3, color: 'var(--color-sage)', borderColor: 'var(--color-sage)', ':hover': { bgcolor: 'var(--color-sage)', color: 'var(--color-black)' }, ':focus-visible': { outline: '2px solid var(--color-sage)', outlineOffset: 2 } }} aria-label={`Sélectionner les options pour ${product.name}`} tabIndex={0}>
                          Sélectionner
                        </Button>
                        <Button variant="contained" sx={{ borderRadius: 2, fontWeight: 700, px: 3, bgcolor: 'var(--color-gold)', color: 'var(--color-white)', ':hover': { bgcolor: 'var(--color-sage)', color: 'var(--color-black)' }, ':focus-visible': { outline: '2px solid var(--color-gold)', outlineOffset: 2 } }} aria-label={`Voir rapidement ${product.name}`} tabIndex={0}>
                          Voir
                        </Button>
                        <IconButton color="primary" aria-label={`Ajouter ${product.name} au panier`} tabIndex={0} sx={{ ':focus-visible': { outline: '2px solid var(--color-gold)', outlineOffset: 2 } }}>
                          <ShoppingCartIcon />
                        </IconButton>
                      </CardActions>
                    </Card>
                  </Grid>
                </Slide>
              </Fade>
            ))}
          </Grid>
          <Box sx={{ display: 'flex', justifyContent: 'center', mt: 5 }}>
            <Pagination count={pageCount} page={page} onChange={(_, v) => setPage(v)} color="primary" shape="rounded" size="large" />
          </Box>
        </>
      ) : (
        <Typography>Aucun produit à afficher.</Typography>
      )}
    </Box>
  );
} 