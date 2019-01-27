import React, { Component } from 'react';
import { Helmet } from 'react-helmet';

class App extends Component {
  render () {
    return (
      <div>
        <Helmet>
          <title>First title</title>
        </Helmet>
      </div>
    );
  }
}