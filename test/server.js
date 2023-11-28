const http = require('http');
const fs = require('fs');
//create a server
const server = http.createServer((req, res) => {
    console.log('request url is: ', req.url);
    //text/plain
    // res.setHeader('Content-Type','text/plain' );
    // res.write('Hello World\n');

    //html content
    // res.setHeader('Content-Type','text/html' );
    // res.write('<h1>Hello World</h1>');
    // res.write('<p>server response a html</p>');
    // res.end();

    //different path of url request

    let path = './views/';

    switch (req.url) {
        case '/':
            path += 'index.html';
            res.statusCode = 200;
            break;
        case '/about':
            path += 'about.html';
            res.statusCode= 200;
            break;
          //redirect if request url is /about-me
          case '/about-me':
            res.statusCode = 301;
            res.setHeader('Location', '/about');
            break;
        default:
            path += '404.html';
            res.statusCode = 404;
            break;
    }

    //send html file to browser
    fs.readFile(path, (err, data) => {
        // if (err) throw err;
        // res.write(data);
        // res.end();
        if (err) {
            console.log(err);
            res.end();
        } else {
            res.end(data);
        }
    })
});

server.listen(3005, 'localhost', () => {
    console.log('Server running at localhost:3005');
});