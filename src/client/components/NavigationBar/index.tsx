import * as React from 'react';

import {
  Root,
  LogoContainer,
  Logo,
  Title,
  ItemsContainer,
  Link,
  MenuIcon,
} from './styles';

export interface State {
  activated: boolean;
  toggled: boolean;
}

export default class NavigationBar extends React.Component<{}, State> {
  public state: State = {
    activated: false,
    toggled: false,
  };

  componentDidMount() {
    window.addEventListener('scroll', this.onScroll);
    this.onScroll();
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.onScroll);
  }

  public onScroll = () => {
    const { activated } = this.state;
    const title = document.getElementById('start-title');
    const rect = title.getBoundingClientRect();
    const titlePos = rect.top + window.scrollY;
    const scrollPos = document.documentElement.scrollTop;
    const isNavOverTitle = titlePos - 64 < scrollPos;

    if (isNavOverTitle && !activated) {
      this.setState({ activated: true });
    } else if (!isNavOverTitle && activated) {
      this.setState({ activated: false });
    }
  };

  public onMenuClick = () => {
    this.setState({
      toggled: !this.state.toggled,
    });
  };

  render() {
    const { activated, toggled } = this.state;

    return (
      <Root activated={activated} toggled={toggled}>
        <LogoContainer>
          <Logo />
          <Title>Projekt Fit Life</Title>
        </LogoContainer>
        <MenuIcon
          activated={activated}
          toggled={toggled}
          onClick={this.onMenuClick}
        />
        <ItemsContainer>
          <Link to="/start">Start</Link>
          <Link to="/about">O projekcie</Link>
          <Link to="/problem">O problemie</Link>
          <Link to="/team">Zespół</Link>
          <Link to="/events">Wydarzenia</Link>
          <Link to="/partnership">Współpraca</Link>
          <Link to="/contact">Kontakt</Link>
        </ItemsContainer>
      </Root>
    );
  }
}
