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
  componentWillMount() {
    const { history } = this.props;

    requestAnimationFrame(() => {
      this.listenHistory();
    });
    history.listen(this.listenHistory);
  }

  private listenHistory = (e?: any) => {
    const { history } = this.props;
    const id = history.location.pathname.slice(1);
    if (id === '') return;

    const element = document.getElementById(id);

    window.scroll({
      behavior: 'smooth',
      left: 0,
      top: element.offsetTop - 56,
    });
  };

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
