const Jimp = require("jimp");

module.exports.createImage = async ({ url, int = 5 }) => {
    try {
        const img = await Jimp.read(url);

        img.blur(parseInt(int));

        return await img.getBufferAsync(Jimp.MIME_PNG);
    } catch (error) {
        console.log(error);
        return "imageError";
    }
};
