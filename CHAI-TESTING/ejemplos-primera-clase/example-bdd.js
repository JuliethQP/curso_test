//agregamos la libreria de afirmación
const expect = require('chai').expect

/**
 * yo como  @rol usuario de primaria @iWant deseo calcular la suma de 2 numeros
 * @soThat para tener el resultado debido a que no aprendi a sumar
 */

/**  
 * @given dado el usuario de primaria require una calculadora que permita sumar 2 valores
 * @when cuando el ingrese al curso 
 * @then debido a que tiene limitaciones en el aprendizaje
 */

//definimos el comportamiento del test
describe('yo como usuario de primaria deseo calcular la suma de 2 numeros', () => {
    const num1 = 1
    const num2 = 3
    //definimos el primer paso para ejecutar el comportamiento

    it("se suma los valores de 2+3 y se espera un valor de 5", () => {
        let resultado = num1 + num2
        expect(5).to.be.equal(resultado)
    })

    it("se enviaran dos valores erroneso para que el duaurioa tenga control al enviar informacion", () => {
        let resultado = num1 + num2
        expect(5).to.be.equal(resultado)
    })
})
