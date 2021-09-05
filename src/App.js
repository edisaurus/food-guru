import React, { useState } from 'react';

import Toast from 'react-bootstrap/Toast';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';

import Landing from './component/LandingPage';

import './App.css';

const ExampleToast = ({ children }) => {
  const [show, toggleShow] = useState(true);

  return (
    <>
      {!show && <Button onClick={() => toggleShow(true)}>Show Toast</Button>}
      <Toast show={show} onClose={() => toggleShow(false)}>
        <Toast.Header>
          <strong className="mr-auto">React-Bootstrap</strong>
        </Toast.Header>
        <Toast.Body>{ children }</Toast.Body>
      </Toast>
    </>
  );
};

export default function App() {
  return (
    <Container className="p-3">
      <h1 className="center">Welcome To Food-Guru</h1>
      <ExampleToast>
        We now have Toasty
        <span role="img" aria-label="tada">
          🎉
        </span>
      </ExampleToast>
      <Landing />
    </Container>
  );
};

