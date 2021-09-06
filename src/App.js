import React from 'react';

// Bootstrap Components
import Container from 'react-bootstrap/Container';

// Components
import Header from './component/Header';
import Main from './component/Main';
import Footer from './component/Footer';

import './App.css';

// Container

export default function App() {
  return (
    <Container id="container" className="p-3">
      <Header />
      <Main />
      <Footer />
    </Container>
  );
};

