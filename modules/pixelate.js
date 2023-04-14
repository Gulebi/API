const Jimp = require("jimp");

module.exports.createImage = async ({ url, text, int = 5 }) => {
    try {
        console.log(url);
        const img = await Jimp.read(url);

        img.pixelate(parseInt(int));

        return await img.getBufferAsync(Jimp.MIME_PNG);
    } catch (error) {
        console.log(error);
        return "imageError";
    }
};
