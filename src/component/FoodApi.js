import React from 'react';
import Main from './Main';

import InputGroup from 'react-bootstrap/InputGroup';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';

export default class FoodApi extends React.Component {

  constructor(props) {
    super(props);
    this.state = { 
      error: null,
      isLoaded: false,
      items: []
    };
  }
  
  fetchFoods = () => {
    fetch('https://api.spoonacular.com/recipes/search?query=pasta&apiKey=5af2e57bd3324d5f8d0b90933d4b9b04')
      .then(response => response.json())
      .then(response => this.handleSuccessResponse(response))
      .catch(error => this.handleErrorResponse(error));
  };

  handleSuccessResponse = response => {
    this.setState({
      isLoaded: true,
      items: response.results
    });
    console.log(response)
  };

  handleErrorResponse = error => {
    this.setState({
      isLoaded: true,
      error
    })
    console.log('error :', error);
  };

  componentDidMount() {
    this.fetchFoods();
  };

  render() {
    const { error, isLoaded, items } = this.state;
    if (error) {
      return <div>Error: {error.message}</div>
    } else if (!isLoaded) {
      return <div>Loading...</div>
    } else {
      return (
        <section id="api-call" className="center">
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
        <p>API call test output</p>
        <Main items={items} />
        </section>
      );
    }
  }
}
