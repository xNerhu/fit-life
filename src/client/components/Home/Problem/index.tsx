import * as React from 'react';

import { carouselItems } from '@client/content';
import Section from '@client/components/Section';
import Carousel from '@client/components/Carousel';

export default class Problem extends React.Component {
  render() {
    return (
      <Section id="problem" title="O problemie i sposobach jego ograniczenia">
        <Carousel items={carouselItems} />
      </Section>
    );
  }
}
