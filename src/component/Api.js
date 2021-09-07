import React from 'react';

// export default function Api() {
//   return (
//     <div id="api-call" className="center">
//       <p>API call</p>
//     </div>
//   );
// }
class Api extends React.Component {

  fetchFoods = () => {
    fetch('https://api.spoonacular.com/recipes/complexSearch')
      .then(response => response.json())
      .then(response => this.handleSuccessResponse(response))
      .catch(error => this.handleErrorResponse(error));
  };

  handleSuccessResponse = response => {
    this.setState({ recipes: [...response.content] });
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
      </div>
    );
  }
}

export default Api;