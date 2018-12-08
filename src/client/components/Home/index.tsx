import * as React from 'react';

import NavigationBar from '../NavigationBar';
import Start from './Start';
import About from './About';
import Partnership from './Partnership';
import Problem from './Problem';
import Food from './Food';
import Team from './Team';
import Events from './Events';
import Motto from './Motto';
import Contact from './Contact';
import Footer from './Footer';

export interface Props {
  history: any;
}

export default class Home extends React.Component<Props, {}> {
  render() {
    return (
      <React.Fragment>
        <NavigationBar />
        <Start />
        <About />
        <Problem />
        <Food />
        <Team />
        <Partnership />
        <Events />
        <Motto />
        <Contact />
        <Footer />
      </React.Fragment>
    );
  }
}
