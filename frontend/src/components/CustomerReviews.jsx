import React from 'react';
import { Box, Typography, Grid, Card, CardContent, Avatar, Rating, Fade, Slide } from '@mui/material';

const reviews = [
  {
    id: 1,
    name: 'Mackangy ree',
    role: 'Design manager',
    avatar: 'https://randomuser.me/api/portraits/men/32.jpg',
    rating: 5,
    text: "Lighting does occasionally strike and occasional the result isn't a corpse.",
    product: 'Earth globe black',
    productImg: 'https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=200&q=80',
  },
  {
    id: 2,
    name: 'Shoko mugikura',
    role: 'Chief financial',
    avatar: 'https://randomuser.me/api/portraits/women/44.jpg',
    rating: 5,
    text: 'Look at the stars lighting up the sky: no one of them stays in the same place.',
    product: 'Decorative mirror',
    productImg: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=200&q=80',
  },
  {
    id: 3,
    name: 'Jonsan donner',
    role: 'Financial manager',
    avatar: 'https://randomuser.me/api/portraits/men/65.jpg',
    rating: 5,
    text: 
      
      "The best way to know whe there's good lighting is wh you don't notice it.",
    product: '',
    productImg: '',
  },
];

export default function CustomerReviews() {
  return (
    <Box sx={{ width: '100%', bgcolor: '#f7fafc', py: { xs: 6, md: 10 }, px: { xs: 2, md: 8 } }}>
      <Typography variant="h3" sx={{ fontWeight: 900, fontSize: { xs: 26, md: 38 }, color: '#222', mb: 5, fontFamily: 'Montserrat, Inter, sans-serif', textAlign: 'center' }}>
        Happy customer words
      </Typography>
      <Grid container spacing={4} justifyContent="center" sx={{ overflowX: { xs: 'auto', md: 'visible' }, flexWrap: { xs: 'nowrap', md: 'wrap' } }}>
        {reviews.map((review, idx) => (
          <Fade in={true} timeout={700 + idx * 200} key={review.id}>
            <Slide in={true} direction="up" timeout={700 + idx * 200}>
              <Grid item xs={10} sm={6} md={4} sx={{ minWidth: { xs: 300, sm: 320, md: 0 } }}>
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
                      {review.productImg && (
                        <Box sx={{ ml: 'auto', display: 'flex', alignItems: 'center', gap: 1 }}>
                          <img src={review.productImg} alt={review.product} style={{ width: 38, height: 38, borderRadius: 8, objectFit: 'cover' }} />
                          <Typography variant="body2" sx={{ color: '#888' }}>{review.product}</Typography>
                        </Box>
                      )}
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