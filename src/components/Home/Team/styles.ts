import styled from 'styled-components';

import { MAX_SECTION_WIDTH } from '~/constants';

export const Root = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: ${MAX_SECTION_WIDTH}px) {
    flex-direction: column;
  }
`;
