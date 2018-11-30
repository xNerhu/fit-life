import * as React from 'react';

import { images } from '@client/constants';
import { Title } from '@client/components/Section/styles';
import { Root, Container, Logo } from './styles';

export default class Partnership extends React.Component {
  render() {
    return (
      <Root id="partnership">
        <Title color="#000" dividerColor="#000" horizontal={false}>
          Współpraca
        </Title>
        <Container>
          <Logo src={images.bgzbnp} draggable={false} />
        </Container>
      </Root>
    );
  }
}
