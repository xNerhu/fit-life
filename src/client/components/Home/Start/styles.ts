import styled from 'styled-components';

import { backImage, edoRegular } from '@client/mixins';
import { images, CONTENT_WIDTH } from '@client/constants';

export const Root = styled.section`
  width: 100%;
  height: calc(100vh - 128px);
  min-height: 600px;
  position: relative;
  overflow: hidden;
  display: flex;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.12);
  color: #fff;

  &::before {
    filter: brightness(50%);
    transform: scale(1.3);
    ${backImage(images.header, 'center left')};
  }

  @media (max-width: ${CONTENT_WIDTH}px) {
    &::before {
      transform: scale(1.1);
      background-position: center;
    }
  }
`;

export const Content = styled.div`
  width: 100%;
  max-width: ${CONTENT_WIDTH}px;
  margin: 0 auto;

  @media (max-width: ${CONTENT_WIDTH}px) {
    text-align: center;
    padding: 0px 16px;
  }
`;

export const Title = styled.div`
  font-size: 60px;
  ${edoRegular()};
`;

export const Subtitle = styled.div`
  margin-top: 16px;
  font-size: 24px;
`;

export const Triangle = styled.div`
  width: 0;
  height: 0;
  position: absolute;
  bottom: 0;
  right: 0;
  border-style: solid;
  border-width: 0 0 128px 2000px;
  border-color: transparent transparent #fff transparent;
`;
