import express, { Request, Response } from 'express';
import * as fs from 'fs';
import path from 'path';
import { createServer } from 'vite';

async function initServer() {
    const app = express();

    // Create Vite server in middleware mode and configure the app type as
    // 'custom', disabling Vite's own HTML serving logic so parent server
    // can take control
    const vite = await createServer({
        server: { middlewareMode: true },
        appType: 'custom',
    });

    // Use vite's connect instance as middleware. If you use your own
    // express router (express.Router()), you should use router.use
    app.use(vite.middlewares);

    app.use('*', async (req: Request, res: Response) => {
        try {
            // 1. Read index.html
            let template = fs.readFileSync(
                path.resolve(`${import.meta.dirname}/resources/index.html`),
                'utf-8'
            );

            // 2. Apply Vite HTML transforms. This injects the Vite HMR client,
            //    and also applies HTML transforms from Vite plugins, e.g. global
            //    preambles from @vitejs/plugin-react
            template = await vite.transformIndexHtml(req.originalUrl, template);

            // 3. Load the server entry. ssrLoadModule automatically transforms
            //    ESM source code to be usable in Node.js! There is no bundling
            //    required, and provides efficient invalidation similar to HMR.
            const render = (await vite.ssrLoadModule('/src/providers/entry-server.ts')).render;

            // 4. render the app HTML. This assumes entry-server.js's exported
            //     `render` function calls appropriate framework SSR APIs,
            //    e.g. ReactDOMServer.renderToString()
            const { html: appHtml } = await render();

            // 5. Inject the app-rendered HTML into the template.
            const html = template.replace('<!--main-app-->', appHtml);

            // 6. Send the rendered HTML back.
            res.set({ 'Content-Type': 'text/html' }).end(html);
        } catch (error) {
            console.error('Error rendering:', error);
            res.status(500).send('Internal Server Error');
        }
    });

    return app;
}

initServer().then((app) =>
    app.listen(process.env.NODE_PORT || 3000, () => {
        console.log('Server is running.');
    })
);
