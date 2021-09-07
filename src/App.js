import React from 'react';

// Bootstrap Components
import Container from 'react-bootstrap/Container';

// Components
import Header from './component/Header';
import Main from './component/Main';
import Footer from './component/Footer';
import Api from './component/Api';

// Styles
import './App.css';

// Container
export default function App() {
  return (
    <Container id="container" className="p-3 center">
      <p>Container</p>
      <Header />
      <Main />
      <Api />
      <Footer />
    </Container>
  );
};

