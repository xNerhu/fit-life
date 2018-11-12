import * as React from 'react';

import Section from '@client/components/Section';
import { Triangle } from '../styles';
import { Background } from './styles';

export default class About extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Background style={{ padding: '64px 0px', backgroundColor: '#eee' }}>
          <Section
            title="O projekcie"
            dividerColor="#000"
            style={{ marginTop: 0, color: '#000' }}
            horizontal
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo
            rem veniam voluptates, rerum quod eum molestiae dolorem perspiciatis
            repudiandae, et eligendi voluptatum saepe nisi maxime magnam.
            Numquam cumque veniam placeat.
          </Section>
        </Background>
        <Triangle color="#eee" />
      </React.Fragment>
    );
  }
}
