const Jimp = require(`jimp`);
const Canvas = require('canvas')

module.exports.createImage = async (url) => {
    const canvas = Canvas.createCanvas(777, 1000);
    const ctx = canvas.getContext(`2d`);

    let img = await Canvas.loadImage(url);
    const background = await Canvas.loadImage('./assets/affect.png');

    ctx.drawImage(img, 276, 602, 301, 244);
    ctx.drawImage(background, 0, 0, 777, 1000);

    return canvas.toBuffer();
}