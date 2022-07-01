import fs from 'fs';

const writableStream = fs.createWriteStream('Output.txt');

writableStream.write('Test text 1');
writableStream.write('Test text 2 ');
writableStream.end(' end');