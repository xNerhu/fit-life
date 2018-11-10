import styled from 'styled-components';

import { PRIMARY_COLOR, images, MAX_SECTION_WIDTH } from '@client/constants';
import { centerImage, robotoMedium } from '@client/mixins';

export const Root = styled.footer`
  width: 100vw;
  margin-top: 64px;
  background-color: #424242;
`;

export const LinksContainer = styled.div`
  width: 100%;
  height: 56px;
  background-color: ${PRIMARY_COLOR};
`;

export const Container = styled.div`
  width: 100%;
  max-width: ${MAX_SECTION_WIDTH}px;
  min-height: 96px;
  margin: 0 auto;
  display: flex;
  padding: 32px 0px;
`;

export const Column = styled.div`
  height: 100%;
  flex-grow: 1;
  flex-basis: 0;
  padding: 0px 32px;
`;

export const ColumnTitle = styled.div`
  height: fit-content;
  position: relative;
  padding-bottom: 16px;
  font-size: 16px;
  color: #fff;

  ${robotoMedium()};

  &::before {
    content: '';
    display: block;
    width: 96px;
    height: 2px;
    bottom: 0px;
    position: absolute;
    background-color: #c3e63d;
  }
`;

export const ColumnItems = styled.div`
  margin-top: 32px;
`;

export const ColumnItem = styled.div`
  margin-top: 8px;
  font-size: 14px;
  color: rgba(255, 255, 255, 0.7);
`;

export const Logo = styled.div`
  width: 128px;
  height: 128px;
  background-image: url(${images.logo2});

  ${centerImage('100%', 'auto')};
`;
