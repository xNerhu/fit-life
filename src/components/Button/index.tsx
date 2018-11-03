import React from 'react';

import { Root } from './styles';

export type ButtonEvent = (e?: React.SyntheticEvent<HTMLDivElement>) => void;

export interface Props {
  background?: string;
  foreground?: string;
  inline?: boolean;
  text?: string;
  variant?: 'contained' | 'outlined' | 'text';
  borderColor?: string;
  style?: any;
  onClick?: ButtonEvent;
}

export default class Button extends React.Component<Props, {}> {
  public static defaultProps: Props = {
    background: '#fff',
    foreground: '#000',
    borderColor: 'rgba(0, 0, 0, 0.12)',
    text: 'TEXT',
    inline: false,
    variant: 'contained',
  };

  render() {
    const {
      background,
      foreground,
      inline,
      variant,
      borderColor,
      text,
      style,
    } = this.props;

    return (
      <React.Fragment>
        {!inline && <div style={{ clear: 'both' }} />}
        <Root
          background={background}
          foreground={foreground}
          borderColor={borderColor}
          variant={variant}
          style={style}
        >
          {text}
        </Root>
      </React.Fragment>
    );
  }
}
