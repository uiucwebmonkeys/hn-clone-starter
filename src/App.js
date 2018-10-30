import React, { Component } from 'react';

import { getTopStories } from './services/hnApi';

class App extends Component {
  constructor() {
    super();

    this.state = {
      stories: [],
    };
  }

  componentWillMount() {
    getTopStories().then(stories => {
      this.setState({ stories });
    });
  }

  render() {
    console.log(this.state.stories);

    return (
      <div className="App">
        <h1>Edit Me!</h1>
      </div>
    );
  }
}

export default App;
