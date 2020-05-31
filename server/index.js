const http = require('http');
// const fs=require('fs');
const url=require('url');
const port=5000;

// const json = fs.readFileSync(`${__dirname}/package.json`, 'utf-8');
// const developerdata=JSON.parse(json);

const server= http.createServer((req,res)=>{
  
    const pathName = url.parse(req.url, true).pathname;
    const id = url.parse(req.url, true).query.id;
    
    if(pathName === '/page1' || ''){
        res.writeHead(200, {'Content-type': 'text/html'});
        res.end('This is the page 1');
    }

    else if(pathName === '/page2'){
        res.writeHead(200, {'Content-type': 'text/html'});
        res.end('This is the page 2');
    }
    
    else{
        res.writeHead(404, {'Content-type': 'text/html'});
        res.end('Page Not Found');
    }
});

server.listen(port, '127.0.0.1', ()=>{
    console.log(`Server is Listening at Port: ${port}`);
        // console.log(developerdata);
});