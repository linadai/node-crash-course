const fs = require('fs');

//read stream
const readStream = fs.createReadStream('./docs/blog3.txt', { encoding: 'utf-8' });
//write stream
const writeStream = fs.createWriteStream('./docs/blog4.txt', { encoding: 'utf-8' });

// readStream.on('data', (data) => {
//     // console.log("------    NEW CHUNK -----");
//     // console.log(data);
//     writeStream.write("------  ***********  NEW CHUNK -----");
//     writeStream.write(data,  (err) => {
//         if (err) throw err;
//         console.log('File was saved!');
//     });
// });


//pipe(writeStream);

readStream.pipe(writeStream);

readStream.on('end', () => { //this event is triggered when the stream is finished reading
    console.log('Read completed!');
});

writeStream.on('finish', () => { //this event is triggered when the stream is finished writing
    console.log('Write completed!');
})