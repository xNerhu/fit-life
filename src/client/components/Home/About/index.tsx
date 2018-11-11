import * as React from 'react';

import Section from '@client/components/Section';
import { Triangle, LimeBackground } from '../styles';
import { PRIMARY_COLOR } from '@client/constants';

export default class About extends React.Component {
  render() {
    return (
      <React.Fragment>
        <LimeBackground style={{ padding: '64px 0px' }}>
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
        </LimeBackground>
        <Triangle color={PRIMARY_COLOR} />
      </React.Fragment>
    );
  }
}
