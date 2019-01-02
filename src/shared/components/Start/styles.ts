import styled from 'styled-components';

import { backImage, edoRegular, gidoleRegular } from '@shared/mixins';
import { images, CONTENT_WIDTH } from '@shared/constants';

export const Root = styled.section`
  width: 100%;
  height: 100vh;
  min-height: 600px;
  position: relative;
  overflow: hidden;
  display: flex;
  align-items: center;
  color: #fff;

  &::before {
    filter: brightness(50%);
    ${backImage(images.header)};
  }

  @media (max-width: ${CONTENT_WIDTH}px) {
    &::before {
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

  @media (max-width: ${CONTENT_WIDTH}px) {
    font-size: 34px;
  }
`;

export const Subtitle = styled.div`
  margin-top: 16px;
  font-size: 24px;
  ${gidoleRegular()};

  @media (max-width: ${CONTENT_WIDTH}px) {
    font-size: 20px;
  }
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
