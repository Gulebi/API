const Jimp = require('jimp')

module.exports.createImage = async (url, int = 5) => {
    let img = '';
    try {
        img = await Jimp.read(url);
    } catch (error) {
        return 'imageError';
    }
    
    img.pixelate(parseInt(int));

    return await img.getBufferAsync(Jimp.MIME_PNG);
}