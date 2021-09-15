var eventos = require('events');
var EmisorEventos = eventos.EventEmitter;
var evt = new EmisorEventos();



setInterval(function () {
    evt.emit('datos', Date.now());
}, 500);


module.exports = {
    evt
}