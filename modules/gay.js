const Canvas = require('canvas')

module.exports.createImage = async (url) => {
    let bg = await Canvas.loadImage('./assets/gay.png');
    let img = await Canvas.loadImage(url);

    const canvas = Canvas.createCanvas(512, 512)
    const ctx = canvas.getContext('2d')

    ctx.drawImage(img, 0, 0, 512, 512);
    ctx.drawImage(bg, 0, 0, 512, 512);

    return canvas.toBuffer();
}