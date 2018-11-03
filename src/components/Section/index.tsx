import * as React from 'react';

import { Root, Title, Content } from './styles';

export interface Props {
  title: string;
}

export default class Section extends React.Component<Props, {}> {
  render() {
    const { title, children } = this.props;

    return (
      <Root>
        <Title>{title}</Title>
        <Content>{children}</Content>
      </Root>
    );
  }
}
