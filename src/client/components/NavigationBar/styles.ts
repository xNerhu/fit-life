import styled, { css } from 'styled-components';
import { Link as RouteLink } from 'react-router-dom';

import { shadows, centerImage, edoRegular, centerBoth } from '@client/mixins';
import { CONTENT_WIDTH, icons } from '@client/constants';

export interface Props {
  activated: boolean;
  toggled: boolean;
}

export const Root = styled.nav`
  width: 100%;
  position: fixed;
  top: 0;
  z-index: 100;
  padding: 8px 0px;
  overflow: hidden;
  will-change: background-color;
  transition: 0.15s background-color;

  ${({ activated, toggled }: Props) => css`
    max-height: ${toggled ? '100%' : '64px'};
    background-color: ${activated || toggled ? '#fff' : 'unset'};
    box-shadow: ${activated || toggled ? shadows(2) : 'unset'};

    a {
      color: ${activated || toggled ? '#000' : '#fff'};
    }

    a:hover {
      background-color: ${activated || toggled
        ? 'rgba(0, 0, 0, 0.04)'
        : 'rgba(255, 255, 255, 0.24)'};
    }
  `};

  @media (min-width: ${CONTENT_WIDTH + 1}px) {
    display: flex;
    align-items: center;
  }
`;

export const ItemsContainer = styled.div`
  margin-left: auto;

  @media (max-width: ${CONTENT_WIDTH}px) {
    width: 100%;
    padding: 8px 0 0 0;
  }
`;

export const MenuIcon = styled.div`
  width: 64px;
  height: 64px;
  cursor: pointer;
  position: absolute;
  display: none;
  top: 0;
  right: 8px;
  background-image: url(${icons.menu});
  ${centerImage('24px', 'auto')};

  &::before {
    content: '';
    display: block;
    position: absolute;
    width: 48px;
    height: 48px;
    background-color: #000;
    border-radius: 100%;
    opacity: 0;
    pointer-events: none;
    will-change: opacity;
    transition: 0.2s opacity;
    ${centerBoth()};
  }

  &:hover::before {
    opacity: 0.12;
  }

  ${({ activated, toggled }: Props) => css`
    filter: ${activated || toggled ? 'unset' : 'invert(100%)'};
  `};

  @media (max-width: ${CONTENT_WIDTH}px) {
    display: block;
  }
`;

export const LogoContainer = styled.div`
  margin-left: 16px;
  display: flex;
  align-items: center;
`;

export const Logo = styled.div`
  width: 48px;
  height: 48px;
  background-image: url(${icons.logo});
  ${centerImage('100%', 'auto')};
`;

export const Title = styled.div`
  margin-left: 8px;
  font-size: 14px;
  color: #c3e63d;
  ${edoRegular()};
`;

export const Link = styled(RouteLink)`
  width: auto;
  padding: 12px 12px;
  margin-right: 8px;
  font-size: 17px;
  border-radius: 4px;
  overflow: hidden;
  cursor: pointer;
  will-change: background-color;
  transition: 0.15s background-color;

  &:last-child {
    margin-right: 24px;
  }

  @media (max-width: ${CONTENT_WIDTH}px) {
    width: 100%;
    display: block;
    padding-left: 24px;
  }
`;
