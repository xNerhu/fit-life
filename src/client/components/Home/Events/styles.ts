import styled from 'styled-components';

import { shadows } from '@client/mixins';

export const EventItemRoot = styled.a`
  width: 100%;
  max-width: 512px;
  height: 88px;
  display: flex;
  align-items: center;
  border-radius: 4px;
  background-color: #fff;
  padding: 16px 8px;
  margin: 16px auto 0 auto;
  cursor: pointer;
  text-decoration: none;
  box-shadow: ${shadows(2)};
  will-change: transform;
  transition: 0.15s ease-out transform;
  -webkit-backface-visibility: hidden;

  &:hover {
    z-index: 10;
    transform: scale(1.1);
  }

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
  border-right: 1px solid rgba(0, 0, 0, 0.12);
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
  color: rgba(0, 0, 0, 0.54);
`;

export const Container = styled.div`
  padding: 0px 32px;
`;

export const Title = styled.div`
  color: #000;
  font-size: 18px;
`;

export const Subtitle = styled.div`
  margin-top: 2px;
  color: rgba(0, 0, 0, 0.54);
  font-size: 14px;
`;
