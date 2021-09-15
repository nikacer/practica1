const fs = require('fs');
function obtenerArchivo(path) {
    return new Promise((resolve, reject) => {
        fs.readFile(path, (err, info) => {
            if (err) {
                reject(err)

            }

            resolve(info)
        });
    })
}

module.exports = {
    obtenerArchivo
}