import * as React from 'react';

import Start from './Start';
import About from './About';
import Problem from './Problem';
import Team from './Team';
import Events from './Events';
import Contact from './Contact';

export default class Home extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Start />
        <About />
        <Problem />
        <Team />
        <Events />
        <Contact />
      </React.Fragment>
    );
  }
}
