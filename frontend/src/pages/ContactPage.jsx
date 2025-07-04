import React, { useState } from 'react';
import { Box, Typography, TextField, Button, Grid, Paper, Alert } from '@mui/material';

export default function ContactPage() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [sent, setSent] = useState(false);

  const handleChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    setSent(true);
    setForm({ name: '', email: '', message: '' });
  };

  return (
    <Box sx={{ width: '100%', minHeight: '100vh', bgcolor: '#f7fafc', py: 6, px: { xs: 2, md: 8 } }}>
      <Typography variant="h3" sx={{ fontWeight: 900, fontSize: { xs: 28, md: 40 }, color: '#222', mb: 4, fontFamily: 'Montserrat, Inter, sans-serif', textAlign: 'center' }}>
        Contact
      </Typography>
      <Grid container spacing={6} justifyContent="center">
        <Grid item xs={12} md={6}>
          <Paper elevation={2} sx={{ p: { xs: 2, md: 4 }, borderRadius: 4 }}>
            <Typography variant="h5" sx={{ fontWeight: 700, mb: 2 }}>Écrivez-nous</Typography>
            {sent && <Alert severity="success" sx={{ mb: 2 }}>Votre message a bien été envoyé !</Alert>}
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
                label="Email"
                name="email"
                value={form.email}
                onChange={handleChange}
                fullWidth
                required
                type="email"
                sx={{ mb: 2 }}
                autoComplete="email"
              />
              <TextField
                label="Message"
                name="message"
                value={form.message}
                onChange={handleChange}
                fullWidth
                required
                multiline
                minRows={4}
                sx={{ mb: 2 }}
                autoComplete="off"
              />
              <Button type="submit" variant="contained" size="large" sx={{ fontWeight: 700, borderRadius: 2, bgcolor: '#1976d2', color: '#fff', boxShadow: 'none', ':hover': { bgcolor: '#1251a3' } }}>
                Envoyer
              </Button>
            </form>
          </Paper>
        </Grid>
        <Grid item xs={12} md={6}>
          <Paper elevation={2} sx={{ p: { xs: 2, md: 4 }, borderRadius: 4, height: '100%' }}>
            <Typography variant="h5" sx={{ fontWeight: 700, mb: 2 }}>Nos coordonnées</Typography>
            <Typography variant="body1" sx={{ mb: 1 }}>MicroCommerce</Typography>
            <Typography variant="body2" sx={{ mb: 1 }}>123 Rue Fictive, 75000 Paris</Typography>
            <Typography variant="body2" sx={{ mb: 1 }}>contact@microcommerce.fr</Typography>
            <Typography variant="body2" sx={{ mb: 1 }}>01 23 45 67 89</Typography>
            <Typography variant="body2" sx={{ mb: 2 }}>Lun-Ven : 9h-18h</Typography>
            <Box sx={{ borderRadius: 3, overflow: 'hidden', boxShadow: 2 }}>
              <iframe
                title="Carte Google Maps"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2624.9999999999995!2d2.294481315674!3d48.8583700792876!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e66fddf1b09b1b%3A0x8c0b6e8b0b6e8b0b!2sTour%20Eiffel!5e0!3m2!1sfr!2sfr!4v1680000000000!5m2!1sfr!2sfr"
                width="100%"
                height="220"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </Box>
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
} 