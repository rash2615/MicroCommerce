import React from 'react';
import { Box, Typography, Paper } from '@mui/material';

export default function LegalNotice() {
  return (
    <Box sx={{ width: '100%', minHeight: '100vh', bgcolor: '#f7fafc', py: 6, px: { xs: 2, md: 8 } }}>
      <Paper elevation={2} sx={{ p: { xs: 2, md: 5 }, borderRadius: 4, maxWidth: 900, mx: 'auto' }}>
        <Typography variant="h3" sx={{ fontWeight: 900, fontSize: { xs: 26, md: 36 }, color: '#222', mb: 3, fontFamily: 'Montserrat, Inter, sans-serif', textAlign: 'center' }}>
          Mentions légales
        </Typography>
        <Typography variant="h6" sx={{ mt: 3, mb: 1 }}>Éditeur du site</Typography>
        <Typography variant="body1">MicroCommerce, 123 Rue Fictive, 75000 Paris<br/>contact@microcommerce.fr<br/>01 23 45 67 89</Typography>
        <Typography variant="h6" sx={{ mt: 3, mb: 1 }}>Directeur de la publication</Typography>
        <Typography variant="body1">Mme Rashmi, Présidente</Typography>
        <Typography variant="h6" sx={{ mt: 3, mb: 1 }}>Hébergement</Typography>
        <Typography variant="body1">OVH SAS, 2 rue Kellermann, 59100 Roubaix, France<br/>www.ovh.com</Typography>
        <Typography variant="h6" sx={{ mt: 3, mb: 1 }}>Propriété intellectuelle</Typography>
        <Typography variant="body1">L'ensemble du contenu du site (textes, images, graphismes, logo, icônes) est la propriété exclusive de MicroCommerce, sauf mentions contraires. Toute reproduction, représentation, modification, publication, adaptation de tout ou partie du site, quel que soit le moyen ou le procédé utilisé, est interdite sans autorisation écrite préalable.</Typography>
        <Typography variant="h6" sx={{ mt: 3, mb: 1 }}>Données personnelles & RGPD</Typography>
        <Typography variant="body1">Les informations recueillies via les formulaires sont destinées uniquement à MicroCommerce et ne sont jamais transmises à des tiers. Conformément au RGPD, vous disposez d'un droit d'accès, de rectification et de suppression de vos données, que vous pouvez exercer à l'adresse contact@microcommerce.fr.</Typography>
        <Typography variant="h6" sx={{ mt: 3, mb: 1 }}>Contact</Typography>
        <Typography variant="body1">Pour toute question, vous pouvez nous contacter à l'adresse contact@microcommerce.fr.</Typography>
      </Paper>
    </Box>
  );
} 