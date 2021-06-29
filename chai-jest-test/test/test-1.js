const { suma, resta } = require('./funcionesMatematicas')
let resultado, esperado
resultado = suma(1, 2)
esperado = 3

let resultado2,esperado2
resultado2 = resta(2, 2)
esperado2 =0
if (resultado !== esperado) {
    throw new Error(`${resultado} es difenres al ${esperado}`)
}

if (resultado2 !== esperado2) {
    throw new Error(`${resultado2} es difenres al ${esperado2}`)
}
console.log('test ok ')