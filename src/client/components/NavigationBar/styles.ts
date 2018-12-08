import styled, { css } from 'styled-components';

import {
  shadows,
  centerImage,
  edoRegular,
  centerVertical,
  robotoMedium,
} from '@client/mixins';
import { images } from '@client/constants';

export const Root = styled.nav`
  width: 100vw;
  height: 64px;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1000;
  display: flex;
  align-items: center;

  ${({ activated }: { activated: boolean }) => css`
    background-color: ${activated ? '#fff' : 'unset'};
    box-shadow: ${activated ? shadows(2) : 'unset'};
  `};
`;

export const Brand = styled.div`
  margin-left: 16px;
  display: flex;
  align-items: center;

  ${({ activated }: { activated: boolean }) => css`
    opacity: ${activated ? 1 : 0};
  `};
`;

export const Logo = styled.div`
  width: 48px;
  height: 48px;
  background-image: url(${images.logo});

  ${centerImage('100%', 'auto')};
`;

export const Title = styled.div`
  margin-left: 8px;
  font-size: 14px;
  color: #c3e63d;

  ${edoRegular()};
`;

export const Container = styled.div`
  height: 100%;
  margin-left: auto;
  padding-right: 24px;
  white-space: nowrap;
  overflow-x: auto;

  a {
    width: auto;
    display: inline-flex;
    padding: 12px 12px;
    margin-right: 8px;
    font-size: 17px;
    border-radius: 4px;
    overflow: hidden;
    cursor: pointer;
    position: relative;
    will-change: background-color;
    transition: 0.15s background-color;

    ${centerVertical()};
  }

  ${({ activated }: { activated: boolean }) => css`
    a {
      color: ${activated ? '#000' : '#fff'};
    }

    a:hover {
      background-color: ${activated
        ? 'rgba(0, 0, 0, 0.04)'
        : 'rgba(255, 255, 255, 0.24)'};
    }
  `};

  &::-webkit-scrollbar {
    height: 4px;
  }

  &::-webkit-scrollbar-button {
    width: 0px;
    height: 0px;
  }

  &::-webkit-scrollbar-thumb {
    background: rgba(0, 0, 0, 0.38);
    border: 0px none #ffffff;
    border-radius: 0px;
  }

  &::-webkit-scrollbar-thumb:hover {
    background: rgba(0, 0, 0, 0.54);
  }

  &::-webkit-scrollbar-corner {
    background: transparent;
  }
`;
