const fs = require('fs');
const https = require('https');
const express = require('express');
const path = require('path');

const app = express();

// Serve static files (optional)
app.use(express.static(path.join(__dirname, 'public')));

// Basic route
app.get('/', (req, res) => {
    res.send('Hello, Secure World! This is running over HTTPS with TLS.');
});

// Read the SSL certificate and key
const options = {
    key: fs.readFileSync(path.join(__dirname, 'cert', 'server.key')),
    cert: fs.readFileSync(path.join(__dirname, 'cert', 'server.crt')),
};

// Create an HTTPS server
https.createServer(options, app).listen(8080, () => {
    console.log('HTTPS Server running on https://localhost:8080');
});
