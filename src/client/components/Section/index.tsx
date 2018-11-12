import * as React from 'react';

import { PRIMARY_COLOR } from '@client/constants';
import { Root, Title, Content } from './styles';

export interface Props {
  id?: string;
  title: string;
  horizontal?: boolean;
  titleColor?: string;
  dividerColor?: string;
  style?: any;
  contentStyle?: any;
}

export default class Section extends React.Component<Props, {}> {
  public static defaultProps: Props = {
    title: 'Title',
    horizontal: false,
    titleColor: '#000',
    dividerColor: PRIMARY_COLOR,
  };

  render() {
    const {
      id,
      horizontal,
      titleColor,
      dividerColor,
      title,
      children,
      style,
      contentStyle,
    } = this.props;

    return (
      <Root id={id} horizontal={horizontal} style={style}>
        <Title
          horizontal={horizontal}
          color={titleColor}
          dividerColor={dividerColor}
        >
          {title}
        </Title>
        <Content horizontal={horizontal} style={contentStyle}>
          {children}
        </Content>
      </Root>
    );
  }
}
