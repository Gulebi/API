const Canvas = require('canvas')

module.exports.createImage = async (url) => {
    let img = '';
    try {
        img = await Canvas.loadImage(url);
    } catch (error) {
        return 'imageError';
    };

    let bg = await Canvas.loadImage('./assets/gay.png');

    const canvas = Canvas.createCanvas(512, 512)
    const ctx = canvas.getContext('2d')

    ctx.drawImage(img, 0, 0, 512, 512);
    ctx.drawImage(bg, 0, 0, 512, 512);

    return canvas.toBuffer();
}