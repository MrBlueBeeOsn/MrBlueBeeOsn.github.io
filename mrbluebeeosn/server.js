// server.js
const jsonServer = require('json-server');
const server = jsonServer.create();
const router = jsonServer.router('src/data/db.json');
const middlewares = jsonServer.defaults();

// Thêm CORS headers
server.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH');
  res.header('Access-Control-Allow-Headers', 'Content-Type');
  next();
});

server.use(middlewares);
server.use(router);
server.listen(3003, () => {
  console.log('JSON Server is running on port 3003 with CORS');
});