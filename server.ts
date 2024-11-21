/// file: my-server.js
import { Application, Router } from 'https://deno.land/x/oak@v11.1.0/mod.ts';
import { handler } from './build/handler.js';

const app = new Application();

// add a route that lives separately from the SvelteKit app
const router = new Router();
router.get('/healthcheck', (ctx) => {
	ctx.response.body = 'ok';
});
app.use(router.routes());
app.use(router.allowedMethods());

// let SvelteKit handle everything else, including serving prerendered pages and static assets
app.use(handler);

app.addEventListener('listen', () => {
	console.log('listening on port 8000');
});
await app.listen({ port: 8000 });
