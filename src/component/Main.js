import React from 'react';
import SearchBar from './SearchBar';
import Photo from './Photo';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Ingredient from './Ingredient';
import Procedure from './Procedure';

export default function Main() {
  return (
    <div id="main-container" className="center">
      <p>Main Container</p>
      <SearchBar />
      <Row>
          <Col>
            <Photo />
            <Ingredient />
          </Col>
          <Col>
            <Procedure />
          </Col>
      </Row>
    </div>
  );
}