import * as React from 'react';

import { PRIMARY_COLOR } from '@shared/constants';
import Section from '../Section';
import { Divider, Bold } from '../Section/styles';

export default class Problem extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Divider />
        <Section id="problem" title="O problemie i sposobach jego ograniczenia">
          Coraz więcej ludzi żyje szybko, biegając w kółko między pracą (szkołą)
          i domem, skupiając się jedynie na swoich obowiązkach, a coraz mniej na
          sobie i swoim zdrowiu. Prowadzi to do licznych chorób między innymi
          powszechnej otyłości, spadku samooceny, w konsekwencji do depresji, a
          w ekstremalnych wypadkach nawet do śmierci. Zwykle osoby
          doświadczające takich problemów są świadome, że muszą coś zmienić, ale
          nie wiedzą jak i w którym kierunku iść. Nasz projekt wychodzi im
          naprzeciw. Staramy się pokazać, że nawet jeżeli nie mają oni zbyt
          wiele czasu dla siebie to i tak mogą zawalczyć o swoją sylwetkę oraz
          psychikę. Pierwszym krokiem do zmiany może być dołączenie do{' '}
          <Bold style={{ color: PRIMARY_COLOR }}>Projektu Fit Life.</Bold>
        </Section>
      </React.Fragment>
    );
  }
}
