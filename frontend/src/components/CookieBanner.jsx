import React, { useState } from 'react';
import { Box, Typography, Button, Slide } from '@mui/material';

export default function CookieBanner() {
  const [open, setOpen] = useState(true);
  if (!open) return null;
  return (
    <Slide direction="up" in={open} mountOnEnter unmountOnExit>
      <Box sx={{
        position: 'fixed',
        bottom: 0,
        left: 0,
        width: '100%',
        bgcolor: '#fff',
        color: '#555',
        boxShadow: '0 -2px 16px 0 rgba(25,118,210,0.06)',
        zIndex: 2000,
        py: 2,
        px: { xs: 2, md: 0 },
        display: 'flex',
        flexDirection: { xs: 'column', sm: 'row' },
        alignItems: 'center',
        justifyContent: 'center',
        gap: 2,
        fontFamily: 'Inter, Montserrat, sans-serif',
      }}>
        <Typography variant="body2" sx={{ fontSize: 15 }}>
          Ce site utilise des cookies pour respecter la RGPD. Aucune donnée personnelle n'est conservée sans votre consentement.
        </Typography>
        <Button variant="contained" size="small" sx={{ ml: { sm: 2 }, fontWeight: 700, borderRadius: 2, bgcolor: '#1976d2', color: '#fff', boxShadow: 'none', ':hover': { bgcolor: '#1251a3' } }} onClick={() => setOpen(false)}>
          OK
        </Button>
      </Box>
    </Slide>
  );
} 