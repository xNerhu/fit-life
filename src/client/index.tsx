import * as React from 'react';
import { hydrate } from 'react-dom';
import ReactGA from 'react-ga';

import App from '@shared/components/App';

hydrate(<App />, document.getElementById('app'));

ReactGA.initialize(process.env.GOOGLE_ANALYTICS_ID);
ReactGA.pageview(window.location.pathname + window.location.search);

// react-hot-loader
if ((module as any).hot) {
  (module as any).hot.accept();
}
