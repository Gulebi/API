const Jimp = require(`jimp`)

module.exports.createImage = async (url) => {
    let img = '';
    try {
        img = await Jimp.read(url);
    } catch (error) {
        return 'imageError';
    }

    const base = await Jimp.read('./assets/hitler.png');

    img.resize(140, 140);
    base.composite(img, 46, 43);

    return await base.getBufferAsync(Jimp.MIME_PNG);
}