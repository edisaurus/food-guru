import React from 'react';
import SearchBar from './SearchBar';
import Photo from './Photo';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Ingredient from './Ingredient';

export default function Main() {
  return (
    <div id="main-container" className="center">
      <p>Main Container</p>
      <SearchBar />
      <Row>
          <Col>
            <Photo />
          </Col>
          <Col>
            <Ingredient />
          </Col>
      </Row>
    </div>
  );
}