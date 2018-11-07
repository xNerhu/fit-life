import styled, { css } from 'styled-components';

import { button, shadows } from '~/mixins';

export interface StyledButtonProps {
  background: string;
  foreground: string;
  borderColor: string;
  variant: 'contained' | 'outlined' | 'text';
}

export const Root = styled.div`
  min-width: 64px;
  height: 36px;
  border-radius: 4px;
  align-items: center;
  justify-content: center;
  position: relative;
  overflow: hidden;
  white-space: nowrap;
  display: inline-flex;
  overflow: hidden;
  position: relative;
  cursor: pointer;
  user-select: none;
  transition: 0.2s box-shadow;

  ${button()};

  ${({
    background,
    foreground,
    borderColor,
    variant,
  }: StyledButtonProps) => css`
    color: ${foreground};
    background-color: ${variant === 'contained' ? background : 'transparent'};
    box-shadow: ${variant === 'contained' ? shadows(2) : 'unset'};
    padding: ${variant !== 'text' ? '0px 16px 0px 16px' : '0px 8px 0px 8px'};
    border: ${variant === 'outlined' ? `1px solid ${borderColor}` : 'unset'};

    &::before {
      content: '';
      width: calc(100% + 2px);
      height: 100%;
      top: 0;
      left: -1px;
      position: absolute;
      background-color: ${foreground};
      opacity: 0;
      will-change: opacity;
      transition: 0.2s opacity;
      transform: translateZ(0);
      -webkit-backface-visibility: hidden;
      -webkit-transform: translateZ(0) scale(1, 1);
    }

    &:hover::before {
      opacity: 0.12;
    }
  `};
`;
