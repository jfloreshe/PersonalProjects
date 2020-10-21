const express = require('express');
const fs = require('fs');
const app = express();

app.get('/', function (req, res) {
	res.send('Hello World!');
	console.log('Hellow World sent to Browser at: ' + new Date());
});

const port = process.env.PORT || 3000;
app.listen(port, function() {
	console.log('my app is using Node.js version: ' + process.version);
	console.log('my app listening on port ' + port);
});
