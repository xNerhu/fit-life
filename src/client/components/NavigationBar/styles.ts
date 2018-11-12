import styled from 'styled-components';

import { shadows, centerImage, edoRegular } from '@client/mixins';
import { images } from '@client/constants';

export const Root = styled.nav`
  width: 100vw;
  height: 56px;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1000;
  background-color: #fff;
  display: flex;
  align-items: center;
  box-shadow: ${shadows(2)};
`;

export const Logo = styled.div`
  width: 48px;
  height: 48px;
  background-image: url(${images.logo});
  margin-left: 16px;

  ${centerImage('100%', 'auto')};
`;

export const Title = styled.div`
  margin-left: 8px;
  font-size: 14px;
  color: #c3e63d;

  ${edoRegular()};
`;

export const Container = styled.div`
  margin-left: auto;
  padding-right: 24px;
  width: auto;
  display: flex;
`;

export const Item = styled.div`
  width: auto;
  padding: 12px 12px;
  margin-right: 8px;
  font-size: 17px;
  border-radius: 4px;
  overflow: hidden;
  cursor: pointer;

  &:hover {
    background-color: rgba(0, 0, 0, 0.04);
  }
`;
