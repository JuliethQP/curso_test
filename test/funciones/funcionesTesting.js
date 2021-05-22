//mi libreria de testing

const esperoQue = (dato) => {
    return {
        seaIgual: () => {
            if (datao !== esperado) {
                throw new Error(`${dato} es distinto al ${esperado}`)
            }
        }
    }
}

const prueba = (titulo, funcion) => {
    try {
        funcion()
        console.log(`ok ${titulo}`)
    } catch(error) {
        console.error(`ok ${titulo}`)
        console.log(error)
    }
}

module.exports={esperoQue,prueba}