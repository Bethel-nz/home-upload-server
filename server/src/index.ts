import { Hono } from 'hono';
import { logger } from 'hono/logger';
import route from './routes';
import { cors } from 'hono/cors';

const hono = new Hono().basePath('/api/v1');
hono.use(
  '*',
  cors({
    origin: 'http://localhost:5173',
  })
);
hono.use('*', logger());
hono.route('/').get((ctx) => ctx.text('visit /api/v1/files'));
hono.route('/files', route);

Bun.serve({
  fetch: hono.fetch,
  port: 5273,
});
