const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');
const app = express();
const port = 3000;

app.use(express.static('public'));
app.use(bodyParser.json());

app.get('/api/tree', (req, res) => {
    fs.readFile('tab.json', 'utf8', (err, data) => {
        if (err) {
            res.status(500).send('Error reading file');
            return;
        }
        res.send(JSON.parse(data));
    });
});

app.post('/api/tree', (req, res) => {
    fs.writeFile('tab.json', JSON.stringify(req.body, null, 2), err => {
        if (err) {
            res.status(500).send('Error writing file');
            return;
        }
        res.send('Data successfully saved');
    });
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
