import styled from 'styled-components';

export const Root = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 1024px) {
    flex-direction: column;
  }
`;
