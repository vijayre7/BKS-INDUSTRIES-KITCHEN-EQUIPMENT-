const fs = require('fs');
const path = require('path');

module.exports = (req, res) => {
  try {
    const indexPath = path.join(process.cwd(), 'index.html');
    if (fs.existsSync(indexPath)) {
      const html = fs.readFileSync(indexPath, 'utf8');
      res.setHeader('Content-Type', 'text/html; charset=utf-8');
      return res.status(200).send(html);
    }
  } catch (err) {
    console.error('Vercel API fallback error:', err);
  }
  res.setHeader('Content-Type', 'text/html; charset=utf-8');
  return res.status(200).send('<!DOCTYPE html><html><head><title>BKS Industries</title></head><body><h1>BKS Industries</h1></body></html>');
};
