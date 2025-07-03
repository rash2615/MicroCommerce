import React, { useEffect, useState } from 'react';
import { Typography, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, TextField, Button, IconButton, Snackbar, Alert, Box } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import axios from 'axios';

const API_URL = 'http://localhost:8080/api/products';

function ProductPage() {
  const [products, setProducts] = useState([]);
  const [nom, setNom] = useState('');
  const [prix, setPrix] = useState('');
  const [loading, setLoading] = useState(false);
  const [snackbar, setSnackbar] = useState({ open: false, message: '', severity: 'success' });

  const fetchProducts = async () => {
    setLoading(true);
    try {
      const res = await axios.get(API_URL);
      setProducts(res.data);
    } catch (err) {
      setSnackbar({ open: true, message: "Erreur lors du chargement des produits", severity: 'error' });
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  const handleAdd = async (e) => {
    e.preventDefault();
    if (!nom || !prix) return;
    try {
      await axios.post(API_URL, { nom, prix: parseFloat(prix) });
      setNom(''); setPrix('');
      setSnackbar({ open: true, message: "Produit ajouté !", severity: 'success' });
      fetchProducts();
    } catch (err) {
      setSnackbar({ open: true, message: "Erreur lors de l'ajout", severity: 'error' });
    }
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`${API_URL}/${id}`);
      setSnackbar({ open: true, message: "Produit supprimé", severity: 'info' });
      fetchProducts();
    } catch (err) {
      setSnackbar({ open: true, message: "Erreur lors de la suppression", severity: 'error' });
    }
  };

  return (
    <Box>
      <Typography variant="h4" gutterBottom>Produits</Typography>
      <Paper sx={{ p: 2, mb: 3 }}>
        <form onSubmit={handleAdd} style={{ display: 'flex', gap: 16, flexWrap: 'wrap' }}>
          <TextField label="Nom" value={nom} onChange={e => setNom(e.target.value)} required />
          <TextField label="Prix" value={prix} onChange={e => setPrix(e.target.value)} required type="number" inputProps={{ step: '0.01', min: '0' }} />
          <Button type="submit" variant="contained">Ajouter</Button>
        </form>
      </Paper>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>ID</TableCell>
              <TableCell>Nom</TableCell>
              <TableCell>Prix</TableCell>
              <TableCell align="right">Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {products.map((p) => (
              <TableRow key={p.id}>
                <TableCell>{p.id}</TableCell>
                <TableCell>{p.nom}</TableCell>
                <TableCell>{p.prix} €</TableCell>
                <TableCell align="right">
                  <IconButton color="error" onClick={() => handleDelete(p.id)}><DeleteIcon /></IconButton>
                </TableCell>
              </TableRow>
            ))}
            {products.length === 0 && (
              <TableRow><TableCell colSpan={4} align="center">Aucun produit</TableCell></TableRow>
            )}
          </TableBody>
        </Table>
      </TableContainer>
      <Snackbar open={snackbar.open} autoHideDuration={3000} onClose={() => setSnackbar({ ...snackbar, open: false })}>
        <Alert onClose={() => setSnackbar({ ...snackbar, open: false })} severity={snackbar.severity} sx={{ width: '100%' }}>
          {snackbar.message}
        </Alert>
      </Snackbar>
    </Box>
  );
}

export default ProductPage; 