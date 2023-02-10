let http = require('http');
let hostname = '127.0.0.1';
let port = '8080';

//서버생성(요청: request, 응답: responsive)
const server = http.createServer(function(req, res) {
    //console.log('REQUEST:', req); //요청
    //res.end('welcome') //응답
    const path = req.url;
    const method = req.method;
    if(path==="/products") {
        if(method==="GET") {
            res.writeHead(200, {"Content-Type": "application/json"}); //200: 정상작동
            const products = JSON.stringify([
                {
                    name: "배변패드",
                    price: 5000,
                }
            ]);
            res.end(products)
        }else if(method==="POST") {
            res.end("생성되었습니다.")
        }
    }else{res.end('Good Bye')}
});

//서버를 요청대기상태로 만든다(post, hostname)
server.listen(port, hostname);
console.log('server on')