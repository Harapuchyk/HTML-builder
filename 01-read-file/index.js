const fs = require('fs');
const path = require('path');
const stream = new fs.ReadStream(path.join(__dirname, 'text.txt'), "utf8");
stream.on('readable', () => {
    const data = stream.read();
    console.log(data);
});