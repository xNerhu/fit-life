import * as React from 'react';
import { hydrate } from 'react-dom';

import App from '@shared/components/App';

hydrate(<App />, document.getElementById('app'));

// react-hot-loader
if ((module as any).hot) {
  (module as any).hot.accept();
}
