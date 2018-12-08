import styled from 'styled-components';

import { coverImage, backImage } from '@client/mixins';
import { images } from '@client/constants';

export const Root = styled.div`
  width: 100%;
  height: 288px;
  position: relative;

  &::before {
    filter: brightness(50%);
    ${backImage(images.food)};
  }

  ${coverImage()};
`;
