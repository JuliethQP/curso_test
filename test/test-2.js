const { suma, resta } = require('./funcionesMatematicas')

const assert = require('assert')
let resultado = suma(1, 2)
let esperado = 3
assert.strictEqual(resultado, esperado)
console.log('Todo Ok')