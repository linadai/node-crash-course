const fs = require('fs'); //require the fs module from the built-in node module; fs is a built-in module

//read the contents of a file
// fs.readFile('./docs/blog.txt',  (err, data) => { //when finished reading the contents of the file, run the callback function
//     if (err) throw err;
//     console.log(data.toString());
// })

//write the contents of a file
// fs.writeFile('./docs/blog.txt', 'Hello World!', (err) => {  //when finished writing the contents of the file, run the callback function
//     if (err) throw err;
//     console.log('File was saved!');
// })

//append to a file
// fs.appendFile('./docs/blog.txt', '+++Hello World!', (err) => {
//     if (err) throw err;
//     console.log('File was appended!');

// }) 


//directory
// if (!fs.existsSync('./assets')) { //if the directory does not exist, create it
//     fs.mkdir('./assets', (err) => { //when finished creating the directory, run the callback function
//         if (err) throw err;
//         console.log('Directory was created!');
//     }) 
// }




//delete a file
if(fs.existsSync('./delete.txt')) {//if the file exists, delete it
    fs.unlink('./delete.txt', (err) => {
        if (err) throw err;
        console.log('File was deleted!');
    })
} 

//delete a directory
if(fs.existsSync('./assets')) {//if the directory exists, delete it
    fs.rmdir('./assets', (err) => {
        if (err) throw err;
        console.log('Directory was deleted!');
    })
}


//rename a file
if(fs.existsSync('./rename.txt')) {//if the file exists, rename it
    fs.rename('./rename.txt', './renamed.txt', (err) => {
        if (err) throw err;
        console.log('File was renamed!');
    })
}