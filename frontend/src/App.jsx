import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import LandingPage from './pages/LandingPage';
import CustomerPage from './pages/CustomerPage';
import ProductPage from './pages/ProductPage';
import OrderPage from './pages/OrderPage';
import ShopPage from './pages/ShopPage';
import ContactPage from './pages/ContactPage';
import ReviewsPage from './pages/ReviewsPage';

function Placeholder({ title }) {
  return <div style={{ width: '100%', minHeight: '60vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}><h2>{title} (à venir)</h2></div>;
}

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/products" element={<ShopPage />} />
          <Route path="/reviews" element={<ReviewsPage />} />
          <Route path="/customers" element={<CustomerPage />} />
          <Route path="/orders" element={<OrderPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/mentions-legales" element={<Placeholder title="Mentions légales" />} />
          <Route path="/cgv" element={<Placeholder title="CGV" />} />
          <Route path="*" element={<LandingPage />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
