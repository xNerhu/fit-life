import * as React from 'react';

import {
  Root,
  Container,
  HoverBorder,
  Indicator,
  Label,
  Input,
  InputContainer,
  Textarea,
} from './styles';

export type KeyboardEvent = (
  e?: React.KeyboardEvent<HTMLInputElement | HTMLTextAreaElement>,
) => void;

export interface IProps {
  color?: string;
  style?: any;
  onKeyPress?: KeyboardEvent;
  isError?: boolean;
  inputType?: string;
  textArea?: boolean;
  label?: string;
  inline?: boolean;
  spellCheck?: boolean;
}

export interface IState {
  activated: boolean;
}

export default class Textfield extends React.Component<IProps, IState> {
  public static defaultProps = {
    color: '#2196F3',
    inputType: 'text',
    textArea: false,
    label: 'Label',
    inline: false,
    spellCheck: true,
  };

  public state: IState = {
    activated: false,
  };

  public inputElement: HTMLInputElement | HTMLTextAreaElement;

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
    const {
      color,
      style,
      onKeyPress,
      isError,
      inputType,
      label,
      inline,
      textArea,
      spellCheck,
    } = this.props;
    const { activated } = this.state;

    return (
      <React.Fragment>
        {!inline && <div style={{ clear: 'both' }} />}
        <Root
          className="material-textfield"
          onClick={this.onClick}
          inline={inline}
          style={style}
        >
          <Container textArea={textArea}>
            <InputContainer>
              {(!textArea && (
                <Input
                  innerRef={(r: any) => (this.inputElement = r)}
                  color={color}
                  onFocus={this.onFocus}
                  onBlur={this.onBlur}
                  onKeyPress={onKeyPress}
                  type={inputType}
                  spellCheck={spellCheck}
                />
              )) || (
                <Textarea
                  innerRef={(r: any) => (this.inputElement = r)}
                  color={color}
                  onFocus={this.onFocus}
                  onBlur={this.onBlur}
                  onKeyPress={onKeyPress}
                  spellCheck={false}
                />
              )}

              <Label color={color} activated={activated}>
                {label}
              </Label>
            </InputContainer>
            <HoverBorder className="hover-border" />
            <Indicator color={color} activated={activated || isError} />
          </Container>
        </Root>
      </React.Fragment>
    );
  }
}
