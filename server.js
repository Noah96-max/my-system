// استيراد المكتبة
const http = require('http');
const fs = require('fs');
const path = require('path');

// إنشاء خادم على المنفذ 3000
const server = http.createServer((req, res) => {
    if (req.url === '/') {
        fs.readFile(path.join(__dirname, 'index.html'), 'utf-8', (err, data) => {
            if (err) {
                res.writeHead(500, {'Content-Type': 'text/plain'});
                res.end('Server Error');
            } else {
                res.writeHead(200, {'Content-Type': 'text/html'});
                res.end(data);
            }
        });
    } else {
        res.writeHead(404, {'Content-Type': 'text/plain'});
        res.end('Page Not Found');
    }
});

// تحديد المنفذ الذي سيستمع عليه الخادم
server.listen(3000, () => {
    console.log('Server is running at http://localhost:3000');
});
