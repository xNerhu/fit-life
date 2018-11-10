import styled from 'styled-components';

import { centerImage } from '@client/mixins';
import { images, PRIMARY_COLOR } from '@client/constants';

export const Root = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 32px 0px;
  background-color: ${PRIMARY_COLOR};
`;

export const Container = styled.div`
  margin-top: 24px;
  display: flex;
  justify-content: center;
`;

export const Logo = styled.div`
  width: 96px;
  height: 96px;
  filter: brightness(0) invert(0);
  opacity: 0.7;
  cursor: pointer;
  will-change: opacity;
  transition: 0.15s opacity;
  background-image: url(${images.logo});

  ${centerImage('96px', 'auto')};

  &:hover {
    opacity: 1;
  }
`;
