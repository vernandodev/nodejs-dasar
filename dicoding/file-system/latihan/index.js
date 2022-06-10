import fs from "fs";

const readLatihanText = (error, data) => {
    if(error){
        console.log('Berkas tidak dapat dibuka!');
    }
    console.log(data)
}

fs.readFile('./latihan.txt', 'utf-8', readLatihanText);