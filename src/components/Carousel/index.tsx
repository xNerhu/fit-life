import * as React from 'react';

import {
  Root,
  Image,
  ArrowIcon,
  CirclesContainer,
  CircleElement,
  TextContainer,
} from './styles';
import { CarouselItem } from '~/interfaces';

export interface Props {
  items: CarouselItem[];
  style?: any;
}

interface State {
  current: CarouselItem;
}

export default class Carousel extends React.Component<Props, State> {
  public state: State = {
    current: null,
  };

  componentDidMount() {
    const { items } = this.props;
    this.setState({ current: items[0] });
  }

  private select = (next = false) => {
    const { items } = this.props;
    const { current } = this.state;

    let index = items.indexOf(current);

    if (!next) {
      index--;
      if (index < 0) index = items.length - 1;
    } else {
      index++;
      if (index > items.length - 1) index = 0;
    }

    this.setState({ current: items[index] });
  };

  render() {
    const { items, style } = this.props;
    const { current } = this.state;

    return (
      <Root style={style}>
        {current && (
          <React.Fragment>
            <Image url={current.image} />
            <TextContainer>{current.text}</TextContainer>
          </React.Fragment>
        )}
        <ArrowIcon side="left" onClick={() => this.select()} />
        <ArrowIcon side="right" onClick={() => this.select(true)} />
        <CirclesContainer>
          {items.map((data, key) => {
            return (
              <CircleElement
                selected={current === data}
                key={key}
                onClick={() => this.setState({ current: data })}
              />
            );
          })}
        </CirclesContainer>
      </Root>
    );
  }
}
