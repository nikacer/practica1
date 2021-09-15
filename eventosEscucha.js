const { evt } = require('./eventos')

evt.on('datos', function (fecha) {
    console.log(fecha);
});