import styled from 'styled-components';

import { robotoMedium, centerHorizontal } from '~/mixins';
import { PRIMARY_COLOR } from '~/constants';

const Root = styled.footer`
  width: 100vw;
  margin-top: 64px;
  background-color: #424242;
  color: #fff;
`;

const Container = styled.div`
  width: 100%;
  max-width: 1024px;
  height: 196px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
`;

const Column = styled.div`
  width: 25%;
  padding: 8px;
`;

const Title = styled.div`
  font-size: 15px;
  position: relative;
  padding-bottom: 16px;

  ${robotoMedium()};

  &::before {
    content: '';
    display: block;
    width: 128px;
    height: 2px;
    bottom: 0px;
    position: absolute;
    background-color: rgba(255, 255, 255, 0.08);
  }
`;

export const Footer = { Root, Container, Column, Title };
