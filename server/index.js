import path from 'path';
import http from 'http';
import express from 'express';
import compression from 'compression';
import uuid from 'uuid';
import dotenv from 'dotenv';

dotenv.config();
const app = express();
const server = http.createServer(app);

const processPort = process.env.PORT;

// If the port is set using an env variable, convert it to an int
// fallback to 3000.
const port = parseInt(processPort, 10) || 3000;

// Remove annoying Express header addition.
app.disable('x-powered-by');

// Compress (gzip) assets in production.
app.use(compression());
// Create a nonce and attach it to the request. This allows us to safely
// use CSP to inline scripts.
app.use((req, res, next) => {
  res.locals.nonce = uuid.v4(); // eslint-disable-line no-param-reassign
  next();
});

// Pass any get request through the SSR middleware before sending it back
// app.get('*', ssrMiddleware);
if (process.env.NODE_ENV === 'development') {
  const setupHotDev = require('./middleware/hot');
  setupHotDev(app);
} else {
  const clientStats = require('../build/assets/stats.json');
  const serverRender = require('../build/main.js').default;

  // server.use(publicPath, express.static(outputPath))
  app.use(serverRender({ clientStats }));
}

// Without adding a "path" Express will serve files from the direcotry
// as if they're coming form the root of the site.
//      For example: app.use('/assets', express.static(....))
//        -- will serve the files in the directory from websiteUrl/assets/
app.use(express.static(path.resolve(process.cwd(), './build/assets')));
// Setup the public directory so that we can serve static assets.
app.use(express.static(path.resolve(process.cwd(), './public')));

server.listen(port, () => {
  console.log(`🚀  Server running on port: ${port}`);
});

export default app;
