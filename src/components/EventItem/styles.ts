import styled from 'styled-components';

import { shadows } from '~/mixins';
import { transparency } from '~/constants';

export const Root = styled.a`
  width: 100%;
  height: 88px;
  display: flex;
  align-items: center;
  border-radius: 4px;
  background-color: #fff;
  padding: 16px 8px;
  margin-top: 16px;
  text-decoration: none;
  box-shadow: ${shadows(2)};

  &:first-child {
    margin-top: 0px;
  }
`;

export const DateInfo = styled.div`
  width: 88px;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding-right: 8px;
  border-right: 1px solid rgba(0, 0, 0, ${transparency.light.dividers});
`;

export const Month = styled.div`
  font-size: 14px;
  color: #2196f3;
`;

export const Day = styled.div`
  font-size: 20px;
  color: #000;
`;

export const Year = styled.div`
  font-size: 10px;
  color: rgba(0, 0, 0, ${transparency.light.secondaryText});
`;

export const Container = styled.div`
  margin-left: 32px;
`;

export const Title = styled.div`
  color: #000;
  font-size: 18px;
`;

export const Subtitle = styled.div`
  margin-top: 2px;
  color: rgba(0, 0, 0, ${transparency.light.secondaryText});
  font-size: 14px;
`;
