import styled from 'styled-components';

import { images } from '~/constants';
import { edoRegular, h5 } from '~/mixins';

const Root = styled.div`
  width: 100%;
  min-height: 75vh;
  position: relative;
  overflow: hidden;
  display: flex;
  align-items: center;
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
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    transform: scale(1.1);
    filter: blur(16px);
    background-image: url(${images.header});
  }
`;

const Title = styled.div`
  font-size: 60px;
  color: #fff;

  ${edoRegular()};
`;

const Subtitle = styled.div`
  color: rgba(255, 255, 255, 0.8);
  margin-top: 12px;

  ${h5()};
`;

export const Start = { Root, Title, Subtitle };
