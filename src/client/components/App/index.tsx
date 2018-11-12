import * as React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Home from '../Home';

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <React.Fragment>
          <Route component={Home} />
        </React.Fragment>
      </BrowserRouter>
    );
  }
}

export default App;
