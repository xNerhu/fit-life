import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  max-width: 512px;
  margin-left: auto;

  @media (max-width: 1024px) {
    margin-right: auto;
  }
`;

export const EventsContainer = styled.div`
  margin-top: 0px; /*16px;*/
`;
