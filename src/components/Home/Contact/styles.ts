import styled from 'styled-components';

import { transparency } from '~/constants';
import { robotoMedium } from '~/mixins';

export const Root = styled.div`
  display: flex;
  user-select: text;
  flex-direction: row;

  @media (max-width: 1024px) {
    flex-direction: column;
  }
`;

export const Form = styled.form`
  width: 75%;
  padding: 32px;
  box-sizing: content-box;
  display: flex;
  flex-direction: column;
  justify-items: center;
  border-radius: 4px;
  background-color: #fff;
  border: 1px solid rgba(0, 0, 0, ${transparency.light.dividers});

  & .material-textfield {
    margin-top: 32px;
  }

  @media (max-width: 1024px) {
    width: 100%;
    margin: 0 auto;
    box-sizing: border-box;
  }
`;

export const InfoContainer = styled.div`
  margin-left: 48px;

  @media (max-width: 1024px) {
    margin: 32px auto;
  }
`;

export const ContactLabel = styled.span`
  font-size: 17px;
  margin-right: 16px;
  color: rgba(0, 0, 0, ${transparency.light.primaryText});

  ${robotoMedium()};
`;

export const ContactText = styled.span`
  font-size: 17px;
`;
