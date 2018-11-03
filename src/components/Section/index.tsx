import * as React from 'react';

import { Root, Title, Content } from './styles';

export interface Props {
  title: string;
  vertical?: boolean;
  style?: any;
}

export default class Section extends React.Component<Props, {}> {
  public static defaultProps: Props = {
    title: 'Title',
    vertical: true,
  };

  render() {
    const { vertical, title, children, style } = this.props;

    return (
      <Root vertical={vertical} style={style}>
        <Title vertical={vertical}>{title}</Title>
        <Content vertical={vertical}>{children}</Content>
      </Root>
    );
  }
}
