import styled from 'styled-components';

import { images, transparency } from '~/constants';
import { edoRegular, h5, coverImage, robotoMedium } from '~/mixins';

export const Start = styled.div`
  width: 100%;
  min-height: 75vh;
  position: relative;
  overflow: hidden;
  display: flex;
  justify-content: center;
  flex-direction: column;

  &::before {
    content: '';
    display: block;
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    z-index: -1;
    transform: scale(1.1);
    filter: blur(16px);
    background-position: center;
    background-attachment: fixed;
    background-image: url(${images.header});

    ${coverImage()};
  }
`;

export const StartContainer = styled.div`
  position: relative;
  text-align: center;
`;

export const StartTitle = styled.div`
  font-size: 60px;
  color: #fff;

  ${edoRegular()};
`;

export const StartSubtitle = styled.div`
  color: rgba(255, 255, 255, 0.8);
  margin-top: 12px;

  ${h5()};
`;

export const Organizators = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 8px;

  @media (max-width: 1024px) {
    flex-direction: column;
  }
`;

export const Contact = styled.div`
  display: flex;
  user-select: text;
  flex-direction: row;

  @media (max-width: 1024px) {
    flex-direction: column;
  }
`;

export const ContactForm = styled.form`
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

export const ContactInfo = styled.div`
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
