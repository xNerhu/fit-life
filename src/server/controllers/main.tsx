import { renderToStaticMarkup, renderToString } from 'react-dom/server';
import { ServerStyleSheet, StyleSheetManager } from 'styled-components';
import * as React from 'react';
import { Router } from 'express';

import App from '@shared/components/App';
import Html from '@server/views/Html';

const router = Router();

router.get('*', (req, res) => {
  const sheet = new ServerStyleSheet();

  const appString = renderToString(
    <StyleSheetManager sheet={sheet.instance}>
      <App />
    </StyleSheetManager>,
  );

  const html = renderToStaticMarkup(
    <Html
      appString={appString}
      clientBundle="/client.js"
      styleElement={sheet.getStyleElement()}
    />,
  );

  res.send(`<!doctype html>${html}`);
});

export default router;
