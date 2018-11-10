import styled, { css } from 'styled-components';

import { robotoMedium } from '@client/mixins';
import { transparency } from '@client/constants';

export const Root = styled.div`
  width: 100%;
  position: relative;

  ${({ inline }: { inline: boolean }) => css`
    display: ${inline ? 'inline-flex' : 'block'};
  `};
`;

export const Container = styled.div`
  width: 100%;
  position: relative;
  cursor: pointer;
  background-color: rgba(0, 0, 0, 0.06);
  user-select: none;
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;

  &:hover {
    & .hover-border {
      opacity: 1;
    }
  }

  ${({ textArea }: { textArea: boolean }) => css`
    height: ${textArea ? 'unset' : '56px'};
  `};
`;

export const HoverBorder = styled.div`
  width: 100%;
  height: 1px;
  position: absolute;
  bottom: 0;
  opacity: 0;
  pointer-events: none;
  background-color: rgba(0, 0, 0, 0.39);
  transition: 0.15s opacity;
`;

export const Label = styled.div`
  position: absolute;
  left: 12px;
  will-change: font-size, color, top;
  transition-property: font-size, color, top;
  transition-duration: 0.15s;
  transition-timing-function: ease-out;

  ${robotoMedium()};

  ${({ activated, color }: { activated: boolean; color: string }) => css`
    font-size: ${activated ? 12 : 16}px;
    top: ${activated ? '10px' : '18px'};
    color: ${activated
      ? color
      : `rgba(0, 0, 0, ${transparency.light.secondaryText})`};
  `};
`;

export const InputContainer = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  display: flex;
  overflow: hidden;
  align-items: center;
`;

const inputStyle = css`
  width: 100%;
  height: calc(100% - 16px);
  border: none;
  outline: none;
  margin: 0;
  padding-top: 16px;
  padding-left: 12px;
  padding-right: 12px;
  -webkit-text-fill-color: transparent;
  background-color: transparent;
  font-size: 16px;
  cursor: pointer;
  text-shadow: 0px 0px 0px rgba(0, 0, 0, 0.89);

  ${robotoMedium()};

  ${({ color }: { color: string }) => css`
    color: ${color};
  `};

  &:focus {
    cursor: text;
  }
`;

export const Input = styled.input`
  ${inputStyle};
`;

export const Textarea = styled.textarea`
  ${inputStyle};

  min-height: 128px;
  resize: vertical;
  margin-top: 32px;
  padding-top: 0px;
`;

export interface IndicatorProps {
  color: string;
  activated: boolean;
}

export const Indicator = styled.div`
  height: 2px;
  position: absolute;
  left: 0;
  right: 0;
  margin: 0 auto;
  bottom: -1px;
  will-change: width;
  transition: 0.15s ease-out;

  ${({ color, activated }: IndicatorProps) => css`
    width: ${activated ? 100 : 0}%;
    background-color: ${color};
  `};
`;
