import fs from 'fs';

// readable-stream berfungsi untuk membaca berkas yang besar
const readableStream = fs.createReadStream('./readable-stream.txt', { // dua argumen, pertama lokasi berkas, kedua objek konfigurasi
    highWaterMark:10
});

readableStream.on('readable', () => {
    try {
        process.stdout.write(`[${readableStream.read()}]`);
    }catch(error) {

    }
})