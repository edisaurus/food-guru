import React from 'react';

// Bootstrap Components
import Container from 'react-bootstrap/Container';

// Components
import Header from './component/Header';
import Footer from './component/Footer';
import FoodApi from './component/FoodApi';

// Styles
import './App.css';

// Container
export default function App() {
  return (
    <Container id="container" className="p-3">
      <Header />
      <FoodApi />
      <Footer />
    </Container>
  );
};

