import * as React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Home from '../Home';
import { StyledApp } from './styles';

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <StyledApp>
          <Route path="/" component={Home} />
        </StyledApp>
      </BrowserRouter>
    );
  }
}

export default App;
