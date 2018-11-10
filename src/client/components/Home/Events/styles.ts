import styled from 'styled-components';

import { MAX_SECTION_WIDTH } from '@client/constants';

export const Container = styled.div`
  width: 100%;
  max-width: 512px;
  margin-left: auto;

  @media (max-width: ${MAX_SECTION_WIDTH}px) {
    margin-right: auto;
  }
`;

export const EventsContainer = styled.div`
  margin-top: 0px; /*16px;*/
`;
