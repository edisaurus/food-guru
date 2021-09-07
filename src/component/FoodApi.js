import React from 'react';

class FoodApi extends React.Component {
  constructor(props) {
    super(props)
    this.state = { recipes: [] }
  }

  fetchFoods = () => {
    fetch('https://api.spoonacular.com/food/products/search?query=pasta&apiKey=5af2e57bd3324d5f8d0b90933d4b9b04')
      .then(response => response.json())
      .then(response => this.handleSuccessResponse(response))
      .catch(error => this.handleErrorResponse(error));
  };

  handleSuccessResponse = response => {
    this.setState({ recipes: [...JSON.stringify(response)] });
  };

  handleErrorResponse = error => {
    console.log('error :', error);
  };

  componentDidMount() {
    this.fetchFoods();
  };

  render() {
    return (
      <div id="api-call" className="center">
        <p>API call test output</p>
        <p>{this.state.recipes}</p>
      </div>
    );
  }
}

export default FoodApi;