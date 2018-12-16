import styled from 'styled-components';

import { images } from '@client/constants';
import { backImage, coverImage } from '@client/mixins';

export default styled.div`
  width: 100%;
  height: 256px;
  position: relative;

  &::before {
    filter: brightness(50%);
    ${backImage(images.food)};
  }

  ${coverImage()};
`;
