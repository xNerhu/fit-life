import * as React from 'react';

import Start from './Start';
import About from './About';
import Problem from './Problem';
import Team from './Team';
import Events from './Events';
import Contact from './Contact';
import Sponsors from './Sponsors';
import Motto from './Motto';
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
        <Start />
        <About />
        <Problem />
        <Team />
        <Events />
        <Sponsors />
        <Motto />
        <Contact />
        <Footer />
      </React.Fragment>
    );
  }
}
