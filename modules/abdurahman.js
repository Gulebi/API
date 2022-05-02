const Jimp = require(`jimp`)

module.exports.createImage = async (imageRaw, text , int) => {
    if (text === undefined) {
        return 'textError';
    };

    let bg = await Jimp.read('./assets/abdurahman.png');

    const font = await Jimp.loadFont('./assets/fonts/Lobster-1.4-64-white/LE5vZ0ErX58IAqnsfchuOL5R.ttf.fnt');

    bg.print(
        font, 
        50, 
        480, 
        {
            text: text,
            alignmentX: Jimp.HORIZONTAL_ALIGN_CENTER,
            // alignmentY: Jimp.VERTICAL_ALIGN_MIDDLE
        },
        550,
        // 0
    );

    // console.log(Jimp.measureText(font, text));

    // https://github.com/oliver-moran/jimp/tree/master/packages/plugin-print

    return await bg.getBufferAsync(Jimp.MIME_PNG);
}