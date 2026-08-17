import { createApp } from '@404/aether';

const app = await createApp({
	routesDir: './src/routes',
	staticDir: './static',
});

app.serve({ port: 5000 });
