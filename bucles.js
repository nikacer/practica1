const datos = ['Mora', 'fresa', 'limon', 'uva', 'tamarindo', 'Mango']

for (let dato of datos) {
    console.log(dato);
}
console.log("\nfor 2");

for (let i = 0; i < datos.length; i++) {
    console.log(datos[i]);
}

console.log("\nfor 3");

datos.forEach(dato => {
    console.log(dato);
})

console.log("\nfor 3");


for (let dato in datos) {
    console.log(dato);
}
console.log("\nArray.protorype.reduce()");

const reduce = datos.reduce((previousValue, currentValue) => {
    return previousValue + ' ' + currentValue;
})

console.log(reduce);

console.log("\nArray.protorype.map()");

const map = datos.map((dato) => {
    return dato.length;
})

console.log(map);

console.log("\nArray.protorype.filter()");

const filter = datos.map((dato) => {
    return dato.length < 5;
})

console.log(filter);


console.log("\nArray.protorype.find()");

const find = datos.find((dato) => {
    return dato.length < 5;
})

console.log(find);


