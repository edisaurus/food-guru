import React from 'react';
import InputGroup from 'react-bootstrap/InputGroup';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';

export default function SearchBar() {
  return (
    <div id="search-bar" className="center">
      <p>Search</p>
      <Form id="input-form">
      <InputGroup className="mb-3">
        <FormControl
          placeholder="Search for a meal..."
          aria-label="Search for a meal..."
          aria-describedby="basic-addon2"
        />
        <Button variant="outline-primary" id="button-addon2">
          <i className="fa fa-search"></i>
        </Button>
      </InputGroup>
      </Form>
      <p></p>
    </div>
  );
}