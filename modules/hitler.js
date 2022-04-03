const fs = require('fs')
const path = require('path')
const jimp = require(`jimp`)

module.exports.createImage = async (url) => {
    let bg = await jimp.read('./assets/hitler.png');
    let img = await jimp.read(url);

    img.resize(140, 140);
    bg.composite(img, 46, 43);



    const time = Date.now()

    const fileName = `${time}-hitler.png`

    bg.write(path.join(__dirname, './end', fileName))

    
     
    return path.join(__dirname, './end', fileName);
}