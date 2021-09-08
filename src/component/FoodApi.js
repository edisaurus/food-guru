import React from 'react';
import Main from './Main';

export default class FoodApi extends React.Component {
  constructor(props) {
    super(props)
    this.state = { recipes: '' }
  }

  fetchFoods = () => {
    fetch('https://api.spoonacular.com/recipes/search?query=egg&apiKey=5af2e57bd3324d5f8d0b90933d4b9b04')
      .then(response => response.json())
      .then(response => this.handleSuccessResponse(response))
      .catch(error => this.handleErrorResponse(error));
  };

  handleSuccessResponse = response => {
    this.setState({ recipes: JSON.stringify(response) });
  };

  handleErrorResponse = error => {
    console.log('error :', error);
  };

  componentDidMount() {
    this.fetchFoods();
  };

  render() {
    const items = this.state.recipes;

    return (
      <div id="api-call" className="center">
        <p>API call test output</p>
        <Main items={items} />
      </div>
    );
  }
}
