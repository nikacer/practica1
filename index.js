const http = require('http');
const { obtenerArchivo } = require('./utils')

const server = new http.Server();

server.on('request', (req, res) => {
    if (req.url == '/') {

        obtenerArchivo('./views/index.html').then(archivo => res.end(archivo)).catch((err) => console.error(err))
    } else {
        res.end()
    }
});




server.listen(8001);
