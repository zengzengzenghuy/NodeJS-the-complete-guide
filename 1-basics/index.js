const http = require('http');
const { parse } = require('path');

const server = http.createServer((req,res)=>{
    const url = req.url;
    const method = req.method;
    if(url==='/'){
        res.write('<html>');
        res.write('<head><title>New User</title><head>');
        res.write('<body><form action="/create-user" method="POST"><input type="text" name="username"><button type="submit">Send</button></form></body>');
        res.write('</html>');
        return res.end();
    }
    if(url==='/create-user'&&method==='POST'){
        const body = [];
        // receive from POST
        req.on('data',(chunk)=>{
            console.log(chunk);
            body.push(chunk);
        })
        // execute when data received is complete
        req.on('end',()=>{
            const parsedBody = Buffer.concat(body).toString();
            // get the value after '='
            // username=${inputdata}
            const parsedData = parsedBody.split("=")[1]
            console.log(parsedBody);
            console.log(parsedData);
        })
        // redirect to '/'
        res.statusCode=302
        res.setHeader('Location','/')
        res.end()
    }

    if(url==='/users'){
        res.write('<html>');
        res.write('<head><title>User List</title><head>');
        res.write('<body><ul><li>User 1</li><li>User 2</li></ul></body>');
        res.write('</html>');
        res.end();
    }

})
server.listen(3000)

