// Required Module for the Node project
var http = require('http');
var url = require('url');
var path= require('path');
var filesystem= require('fs');

// Types of Files that will be included in the node js project
// Object Type array with mimetype 
var mimetypes = {
    "html": "text/html",
    "jpeg": "image/jpeg",
    "jpg": "image/jpg",
    "png": "image/png",
    "js": "text/javascript",
    "css": "text/css"
};

var hostname = '127.0.0.1';
var port = 3000;

//const server = http.createServer((req, res) => {
  //res.statusCode = 200;
  //res.setHeader('Content-Type', 'text/plain');
  //res.end('Hello World\n');
//});

//server.listen(port, hostname, () => {
  //console.log(`Server running at http://${hostname}:${port}/`);
//});

// creating a server 
http.createServer(function(req,res){
    var uri =url.parse(req.url).pathname;           // path name for the project
    var fileName=path.join(process.cwd(),unescape(uri));   // cwd will return the current working directory of the url and will return the
    console.log('loading the url'+ uri);
    var stats;
    try{
        stats=fileName.lstatSync(fileName);
    } catch (e) {
        res.writeHead(404,{'Content-type': 'text/plain'});
        res.write('404 Not found');
        res.end();
        return;
    
    // Check if its a file or directory
    if(stats.isFile()){
        var mimetype=mimetypes[path.extname(fileName).split('.').reverse()[0]];
        res.writeHead(200,{'Content-type':mimetype});  // which means success

        var filestream=filesystem.createReadStream(fileName);
        filestream.pipe(res);

    } else if(stats.isDirectory()){
        res.writeHead(302,{
            'Location': 'index.html'
        });
        res.end();
    }else {
        res.writeHead(500, {'Context-type':'text/plain'});
        res.write('500 Internal error\n');
        res.end();    
    }
    };        
}).listen(3000);