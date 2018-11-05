import styled from 'styled-components';

import { coverImage, edoRegular, h5 } from '~/mixins';
import { images } from '~/constants';

export const Root = styled.div`
  width: 100%;
  min-height: 75vh;
  position: relative;
  overflow: hidden;
  display: flex;
  justify-content: center;
  flex-direction: column;

  &::before {
    content: '';
    display: block;
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    z-index: -1;
    transform: scale(1.1);
    filter: blur(16px);
    background-position: center;
    background-attachment: fixed;
    background-image: url(${images.header});

    ${coverImage()};
  }
`;

export const Container = styled.div`
  position: relative;
  text-align: center;
`;

export const Title = styled.div`
  font-size: 60px;
  color: #fff;

  ${edoRegular()};
`;

export const Subtitle = styled.div`
  color: rgba(255, 255, 255, 0.8);
  margin-top: 12px;

  ${h5()};
`;
