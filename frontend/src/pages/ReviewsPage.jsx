import React, { useState } from 'react';
import { Box, Typography, Grid, Card, CardContent, Avatar, Rating, Fade, Slide, TextField, Button, Paper, Alert } from '@mui/material';

const initialReviews = [
  {
    id: 1,
    name: 'Mackangy ree',
    role: 'Design manager',
    avatar: 'https://randomuser.me/api/portraits/men/32.jpg',
    rating: 5,
    text: "Lighting does occasionally strike and occasional the result isn't a corpse.",
  },
  {
    id: 2,
    name: 'Shoko mugikura',
    role: 'Chief financial',
    avatar: 'https://randomuser.me/api/portraits/women/44.jpg',
    rating: 5,
    text: 'Look at the stars lighting up the sky: no one of them stays in the same place.',
  },
  {
    id: 3,
    name: 'Jonsan donner',
    role: 'Financial manager',
    avatar: 'https://randomuser.me/api/portraits/men/65.jpg',
    rating: 5,
    text: "The best way to know whe there's good lighting is wh you don't notice it.",
  },
];

export default function ReviewsPage() {
  const [reviews, setReviews] = useState(initialReviews);
  const [form, setForm] = useState({ name: '', role: '', rating: 5, text: '' });
  const [sent, setSent] = useState(false);

  const handleChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleRating = (_, value) => {
    setForm({ ...form, rating: value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    setReviews([
      { ...form, id: reviews.length + 1, avatar: `https://randomuser.me/api/portraits/lego/${Math.floor(Math.random()*10)}.jpg` },
      ...reviews,
    ]);
    setForm({ name: '', role: '', rating: 5, text: '' });
    setSent(true);
    setTimeout(() => setSent(false), 2500);
  };

  return (
    <Box sx={{ width: '100%', minHeight: '100vh', bgcolor: '#f7fafc', py: 6, px: { xs: 2, md: 8 } }}>
      <Typography variant="h3" sx={{ fontWeight: 900, fontSize: { xs: 28, md: 40 }, color: '#222', mb: 4, fontFamily: 'Montserrat, Inter, sans-serif', textAlign: 'center' }}>
        Avis clients
      </Typography>
      <Grid container spacing={6} justifyContent="center" sx={{ mb: 6 }}>
        <Grid item xs={12} md={6}>
          <Paper elevation={2} sx={{ p: { xs: 2, md: 4 }, borderRadius: 4 }}>
            <Typography variant="h5" sx={{ fontWeight: 700, mb: 2 }}>Laissez votre avis</Typography>
            {sent && <Alert severity="success" sx={{ mb: 2 }}>Merci pour votre avis !</Alert>}
            <form onSubmit={handleSubmit} autoComplete="off">
              <TextField
                label="Nom"
                name="name"
                value={form.name}
                onChange={handleChange}
                fullWidth
                required
                sx={{ mb: 2 }}
                autoComplete="name"
              />
              <TextField
                label="Profession"
                name="role"
                value={form.role}
                onChange={handleChange}
                fullWidth
                required
                sx={{ mb: 2 }}
                autoComplete="organization-title"
              />
              <Rating
                value={form.rating}
                onChange={handleRating}
                size="large"
                sx={{ mb: 2 }}
              />
              <TextField
                label="Votre avis"
                name="text"
                value={form.text}
                onChange={handleChange}
                fullWidth
                required
                multiline
                minRows={3}
                sx={{ mb: 2 }}
                autoComplete="off"
              />
              <Button type="submit" variant="contained" size="large" sx={{ fontWeight: 700, borderRadius: 2, bgcolor: '#1976d2', color: '#fff', boxShadow: 'none', ':hover': { bgcolor: '#1251a3' } }}>
                Envoyer
              </Button>
            </form>
          </Paper>
        </Grid>
      </Grid>
      <Grid container spacing={4} justifyContent="center">
        {reviews.map((review, idx) => (
          <Fade in={true} timeout={700 + idx * 200} key={review.id}>
            <Slide in={true} direction="up" timeout={700 + idx * 200}>
              <Grid item xs={12} sm={6} md={4} lg={3}>
                <Card sx={{ borderRadius: 4, boxShadow: '0 2px 16px 0 rgba(25,118,210,0.06)', bgcolor: '#f4f7f9', p: 2, height: '100%' }}>
                  <CardContent>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 1 }}>
                      <Rating value={review.rating} readOnly size="small" />
                    </Box>
                    <Typography variant="body1" sx={{ color: '#444', fontWeight: 500, mb: 2, minHeight: 60 }}>
                      {review.text}
                    </Typography>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mt: 2 }}>
                      <Avatar src={review.avatar} alt={review.name} sx={{ width: 48, height: 48 }} />
                      <Box>
                        <Typography variant="subtitle1" sx={{ fontWeight: 700 }}>{review.name}</Typography>
                        <Typography variant="body2" sx={{ color: '#888' }}>{review.role}</Typography>
                      </Box>
                    </Box>
                  </CardContent>
                </Card>
              </Grid>
            </Slide>
          </Fade>
        ))}
      </Grid>
    </Box>
  );
} 