const express = require('express');
const app = express();
const port = 8080;

app.get('/', (req, res) => res.send('Hello Sam!Welcome to the world of possibilites with AWS'));

app.listen(port);
console.log(`App running on http://localhost:${port}`);
