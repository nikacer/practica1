// promesas
const axios = require('axios')

axios.get('https://pokeapi.co/api/v2/pokemon').then(data => {
    console.log(data.data.count);
})

const promesa = new Promise((resolve, reject) => {
    resolve(5)
})

promesa.then(console.log).catch().finally(() => console.log('fin'))

asincrona()

// funciones

async function asincrona() {
    try {
        const result = await axios.get('https://pokeapi.co/api/v2/pokemons')
        console.log(result.data.count)
    } catch (err) {
        console.error('fallo')
    }
}

const asincronaDos = async () => {
    try {
        const result = await axios.get('https://pokeapi.co/api/v2/pokemon')
        console.log(result.data.count)
    } catch (err) {
        console.error('fallo')
    }
}

asincronaDos()