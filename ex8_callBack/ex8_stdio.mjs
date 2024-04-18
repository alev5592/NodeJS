// Ho voluto provare a ampliare la mia conoscenza, passando invece che una stringa predefinita
// ,una da inserire manualmente da tastiera 

import { writeFile } from 'node:fs';
import { Buffer } from 'node:buffer';
import * as readline from 'readline';



const rl= readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Digita il testo da inserire nel tuo file: ',(inputText) => {
    // converto il testo inserito in un Buffer
    const data = new Uint8Array(Buffer.from(inputText));
    writeFile('messageKeyboard.txt', data, (err) => {
        if(err){
            throw err;
        } 
        console.log('Ho creato un file con il testo che hai fornito, vai a dare un occhiata!')
    })
    rl.close();
})


