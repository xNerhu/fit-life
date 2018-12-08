import * as React from 'react';

import { Triangle } from '@client/styles';
import { Root } from './styles';

export default class Food extends React.Component {
  render() {
    return (
      <Root>
        <Triangle color="#fff" variant="top-left" />
        <Triangle
          color="#fafafa"
          variant="bottom-right"
          style={{ position: 'absolute', bottom: 0 }}
        />
      </Root>
    );
  }
}
