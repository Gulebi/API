const Canvas = require("canvas");

module.exports.createImage = async ({ url }) => {
    try {
        const img = await Canvas.loadImage(url);

        const canvas = Canvas.createCanvas(777, 1000);
        const ctx = canvas.getContext(`2d`);

        const background = await Canvas.loadImage("./assets/affect.png");

        ctx.drawImage(img, 276, 602, 301, 244);
        ctx.drawImage(background, 0, 0, 777, 1000);

        return canvas.toBuffer();
    } catch (error) {
        console.log(error);
        return "imageError";
    }
};
