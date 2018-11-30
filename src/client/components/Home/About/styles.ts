import styled from 'styled-components';

import { robotoMedium } from '@client/mixins';

export const Background = styled.div`
  width: 100%;
  background-color: #eee;
`;

export const Bold = styled.span`
  ${robotoMedium()};
`;

export const Link = styled.a`
  color: #ffc107;
  text-decoration: underline;
  ${robotoMedium()};

  &:hover {
    color: #ffa000;
  }
`;
