const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
  // Serve HTML file
  fs.readFile('public/index.html', (err, data) => {
    if (err) {
      res.writeHead(404);
      res.end('404 Not Found');
    } else {
      res.writeHead(200, { 'Content-Type': 'text/html' });
      res.end(data);
    }
  });
});

server.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
});
