import * as React from 'react';

import { PeriodButton, PeriodButtonIcon } from './styles';

interface State {
  toggled: boolean;
}

// Probably needed in the future
export default class PeriodDialog extends React.Component<{}, State> {
  public state: State = {
    toggled: false,
  };

  render() {
    return (
      <React.Fragment>
        <PeriodButton>
          XD
          <PeriodButtonIcon />
        </PeriodButton>
      </React.Fragment>
    );
  }
}
