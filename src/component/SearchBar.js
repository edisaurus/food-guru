import React from 'react';
import { Form } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';

export default function SearchBar() {
  return (
    <div id="search-bar" className="center">
      <p>Search bar</p>
      <Form>
          <Form.Group className="mb-3" controlId="formSearch">
              <Form.Control type="text" placeholder="Search for food.."/>
          </Form.Group>
          <Button variant="primary" type="submit">
              Submit
          </Button>
      </Form>
      <p></p>
    </div>
  );
}