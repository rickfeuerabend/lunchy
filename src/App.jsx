// jshint ignore: start
import React, { Component } from 'react';
import { hot } from 'react-hot-loader';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return <div>test</div>;
  }
}

export default hot(module)(App);
