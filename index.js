const path = require('path')
const fs = require('fs')
const express = require('express');
const app = express();

const PORT = process.env.PORT || 3000



const requireDir = require('require-dir');
const modules = requireDir('./modules');

console.log(`Loaded ${Object.keys(modules).length} modules...`);



app.get('/', (req, res) => {
    res.send('Hello World!');
});



app.get('/api/', (req, res) => {
    res.send(`List of endpoints: ${Object.getOwnPropertyNames(modules).join(', ')}`);
});



app.get('/api/gay/:image?', async (req, res) => {
    const imageRaw = req.query.image
    
    const image = await modules.gay.createImage(imageRaw)

    res.set("Content-Type", "image/png");
    res.send(Buffer.from(image))
});

app.get('/api/hitler/:image?', async (req, res) => {
    const imageRaw = req.query.image
    
    const image = await modules.hitler.createImage(imageRaw)

    res.set("Content-Type", "image/png");
    res.send(Buffer.from(image))
});

app.get('/api/affect/:image?', async (req, res) => {
    const imageRaw = req.query.image
    
    const image = await modules.affect.createImage(imageRaw)

    res.set("Content-Type", "image/png");
    res.send(Buffer.from(image))
});

app.get('/api/putin/:image?', async (req, res) => {
    const imageRaw = req.query.image
    
    const image = await modules.putin.createImage(imageRaw)

    res.set("Content-Type", "image/png");
    res.send(Buffer.from(image))
});

app.get('/api/obama/:image?', async (req, res) => {
    const imageRaw = req.query.image
    
    const image = await modules.obama.createImage(imageRaw)

    res.set("Content-Type", "image/png");
    res.send(Buffer.from(image))
});

app.get('/api/stonks/:image?', async (req, res) => {
    const imageRaw = req.query.image
    
    const image = await modules.stonks.createImage(imageRaw)

    res.set("Content-Type", "image/png");
    res.send(Buffer.from(image))
});



app.get('/api/pixelate/:image?:int?', async (req, res) => {
    const imageRaw = req.query.image
    const int = req.query.int

    const image = await modules.pixelate.createImage(imageRaw, int)

    res.set("Content-Type", "image/png");
    res.send(Buffer.from(image))
});



app.get('/api/blur/:image?:int?', async (req, res) => {
    const imageRaw = req.query.image
    const int = req.query.int

    const image = await modules.blur.createImage(imageRaw, int)

    res.set("Content-Type", "image/png");
    res.send(Buffer.from(image))
});



app.get('/api/signa/:text?', async (req, res) => {
    const text = req.query.text
    
    const image = await modules.signa.createImage(text)

    res.set("Content-Type", "image/png");
    res.send(Buffer.from(image))
});

app.get('/api/abdurahman/:text?', async (req, res) => {
    const text = req.query.text
    
    const image = await modules.abdurahman.createImage(text)

    res.set("Content-Type", "image/png");
    res.send(Buffer.from(image))
});



app.listen(PORT, () => console.log(`Listening on port ${PORT}...`));