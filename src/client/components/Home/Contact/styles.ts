import styled from 'styled-components';

import { transparency, MAX_SECTION_WIDTH } from '@client/constants';
import { robotoMedium, shadows } from '@client/mixins';

export const Root = styled.div`
  display: flex;
  user-select: text;
  flex-direction: row;

  @media (max-width: ${MAX_SECTION_WIDTH}px) {
    flex-direction: column;
  }
`;

export const Form = styled.form`
  width: 50%;
  padding: 32px;
  display: flex;
  flex-direction: column;
  justify-items: center;
  border-radius: 4px;
  overflow: hidden;
  background-color: #fff;
  box-sizing: content-box;
  box-shadow: ${shadows(3)};

  & .material-textfield {
    margin-top: 32px;
  }

  @media (max-width: ${MAX_SECTION_WIDTH}px) {
    width: 100%;
    margin: 0 auto;
    box-sizing: border-box;
  }
`;

export const InfoContainer = styled.div`
  margin-left: 48px;
  padding: 32px;
  border-radius: 4px;
  overflow: hidden;
  background-color: #fff;
  box-sizing: content-box;
  box-shadow: ${shadows(3)};

  @media (max-width: ${MAX_SECTION_WIDTH}px) {
    margin: 32px auto;
  }
`;

export const Label = styled.div`
  width: 96px;
  display: inline-block;
  font-size: 17px;
  margin-right: 16px;
  user-select: none;
  color: rgba(0, 0, 0, ${transparency.light.primaryText});
`;

export const Value = styled.div`
  min-width: calc(100% - 112px);
  display: inline-block;
  text-align: right;
  font-size: 17px;
  color: rgba(0, 0, 0, ${transparency.light.primaryText});

  ${robotoMedium()};
`;
