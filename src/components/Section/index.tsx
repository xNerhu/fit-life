import * as React from 'react';

import { Root, Title, Content } from './styles';

export interface Props {
  title: string;
  horizontal?: boolean;
  style?: any;
}

export default class Section extends React.Component<Props, {}> {
  public static defaultProps: Props = {
    title: 'Title',
    horizontal: false,
  };

  render() {
    const { horizontal, title, children, style } = this.props;

    return (
      <Root horizontal={horizontal} style={style}>
        <Title horizontal={horizontal}>{title}</Title>
        <Content horizontal={horizontal}>{children}</Content>
      </Root>
    );
  }
}
