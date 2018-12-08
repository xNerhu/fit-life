import * as React from 'react';

import Section from '@client/components/Section';
import { Divider } from '@client/components/Section/styles';

export default class Problem extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Divider />
        <Section id="problem" title="O problemie i sposobach jego ograniczenia">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque soluta
          dolores tenetur laboriosam, ullam itaque deleniti eligendi autem id
          earum! Quisquam vel dolorem praesentium, deleniti nesciunt corrupti
          non ad laborum?
        </Section>
      </React.Fragment>
    );
  }
}
