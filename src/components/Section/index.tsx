import * as React from 'react';

import { Root, Title, Content } from './styles';

export interface Props {
  title: string;
  vertical?: boolean;
}

export default class Section extends React.Component<Props, {}> {
  public static defaultProps: Props = {
    title: 'Title',
    vertical: true,
  };

  render() {
    const { vertical, title, children } = this.props;

    return (
      <Root vertical={vertical}>
        <Title vertical={vertical}>{title}</Title>
        <Content vertical={vertical}>{children}</Content>
      </Root>
    );
  }
}
