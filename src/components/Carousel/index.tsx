import * as React from 'react';

import { Root, Image, CirclesContainer, Circle } from './styles';
import { CarouselItem } from '~/interfaces';

export interface Props {
  items: CarouselItem[];
  style: any;
}

interface State {
  current: number;
}

export default class Carousel extends React.Component<Props, State> {
  public state: State = {
    current: 0,
  };

  render() {
    const { items, style } = this.props;
    const { current } = this.state;

    const item = items[current];

    let index = -1;

    return (
      <Root style={style}>
        <Image url={item.image} />
        <CirclesContainer>
          {items.map((data, key) => {
            index++;
            return <Circle selected={current === index} key={key} />;
          })}
        </CirclesContainer>
      </Root>
    );
  }
}
