const Jimp = require(`jimp`)

module.exports.createImage = async (text) => {
    let bg = await Jimp.read('./assets/signa.png');

    const font = await Jimp.loadFont('./assets/fonts/Impact-64-black/2QcjDDTRJaWwtqDbh9iKBKLh.ttf.fnt');

    bg.print(
        font, 
        580, 
        500, 
        {
            text: text,
            alignmentX: Jimp.HORIZONTAL_ALIGN_CENTER,
            // alignmentY: Jimp.VERTICAL_ALIGN_MIDDLE
        },
        420,
        // 0
    );

    // console.log(Jimp.measureText(font, text));

    // https://github.com/oliver-moran/jimp/tree/master/packages/plugin-print

    return await bg.getBufferAsync(Jimp.MIME_PNG);
}