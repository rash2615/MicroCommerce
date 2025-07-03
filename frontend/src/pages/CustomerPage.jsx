import React, { useEffect, useState } from 'react';
import { Typography, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, TextField, Button, IconButton, Snackbar, Alert, Box, InputAdornment } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import SearchIcon from '@mui/icons-material/Search';
import axios from 'axios';

const API_URL = 'http://localhost:8080/api/customers';

function CustomerPage() {
  const [customers, setCustomers] = useState([]);
  const [nom, setNom] = useState('');
  const [email, setEmail] = useState('');
  const [search, setSearch] = useState('');
  const [loading, setLoading] = useState(false);
  const [snackbar, setSnackbar] = useState({ open: false, message: '', severity: 'success' });

  const fetchCustomers = async () => {
    setLoading(true);
    try {
      const res = await axios.get(API_URL);
      setCustomers(res.data);
    } catch (err) {
      setSnackbar({ open: true, message: "Erreur lors du chargement des clients", severity: 'error' });
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCustomers();
  }, []);

  const handleAdd = async (e) => {
    e.preventDefault();
    if (!nom || !email) return;
    try {
      await axios.post(API_URL, { nom, email });
      setNom(''); setEmail('');
      setSnackbar({ open: true, message: "Client ajouté !", severity: 'success' });
      fetchCustomers();
    } catch (err) {
      setSnackbar({ open: true, message: "Erreur lors de l'ajout", severity: 'error' });
    }
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`${API_URL}/${id}`);
      setSnackbar({ open: true, message: "Client supprimé", severity: 'info' });
      fetchCustomers();
    } catch (err) {
      setSnackbar({ open: true, message: "Erreur lors de la suppression", severity: 'error' });
    }
  };

  // Filtrage accessible et insensible à la casse
  const filteredCustomers = customers.filter(c =>
    c.nom.toLowerCase().includes(search.toLowerCase()) ||
    c.email.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <Box>
      <Typography variant="h4" gutterBottom>Clients</Typography>
      <Paper sx={{ p: 2, mb: 3 }}>
        <form onSubmit={handleAdd} style={{ display: 'flex', gap: 16, flexWrap: 'wrap' }}>
          <TextField label="Nom" value={nom} onChange={e => setNom(e.target.value)} required />
          <TextField label="Email" value={email} onChange={e => setEmail(e.target.value)} required type="email" />
          <Button type="submit" variant="contained" sx={{ bgcolor: '#1976d2', color: '#fff', fontWeight: 700, ':hover': { bgcolor: '#115293' } }}>Ajouter</Button>
        </form>
      </Paper>
      <TextField
        fullWidth
        variant="outlined"
        placeholder="Rechercher un client par nom ou email..."
        value={search}
        onChange={e => setSearch(e.target.value)}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <SearchIcon aria-label="Rechercher" />
            </InputAdornment>
          ),
        }}
        sx={{ mb: 2, bgcolor: '#fff', borderRadius: 2, boxShadow: 1 }}
        inputProps={{
          'aria-label': 'Rechercher un client',
          style: { color: '#222', fontWeight: 500 }
        }}
      />
      <TableContainer component={Paper} sx={{ boxShadow: 2 }}>
        <Table>
          <TableHead>
            <TableRow sx={{ bgcolor: '#1976d2' }}>
              <TableCell sx={{ color: '#fff', fontWeight: 700 }}>ID</TableCell>
              <TableCell sx={{ color: '#fff', fontWeight: 700 }}>Nom</TableCell>
              <TableCell sx={{ color: '#fff', fontWeight: 700 }}>Email</TableCell>
              <TableCell align="right" sx={{ color: '#fff', fontWeight: 700 }}>Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {filteredCustomers.map((c) => (
              <TableRow key={c.id}>
                <TableCell>{c.id}</TableCell>
                <TableCell>{c.nom}</TableCell>
                <TableCell>{c.email}</TableCell>
                <TableCell align="right">
                  <IconButton color="error" onClick={() => handleDelete(c.id)} aria-label={`Supprimer ${c.nom}`}>
                    <DeleteIcon />
                  </IconButton>
                </TableCell>
              </TableRow>
            ))}
            {filteredCustomers.length === 0 && (
              <TableRow><TableCell colSpan={4} align="center">Aucun client</TableCell></TableRow>
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

export default CustomerPage; 