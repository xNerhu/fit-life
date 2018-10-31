import * as React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Start from '../Start';
import { fonts } from '~/constants';

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <React.Fragment>
          <Route path="/" component={Start} />
        </React.Fragment>
      </BrowserRouter>
    );
  }
}

export default App;
