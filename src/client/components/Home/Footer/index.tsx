import * as React from 'react';

import {
  Root,
  LinksContainer,
  Container,
  Column,
  ColumnTitle,
  ColumnItems,
  ColumnItem,
} from './styles';

export default class Footer extends React.Component {
  render() {
    return (
      <Root>
        <LinksContainer />
        <Container>
          <Column>
            <ColumnTitle>PROJEKT FIT LIFE</ColumnTitle>
            <ColumnItems>
              <ColumnItem>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero
                quia nam ipsam repudiandae rem eius labore delectus rerum,
                adipisci incidunt ab aliquid illum dolore hic, totam dolores
                voluptatibus quisquam sint!
              </ColumnItem>
            </ColumnItems>
          </Column>
          <Column>
            <ColumnTitle>PROJEKTY</ColumnTitle>
            <ColumnItems>
              <ColumnItem>STYL ŻYCIA</ColumnItem>
              <ColumnItem>UMYSŁ</ColumnItem>
            </ColumnItems>
          </Column>
          <Column>
            <ColumnTitle>KONTAKT</ColumnTitle>
            <ColumnItems>
              <ColumnItem>STYL ŻYCIA</ColumnItem>
              <ColumnItem>UMYSŁ</ColumnItem>
            </ColumnItems>
          </Column>
        </Container>
      </Root>
    );
  }
}
