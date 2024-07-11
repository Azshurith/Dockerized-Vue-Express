import { renderToString } from 'vue/server-renderer';
import { createApp } from '../router';

/**
 * initiate the Vue App for a server-side application,
 * we use renderToString to render the app to HTML,
 * which can be sent from the server to the cleint
 */

export const render = async () => {
  const { app } = createApp();
  const html = await renderToString(app);

  return {
    html,
  };
};
