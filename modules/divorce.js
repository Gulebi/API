const Jimp = require(`jimp`);

module.exports.createImage = async (url) => {
    try {
        const img = await Jimp.read(url);

        const base = await Jimp.read("./assets/divorce.png");

        img.resize(270, 155);
        base.composite(img, 130, 335);

        return await base.getBufferAsync(Jimp.MIME_PNG);
    } catch (error) {
        console.log(error);
        return "imageError";
    }
};
