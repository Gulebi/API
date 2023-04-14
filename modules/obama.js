const Canvas = require("canvas");

module.exports.createImage = async ({ url }) => {
    try {
        const img = await Canvas.loadImage(url);

        const background = await Canvas.loadImage("./assets/obama.png");

        const canvasMain = Canvas.createCanvas(700, 493); // Canvas для всей картинки
        const ctxMain = canvasMain.getContext(`2d`);

        const canvasSmall = Canvas.createCanvas(109, 129); // Canvas для внутренней картинки
        const ctxSmall = canvasSmall.getContext(`2d`);

        ctxSmall.rotate((4 * Math.PI) / 180); // Поворот внутреннего Canvas`a
        ctxSmall.drawImage(img, 0, 0, 109, 129); // Помещение картинки во внутренний Canvas

        ctxMain.drawImage(canvasSmall, 175, 207, 202, 180); // Помещение внутреннего Canvas`a на основной Canvas
        ctxMain.drawImage(background, 0, 0, 700, 493); // Помещение основной картинки на основном Canvas`e

        return canvasMain.toBuffer();
    } catch (error) {
        console.log(error);
        return "imageError";
    }
};
