import { createApp } from '@404/aether';
import { aether } from '@404/aether/server';

const app = await createApp({ routesDir: './routes' });
app.use(aether({ entrypoints: ['./src/routes'] }));
app.serve({ port: 5000 });
