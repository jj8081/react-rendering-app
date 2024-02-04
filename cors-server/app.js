const express = require('express');
const app = express();
const jsonFile = require('./nextflow_schema.json');
app.get('/', (req, res) => {
    res.send('Welcome to CORS server 😁')
})
app.get('/cors', (req, res) => {
	res.set('Access-Control-Allow-Origin', 'http://localhost:3000');
    res.json(jsonFile);
})
app.listen(8080, () => {
    console.log('listening on port 8080')
})