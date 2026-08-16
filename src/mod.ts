import { createApp } from '@404/aether';
import { aether } from '@404/aether/server';

const app = await createApp({
	routesDir: './src/routes',
	staticDir: './static',
});
app.use(aether({ entrypoints: ['./src/routes'] }));

app.serve({ port: 5000 });
