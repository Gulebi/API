const Jimp = require(`jimp`)

module.exports.createImage = async (url) => {
    let img = '';
    try {
        img = await Jimp.read(url);
    } catch (error) {
        console.log(error);
        return 'imageError';
    }

    const base = await Jimp.read('./assets/divorce.png');

    img.resize(270, 155);
    base.composite(img, 130, 335);

    return await base.getBufferAsync(Jimp.MIME_PNG); 
}