// server.js
const corsAnywhere = require('cors-anywhere');
const host = 'localhost';
const port = 8080;

corsAnywhere.createServer({
  originWhitelist: [], // Allow all origins
  requireHeader: ['origin', 'x-requested-with'],
  removeHeaders: ['cookie', 'accept-encoding']
}).listen(port, host, () => {
  console.log(`CORS Anywhere server running at http://${host}:${port}`);
});
