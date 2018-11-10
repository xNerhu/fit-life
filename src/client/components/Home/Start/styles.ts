import styled from 'styled-components';

import {
  coverImage,
  edoRegular,
  h5,
  centerImage,
  shadows,
} from '@client/mixins';
import { images } from '@client/constants';

export const Root = styled.div`
  width: 100%;
  height: 75vh;
  min-height: 600px;
  position: relative;
  overflow: hidden;
  display: flex;
  align-items: center;

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
    filter: blur(14px);
    background-position: center;
    background-attachment: fixed;
    background-image: url(${images.header});

    ${coverImage()};
  }

  & .material-button {
    position: absolute;
    left: 50%;
    bottom: -96px;
    transform: translateX(-50%);
  }

  @media (max-height: 600px) {
    & .material-button {
      top: 48px;
      bottom: 0px;
      left: 0px;
      transform: unset;
      position: relative;
    }
  }
`;

export const Container = styled.div`
  width: 100%;
  position: relative;
  text-align: center;
`;

export const Logo = styled.div`
  width: 128px;
  height: 128px;
  border-radius: 100%;
  background-color: #fff;
  background-image: url(${images.logo});
  margin: 0 auto;
  box-shadow: ${shadows(5)};

  ${centerImage('96px', 'auto')};
`;

export const Title = styled.div`
  margin-top: 32px;
  font-size: 60px;
  color: #fff;

  ${edoRegular()};

  @media (max-width: 425px) {
    font-size: 48px;
  }
`;

export const Subtitle = styled.div`
  color: rgba(255, 255, 255, 0.8);
  margin-top: 12px;

  ${h5()};

  @media (max-width: 425px) {
    font-size: 20px;
  }
`;
