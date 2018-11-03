import * as React from 'react';

import { PRIMARY_COLOR, carouselItems } from '~/constants';
import Button from '../Button';
import Section from '../Section';
import Carousel from '../Carousel';
import { Start, StartContainer, StartTitle, StartSubtitle } from './styles';
import Textfield from '../Textfield';

export default class Home extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Start>
          <StartContainer>
            <StartTitle>Projekt Fit Life</StartTitle>
            <StartSubtitle>Zmień swoje życie na lepsze</StartSubtitle>
            <Button
              variant="outlined"
              borderColor={PRIMARY_COLOR}
              foreground={PRIMARY_COLOR}
              text="WEŹ UDZIAŁ"
              style={{
                position: 'absolute',
                left: '50%',
                bottom: '-96px',
                transform: 'translateX(-50%)',
              }}
            />
          </StartContainer>
        </Start>
        <Section
          title="O projekcie"
          style={{
            paddingBottom: 64,
            borderBottom: '1px solid rgba(0, 0, 0, 0.08)',
          }}
          horizontal
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo rem
          veniam voluptates, rerum quod eum molestiae dolorem perspiciatis
          repudiandae, et eligendi voluptatum saepe nisi maxime magnam. Numquam
          cumque veniam placeat.
        </Section>
        <Section
          title="O problemie i sposobach jego ograniczenia"
          style={{ paddingBottom: 32 }}
        >
          <Carousel items={carouselItems} style={{ marginTop: 16 }} />
        </Section>
        <Section title="Kontakt">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur
          dolor accusantium, ex nisi doloremque quae, temporibus, inventore illo
          natus labore molestias totam magni voluptatibus quo asperiores
          doloribus maiores repudiandae id!
          <Textfield />
          <br />
          xd
        </Section>
      </React.Fragment>
    );
  }
}
