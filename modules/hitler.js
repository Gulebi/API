const Jimp = require(`jimp`)

module.exports.createImage = async (url) => {
    const base = await Jimp.read('./assets/hitler.png');
    const img = await Jimp.read(url);

    img.resize(140, 140);
    base.composite(img, 46, 43);

    return await base.getBufferAsync(Jimp.MIME_PNG);
}