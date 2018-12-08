import * as React from 'react';

import { Root, Title, Container } from './styles';

export interface Props {
  title: string;
  id: string;
  style?: any;
}

export default class Section extends React.Component<Props, {}> {
  render() {
    const { id, title, children, style } = this.props;

    return (
      <Root id={id} style={style}>
        <Title>{title}</Title>
        <Container>{children}</Container>
      </Root>
    );
  }
}
