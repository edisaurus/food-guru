import React from 'react';
import InputGroup from 'react-bootstrap/InputGroup';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';

export default class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      recipe: ''
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleSubmit() {
    const input = this.state.recipe;
    this.setState({
      recipe: input
    })
  }

  handleChange(e) {
    this.setState({
      recipe: e.target.value,
    })
  }

  render() {
    return(
      <div id="search-bar" className="center">
       <p>Search</p>
       <Form id="input-form">
       <InputGroup className="mb-3">
         <FormControl
          placeholder="Search for a meal..."
          aria-label="Search for a meal..."
          aria-describedby="basic-addon2"
          onChange={this.handleChange}
          value={this.state.recipe}
        />
        <Button variant="outline-primary" id="button-addon2" onClick={this.handleSubmit}>
          <i className="fa fa-search"></i>
        </Button>
      </InputGroup>
      </Form>
      </div>
    );
  }
};
