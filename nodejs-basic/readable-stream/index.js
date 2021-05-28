const path = require('path');
const fs = require('fs');

const readableStream = fs.createReadStream(path.resolve(__dirname, 'article.txt'), {highWaterMark: 10});

readableStream.on('readable', () => {
    try {
        process.stdout.write(`[${readableStream.read()}]`);
    } catch (e) {
        // TODO Catch the error
    }
});

readableStream.on('end', () => {
   console.log('Done');
});