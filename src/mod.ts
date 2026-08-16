import { createApp } from '@404/aether';
import { aether } from '@404/aether/server';

const app = await createApp({ routesDir: './routes' });
app.use(aether({ entrypoints: ['./routes'] }));
app.serve({ port: 8000 });
