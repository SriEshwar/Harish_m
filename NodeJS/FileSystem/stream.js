
const fs = require('fs');
const path = require('path');

// Correct paths for the files
const sourceFilePath = path.join(__dirname, 'bigfile.txt');
const destinationFilePath = path.join(__dirname, 'bigfile2.txt');

// Create a readable stream with proper encoding option
const readStream = fs.createReadStream(sourceFilePath, { encoding: 'utf8' });

// Create a writable stream
const writeStream = fs.createWriteStream(destinationFilePath);

readStream.on('data', (dataChunk) => {
    writeStream.write(dataChunk);
});

readStream.on('error', (error) => {
    console.error('Error reading file:', error);
});

writeStream.on('error', (error) => {
    console.error('Error writing file:', error);
});

readStream.on('end', () => {
    writeStream.end();  // Close the write stream after all data is written
    console.log('Copy completed.');
});
