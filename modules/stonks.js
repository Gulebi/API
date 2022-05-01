const Canvas = require('canvas')

module.exports.createImage = async (url) => {
    const canvas = Canvas.createCanvas(825, 619);
    const ctx = canvas.getContext(`2d`);

    const img = await Canvas.loadImage(url);
    const background = await Canvas.loadImage('./assets/stonks.png');

    ctx.drawImage(img, 108, 42, 163, 182);
    ctx.drawImage(background, 0, 0, 825, 619);

    return canvas.toBuffer();
}