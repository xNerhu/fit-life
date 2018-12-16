import * as React from 'react';

import Section from '@client/components/Section';
import { icons } from '@client/constants';
import { Partner, Root } from './styles';

export default class Partnership extends React.Component {
  render() {
    return (
      <Section
        id="partnership"
        title="Współpraca"
        style={{ backgroundColor: '#fafafa', paddingTop: 8 }}
      >
        <Root>
          <Partner src={icons.prezydentOpole} draggable={false} />
          <Partner
            src={icons.bgzbnp}
            draggable={false}
            style={{ height: 164 }}
          />
        </Root>
      </Section>
    );
  }
}
