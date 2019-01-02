import styled from 'styled-components';

import { CONTENT_WIDTH, PRIMARY_COLOR } from '@shared/constants';
import { robotoMedium, centerHorizontal, robotoRegular } from '@shared/mixins';

export const Root = styled.section`
  width: 100vw;
  padding: 48px 0px;
`;

export const Title = styled.div`
  height: fit-content;
  position: relative;
  text-align: center;
  padding-left: 16px;
  padding-right: 16px;
  padding-bottom: 16px;
  font-size: 34px;
  color: rgba(0, 0, 0, 0.89);
  ${robotoMedium()};

  &::before {
    content: '';
    display: block;
    width: 96px;
    height: 2px;
    bottom: 0px;
    position: absolute;
    background-color: ${PRIMARY_COLOR};
    ${centerHorizontal()};
  }
`;

export const Container = styled.div`
  width: 100%;
  max-width: ${CONTENT_WIDTH}px;
  margin: 24px auto 0 auto;
  font-size: 18px;
  color: rgba(0, 0, 0, 0.89);
  ${robotoRegular()};

  @media (max-width: ${CONTENT_WIDTH}px) {
    padding: 0px 32px;
  }
`;

export const Divider = styled.div`
  width: 100%;
  height: 1px;
  max-width: ${CONTENT_WIDTH}px;
  margin: 0 auto;
  background-color: rgba(0, 0, 0, 0.12);
`;

export const Bold = styled.span`
  ${robotoMedium()};
`;
