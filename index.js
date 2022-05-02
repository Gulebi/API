const requireDir = require('require-dir');
const express = require('express');
const app = express();

const PORT = process.env.PORT || 3000;

const modules = requireDir('./modules');
console.log(`Loaded ${Object.keys(modules).length} modules.`);


const messages = {
    'listOfEndpoints': { 'List of endpoints': Object.getOwnPropertyNames(modules).join(', ') },
    'endpointError': { error: 'Specify the correct endpoint' },
    'imageError': { error: 'Specify the correct image url'},
    'textError': { error: 'Specify the text' },
    'intError': { error: 'Specify the correct integer'}
};


app.get('/', (req, res) => {
    res.send('Babu-API is the best image processing API and more');
});



app.get('/api/list/', (req, res) => {
    res.set("Content-Type", "application/json");
    res.send(messages['listOfEndpoints']);
});



app.get('/api/:endpoint', async (req, res) => {
    const endpoint = req.params.endpoint;
    const imageRaw = req.query.image;
    const text = req.query.text;
    const int = req.query.int;

    if (endpoint in modules == false) {
        res.set("Content-Type", "application/json");
        res.send(messages['endpointError']);
        return;
    };

    const output = await modules[endpoint].createImage(imageRaw, text , int);

    if (Buffer.isBuffer(output)) {
        res.set("Content-Type", "image/png"); 
        res.send(Buffer.from(output));
    } else {
        res.set("Content-Type", "application/json");
        res.send(messages[output]);
    }
});



app.listen(PORT, () => console.log(`Listening on port ${PORT}...`));