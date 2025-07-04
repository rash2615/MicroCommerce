import React from 'react';
import { Box, Typography, Paper } from '@mui/material';

export default function CGV() {
  return (
    <Box sx={{ width: '100%', minHeight: '100vh', bgcolor: '#f7fafc', py: 6, px: { xs: 2, md: 8 } }}>
      <Paper elevation={2} sx={{ p: { xs: 2, md: 5 }, borderRadius: 4, maxWidth: 900, mx: 'auto' }}>
        <Typography variant="h3" sx={{ fontWeight: 900, fontSize: { xs: 26, md: 36 }, color: '#222', mb: 3, fontFamily: 'Montserrat, Inter, sans-serif', textAlign: 'center' }}>
          Conditions Générales de Vente (CGV)
        </Typography>
        <Typography variant="h6" sx={{ mt: 3, mb: 1 }}>1. Objet</Typography>
        <Typography variant="body1">Les présentes conditions régissent les ventes de produits par MicroCommerce sur le site www.microcommerce.fr.</Typography>
        <Typography variant="h6" sx={{ mt: 3, mb: 1 }}>2. Prix</Typography>
        <Typography variant="body1">Les prix sont indiqués en euros toutes taxes comprises. MicroCommerce se réserve le droit de modifier ses prix à tout moment.</Typography>
        <Typography variant="h6" sx={{ mt: 3, mb: 1 }}>3. Commande</Typography>
        <Typography variant="body1">Toute commande passée sur le site implique l'acceptation pleine et entière des présentes CGV.</Typography>
        <Typography variant="h6" sx={{ mt: 3, mb: 1 }}>4. Livraison</Typography>
        <Typography variant="body1">Les produits sont livrés à l'adresse indiquée par le client lors de la commande. Les délais de livraison sont donnés à titre indicatif.</Typography>
        <Typography variant="h6" sx={{ mt: 3, mb: 1 }}>5. Droit de rétractation</Typography>
        <Typography variant="body1">Conformément à la loi, le client dispose d'un délai de 14 jours pour exercer son droit de rétractation sans avoir à justifier de motifs ni à payer de pénalités.</Typography>
        <Typography variant="h6" sx={{ mt: 3, mb: 1 }}>6. Données personnelles</Typography>
        <Typography variant="body1">Les données collectées sont nécessaires au traitement des commandes et à la gestion de la relation client. Elles ne sont jamais transmises à des tiers sans consentement.</Typography>
        <Typography variant="h6" sx={{ mt: 3, mb: 1 }}>7. Litiges</Typography>
        <Typography variant="body1">En cas de litige, une solution amiable sera recherchée. À défaut, les tribunaux français seront seuls compétents.</Typography>
      </Paper>
    </Box>
  );
} 