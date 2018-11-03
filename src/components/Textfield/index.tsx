import * as React from 'react';

import {
  Container,
  HoverBorder,
  Indicator,
  Input,
  InputContainer,
  Root,
} from './styles';

export type KeyboardEvent = (e?: React.KeyboardEvent<HTMLInputElement>) => void;

export interface IProps {
  color?: string;
  style?: any;
  onKeyPress?: KeyboardEvent;
  isError?: boolean;
  inputType?: string;
}

export interface IState {
  activated: boolean;
}

export default class Textfield extends React.Component<IProps, IState> {
  public static defaultProps = {
    color: '#2196F3',
    inputType: 'text',
  };

  public state: IState = {
    activated: false,
  };

  public inputElement: HTMLInputElement;

  public getValue = () => this.inputElement.value;

  public setValue = (value: string) => {
    this.inputElement.value = value;
    this.inputElement.focus();
  };

  private onClick = () => {
    this.inputElement.focus();
  };

  private onFocus = () => {
    this.setState({ activated: true });
  };

  private onBlur = () => {
    const { activated } = this.state;

    if (
      this.inputElement.value.length === 0 &&
      activated &&
      !this.props.isError
    ) {
      this.setState({ activated: false });
    }
  };

  public render() {
    const { color, style, onKeyPress, isError, inputType } = this.props;
    const { activated } = this.state;

    return (
      <Root onClick={this.onClick} style={style}>
        <Container>
          <InputContainer>
            <Input
              innerRef={(r: any) => (this.inputElement = r)}
              color={color}
              onFocus={this.onFocus}
              onBlur={this.onBlur}
              onKeyPress={onKeyPress}
              type={inputType}
            />
          </InputContainer>
          <HoverBorder className="hover-border" />
          <Indicator color={color} activated={activated || isError} />
        </Container>
      </Root>
    );
  }
}
