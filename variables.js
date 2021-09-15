const { default: axios } = require("axios");

// let o var ?
let a = 2;
let b = 'hello';
var booleano = true;
var string = 'texto';
var indefinido;
var objeto = {
    edad: 15,
    ciudad: 'Bogotá',
    etiquetas: ['experto', 'español'],
    mas: {
        comida: 'pasta'
    }
}

var arreglo = [objeto, 5]

arreglo.push('ultimo')
arreglo.unshift('primera')
//console.log('Arreglo - ', arreglo)
console.warn("no encontrada ", arreglo.indexOf('Banana'))
console.warn("encontrada", arreglo.indexOf('ultimo'))
const arregloEliminado = arreglo.splice(1, 1)
console.log("eliminado", arregloEliminado, ' -  actual: ', arreglo)
let copiaArregloUno = arreglo.slice()
let copiaArregloDos = [...arreglo]
let arregloconcatenar = [...arreglo, ...arreglo]

// operadores lógicos



//expresiones

console.log("adición", a += 3);
console.log("1 + - ", a++);
console.log("+ 1 - ", ++a);
console.log("multiplicar", a *= 3);
console.log("dividir", a /= 3);
console.log("restar", a -= 3);



console.log(`${b} word`);
console.log(b += ' world');
console.log(b);




