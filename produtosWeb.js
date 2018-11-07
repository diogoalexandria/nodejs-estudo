var http = require('http');

var server = http.createServer(function(requisicao, resposta){
    if(requisicao.url == "/produtos"){
        resposta.end("<html><body><h1>Listando os produtos</h1></body></html>");
    }else{
        resposta.end("<html><body><h1>Home da casa do codigo</h1></body></html>");
    }
    
});

server.listen(3000, "localhost");

console.log("Servidor está rodando.");