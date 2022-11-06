const fs = require('fs');
const path = require('path');
const { stdin } = process;

fs.writeFile(
    path.join(__dirname, 'text.txt'), 
    '',
    (err) => {
        if (err) throw err;
        console.log('Hi! File has been created.\nYou can write some text to add it to the file or press Ctrl-C or write "exit" to end the session\nWrite some text to add to file:');
    }
);

stdin.on('data', data => {
    if (data.toString().trim() === 'exit'){
        console.log('Session ended goodbyes!');
        process.exit();
    }
    fs.appendFile(
    path.join(__dirname, 'text.txt'),
    data,
    err => {
        if (err) throw err;
        console.log('Text has been added to the file. Write a new text to also add it to the file:');
    }
)});

process.on('SIGINT', () => {
    console.log('Session ended goodbyes!');
    process.exit();
});