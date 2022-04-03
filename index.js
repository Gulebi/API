const Joi = require('joi')
const path = require('path')
const fs = require('fs');
const express = require('express');
const app = express();

const gay = require('./modules/gay')
const hitler = require('./modules/hitler')

const cmdsDir = './modules'

let cmdsAmount = 0

const readCommands = (dir) => {
    const files = fs.readdirSync(path.join(__dirname, dir))
    for (const file of files) {
        const stat = fs.lstatSync(path.join(__dirname, dir, file))
        if (stat.isDirectory()) {
            readCommands(path.join(dir, file))
        } else if (!file.endsWith('.png')) {
            const filePath = file
            let moduleName = file.replace('.js', '')
            moduleName = require(path.join(__dirname, dir, filePath))


            cmdsAmount++
        }
    }
}

readCommands(cmdsDir)
console.log(`Загружено ${cmdsAmount} модулей`)


app.get('/', (req, res) => {
    res.send('Hello World!');
});



app.get('/api/gay/:image?', async (req, res) => {
    const imageRaw = req.query.image
    
    const imageEndPath = await gay.createImage(imageRaw)

    console.log(imageEndPath);

    setTimeout(function() {
        res.set("Content-Type", "image/png");
        res.sendFile(imageEndPath);
    }, 200)
});

app.get('/api/hitler/:image?', async (req, res) => {
    const imageRaw = req.query.image
    
    const imageEndPath = await hitler.createImage(imageRaw)

    console.log(imageEndPath);

    setTimeout(function() {
        res.set("Content-Type", "image/png");
        res.sendFile(imageEndPath);
    }, 100)
});

app.listen(3000, () => console.log('Listening on port 3000...'));