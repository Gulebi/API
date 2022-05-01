const Jimp = require('jimp')

module.exports.createImage = async (url, int = 5) => {
    const img = await Jimp.read(url);
    
    img.pixelate(parseInt(int));

    return await img.getBufferAsync(Jimp.MIME_PNG);
}