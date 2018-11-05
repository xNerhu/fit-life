import * as React from 'react';

import Section from '~/components/Section';

export default class About extends React.Component {
  render() {
    const style = {
      paddingBottom: 64,
      borderBottom: '1px solid rgba(0, 0, 0, 0.08)',
    };

    return (
      <Section title="O projekcie" style={style} horizontal>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo rem
        veniam voluptates, rerum quod eum molestiae dolorem perspiciatis
        repudiandae, et eligendi voluptatum saepe nisi maxime magnam. Numquam
        cumque veniam placeat.
      </Section>
    );
  }
}
