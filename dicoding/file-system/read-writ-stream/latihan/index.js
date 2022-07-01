import fs from 'fs';

// const createInput = fs.createWriteStream('Input.txt')

// createInput.write('1. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.');
// createInput.end('.');

const readInput = fs.createReadStream('./Input.txt', {highWaterMark: 10})

readInput.on('readable', () => {
    try{
        process.stdout.write(`[${readInput.read()}]`);
    }catch(e){
        console.log(e)
    }
})