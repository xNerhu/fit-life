import * as React from 'react';

import { carouselItems } from '~/constants';
import Section from '~/components/Section';
import Carousel from '~/components/Carousel';

export default class Problem extends React.Component {
  render() {
    return (
      <Section title="O problemie i sposobach jego ograniczenia">
        <Carousel items={carouselItems} />
      </Section>
    );
  }
}
