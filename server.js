const fs = require('fs');
const path = require('path');

const PORT = process.env.PORT || 8080;
const PUBLIC_DIR = __dirname;

const MIME_TYPES = {
  '.html': 'text/html; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.js': 'text/javascript; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
  '.xml': 'application/xml; charset=utf-8',
  '.txt': 'text/plain; charset=utf-8',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.svg': 'image/svg+xml',
  '.ico': 'image/x-icon',
  '.webp': 'image/webp'
};

const handleRequest = (req, res) => {
  try {
    const rawUrl = (req && req.url) ? req.url : '/';
    let urlPath = rawUrl.split('?')[0];
    if (urlPath === '/' || urlPath === '') {
      urlPath = '/index.html';
    }

    let filePath = path.join(PUBLIC_DIR, path.normalize(urlPath));
    const ext = path.extname(filePath).toLowerCase();
    const contentType = MIME_TYPES[ext] || 'text/html; charset=utf-8';

    if (fs.existsSync(filePath) && fs.statSync(filePath).isFile()) {
      const content = fs.readFileSync(filePath);
      res.writeHead(200, { 'Content-Type': contentType });
      res.end(content);
    } else {
      const indexPath = path.join(PUBLIC_DIR, 'index.html');
      if (fs.existsSync(indexPath)) {
        const indexContent = fs.readFileSync(indexPath);
        res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
        res.end(indexContent);
      } else {
        res.writeHead(404, { 'Content-Type': 'text/html; charset=utf-8' });
        res.end('<h1>404 Not Found</h1>');
      }
    }
  } catch (err) {
    console.error('Server request error:', err);
    try {
      res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
      const indexPath = path.join(PUBLIC_DIR, 'index.html');
      if (fs.existsSync(indexPath)) {
        res.end(fs.readFileSync(indexPath));
      } else {
        res.end('<h1>BKS Industries</h1>');
      }
    } catch (e) {
      res.writeHead(500);
      res.end('Server Error');
    }
  }
};

if (require.main === module) {
  const http = require('http');
  const server = http.createServer(handleRequest);
  server.listen(PORT, () => {
    console.log(`BKS Industries server running at http://localhost:${PORT}/`);
  });
}
