const express = require('express');
const fs = require('fs');
const ip = require('ip');
const qrcode = require('qrcode-terminal');

const content = fs.readFileSync('config.json');
const app = express();
const port = 3000;

qrcode.generate(`${ip.address()}:${port}`);

app.get('/', (req, res) => {
	res.setHeader('Content-Type', 'application/json');
	res.send(content);
});

app.listen(port, () => console.log('Server start on port ' + port));
