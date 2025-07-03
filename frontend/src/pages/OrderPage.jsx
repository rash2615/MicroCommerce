import React, { useEffect, useState } from 'react';
import { Typography, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, TextField, Button, IconButton, Snackbar, Alert, Box, MenuItem, Select, FormControl, InputLabel } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import axios from 'axios';

const API_URL = 'http://localhost:8080/api/orders';
const CUSTOMERS_URL = 'http://localhost:8080/api/customers';
const PRODUCTS_URL = 'http://localhost:8080/api/products';

function OrderPage() {
  const [orders, setOrders] = useState([]);
  const [customers, setCustomers] = useState([]);
  const [products, setProducts] = useState([]);
  const [customerId, setCustomerId] = useState('');
  const [productId, setProductId] = useState('');
  const [quantite, setQuantite] = useState('1');
  const [snackbar, setSnackbar] = useState({ open: false, message: '', severity: 'success' });

  const fetchOrders = async () => {
    try {
      const res = await axios.get(API_URL);
      setOrders(res.data);
    } catch (err) {
      setSnackbar({ open: true, message: "Erreur lors du chargement des commandes", severity: 'error' });
    }
  };

  const fetchCustomers = async () => {
    try {
      const res = await axios.get(CUSTOMERS_URL);
      setCustomers(res.data);
    } catch {}
  };

  const fetchProducts = async () => {
    try {
      const res = await axios.get(PRODUCTS_URL);
      setProducts(res.data);
    } catch {}
  };

  useEffect(() => {
    fetchOrders();
    fetchCustomers();
    fetchProducts();
  }, []);

  const handleAdd = async (e) => {
    e.preventDefault();
    if (!customerId || !productId || !quantite) return;
    try {
      await axios.post(API_URL, { customerId, productId, quantite: parseInt(quantite) });
      setCustomerId(''); setProductId(''); setQuantite('1');
      setSnackbar({ open: true, message: "Commande ajoutée !", severity: 'success' });
      fetchOrders();
    } catch (err) {
      setSnackbar({ open: true, message: "Erreur lors de l'ajout", severity: 'error' });
    }
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`${API_URL}/${id}`);
      setSnackbar({ open: true, message: "Commande supprimée", severity: 'info' });
      fetchOrders();
    } catch (err) {
      setSnackbar({ open: true, message: "Erreur lors de la suppression", severity: 'error' });
    }
  };

  // Pour enrichir l'affichage, on va chercher les infos client/produit pour chaque commande
  const [orderDetails, setOrderDetails] = useState({});
  useEffect(() => {
    const fetchDetails = async () => {
      const details = {};
      for (const order of orders) {
        try {
          const res = await axios.get(`${API_URL}/${order.id}/with-customer`);
          details[order.id] = res.data;
        } catch {
          details[order.id] = null;
        }
      }
      setOrderDetails(details);
    };
    if (orders.length > 0) fetchDetails();
  }, [orders]);

  return (
    <Box>
      <Typography variant="h4" gutterBottom>Commandes</Typography>
      <Paper sx={{ p: 2, mb: 3 }}>
        <form onSubmit={handleAdd} style={{ display: 'flex', gap: 16, flexWrap: 'wrap', alignItems: 'center' }}>
          <FormControl sx={{ minWidth: 180 }} required>
            <InputLabel>Client</InputLabel>
            <Select value={customerId} label="Client" onChange={e => setCustomerId(e.target.value)}>
              {customers.map(c => <MenuItem key={c.id} value={c.id}>{c.nom} ({c.email})</MenuItem>)}
            </Select>
          </FormControl>
          <FormControl sx={{ minWidth: 180 }} required>
            <InputLabel>Produit</InputLabel>
            <Select value={productId} label="Produit" onChange={e => setProductId(e.target.value)}>
              {products.map(p => <MenuItem key={p.id} value={p.id}>{p.nom} ({p.prix} €)</MenuItem>)}
            </Select>
          </FormControl>
          <TextField label="Quantité" value={quantite} onChange={e => setQuantite(e.target.value)} required type="number" inputProps={{ min: '1' }} sx={{ width: 100 }} />
          <Button type="submit" variant="contained">Ajouter</Button>
        </form>
      </Paper>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>ID</TableCell>
              <TableCell>Client</TableCell>
              <TableCell>Produit</TableCell>
              <TableCell>Quantité</TableCell>
              <TableCell align="right">Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {orders.map((o) => {
              const details = orderDetails[o.id];
              return (
                <TableRow key={o.id}>
                  <TableCell>{o.id}</TableCell>
                  <TableCell>
                    {details && details.customer ? `${details.customer.nom} (${details.customer.email})` : o.customerId}
                  </TableCell>
                  <TableCell>
                    {details && details.order ? details.order.productId : o.productId}
                  </TableCell>
                  <TableCell>{o.quantite}</TableCell>
                  <TableCell align="right">
                    <IconButton color="error" onClick={() => handleDelete(o.id)}><DeleteIcon /></IconButton>
                  </TableCell>
                </TableRow>
              );
            })}
            {orders.length === 0 && (
              <TableRow><TableCell colSpan={5} align="center">Aucune commande</TableCell></TableRow>
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

export default OrderPage; 