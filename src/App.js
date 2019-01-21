import React, { Component } from 'react';
import './App.css';

import Index from './pagedraw/index';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
        name: ''
    };
  }

  render() {
    return (
      <Index
        name={this.state.name}
        handleNameChange={(evt) => {
            this.setState({name: evt.target.value});
        }}
      />
    );
  }
}

export default App;
