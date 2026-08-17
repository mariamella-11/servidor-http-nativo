import http from 'node:http'
import { URL } from 'node:url'

const porta = 3000

const produtos = [
    {id: 1, nome: "Sabonete"},
    {id: 2, nome: "Volante LogiTech G923"},
    {id: 3, nome: "Sabão em Pó"},
    {id: 4, nome: "Pelúcia do Sonic"},
]

const server = http.createServer((req, res) => {
    res.statusCode = 200
    res.setHeader('Content-Type', 'application/json; charset=utf-8')

    if (req.method == "GET" && req.url == "/contato") {
        console.log(`Requisição recebida! ${req.method} ${req.url}`)
        return res.end(JSON.stringify({data:
            {numero_telefone: "67 99999 9999",
                endereco: "Rua da Alegria, 99, Centro"}}));
    }

    if (req.method == "GET" && req.url == "/produtos") {
        console.log(`Requisição recebida! ${req.method} ${req.url}`)
        return res.end(JSON.stringify(produtos));
    }

    if (req.method == "GET" && req.url == "/status") {
        console.log(`Requisição recebida! ${req.method} ${req.url}`)
        return res.end(JSON.stringify({data: {status: "ok"}}));
    }
    else{
        res.statusCode = 404
        return res.end(JSON.stringify({"erro 404": "Rota não encontrada"}));
    }

    res.end(JSON.stringify({data: "Página Inicial"}))
})

server.listen(porta, () => {
    console.log(`Servidor ouvindo na porta ${porta}`)
});