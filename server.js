var express = require('express')
var http = require('http')
var app = express()

app.use(express.json())
app.set('view engine', 'ejs');

app.get('/:test?', (req, res) => {
    muestraDatos(req)
    res.status(200).render('index')

})

app.post('/', (req, res) => {
    muestraDatos(req)
    res.status(200).send("post")

})

app.delete('/', (req, res) => {
    res.status(200).send("delete")
})

app.put('/', (req, res) => {
    res.status(200).send("put")
})

http.createServer(app).listen(8001, () => {
    console.log('Server started at http://localhost:8001');
});

function muestraDatos(req) {
    console.log(
        "query: ", req.query,
        "\n body: ", req.body,
        "\n header: ", req.headers,
        "\n params: ", req.params,
    )
}