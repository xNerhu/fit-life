import * as React from 'react';

import {
  Root,
  LogoContainer,
  Logo,
  Title,
  ItemsContainer,
  ItemRoot,
  MenuIcon,
} from './styles';

export interface ItemProps {
  id: string;
}

class Item extends React.Component<ItemProps, {}> {
  private onClick = () => {
    const { id } = this.props;
    const element = document.getElementById(id);

    window.scroll({
      behavior: 'smooth',
      left: 0,
      top: element.offsetTop - 56,
    });
  };

  public render() {
    const { children } = this.props;
    return <ItemRoot onClick={this.onClick}>{children}</ItemRoot>;
  }
}

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
          <Item id="start">Start</Item>
          <Item id="about">O projekcie</Item>
          <Item id="problem">O problemie</Item>
          <Item id="team">Zespół</Item>
          <Item id="events">Wydarzenia</Item>
          <Item id="partnership">Współpraca</Item>
          <Item id="contact">Kontakt</Item>
        </ItemsContainer>
      </Root>
    );
  }
}
