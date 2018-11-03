import styled from 'styled-components';

import { images, transparency } from '~/constants';
import { edoRegular, h5, coverImage, robotoRegular } from '~/mixins';

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

export const Contact = styled.div`
  display: flex;
  flex-direction: row;
  margin-bottom: 512px;
`;

export const ContactForm = styled.form`
  width: 75%;
  padding: 32px;
  border: 1px solid rgba(0, 0, 0, ${transparency.light.dividers});
  border-radius: 4px;
  box-sizing: content-box;

  & .material-textfield {
    margin-top: 32px;
  }
`;

export const ContactInfo = styled.form`
  width: 25%;
  display: none;
`;
