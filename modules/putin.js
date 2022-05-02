const Canvas = require('canvas')

module.exports.createImage = async (url) => {
    let img = '';
    try {
        img = await Canvas.loadImage(url);
    } catch (error) {
        return 'imageError';
    };

    const canvas = Canvas.createCanvas(600, 539);
    const ctx = canvas.getContext(`2d`);

    const background = await Canvas.loadImage('./assets/putin.png');

    ctx.drawImage(img, 361, 19, 109, 129);
    ctx.drawImage(background, 0, 0, 600, 539);

    return canvas.toBuffer();
}