const path = require('path');
const fs = require('fs');

const readableStream = fs.createReadStream(path.resolve(__dirname, 'input.txt'), {highWaterMark: 15});
const writeableStream = fs.createWriteStream(path.resolve(__dirname, 'output.txt'));

readableStream.on('readable', () => {
    try {
        writeableStream.write(`${readableStream.read()}\n`)
    } catch (e) {
        console.log(e.message);
    }
});