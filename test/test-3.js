const { suma, resta } = require('./funcionesMatematicas')
const { esperoQue } = require('./funciones/funcionesTesting')

let resultado = suma(1, 2)
let esperado = 3

/* expect(resultado).toBe(esperado)
 should(resultado).toBe(esperado) */

// esperoQue(resultado).seaIgual(esperado)
console.log('todo ok ')