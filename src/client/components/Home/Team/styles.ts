import styled from 'styled-components';

import { MAX_SECTION_WIDTH } from '@client/constants';

export const Row = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;

  @media (max-width: ${MAX_SECTION_WIDTH}px) {
    flex-direction: column;
  }
`;
