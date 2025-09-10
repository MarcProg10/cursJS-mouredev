// Excepció

//let myObject
//console.log(myObject.email)

//tractament d'errors

//try-catch

try{
    //codi que s'intenta executar
    console.log(myObject.email)
    console.log("Finalitza l'execució sense erorrs")
}
catch (error) {
    //bloc d'error
    console.log("S'ha produït un error:", error.message)
}

//finally

try{
    //codi que s'intenta executar
    console.log(myObject.email)
    console.log("Finalitza l'execució sense erorrs")
}
catch (error) {
    //bloc d'error
    console.log("S'ha produït un error:", error.message)
}
finally{
    console.log("Aquest codi s'executa sempre")
}

//llançament d'errors

function sumIntegers(a,b){
    if(typeof a !== "number" || typeof b !== "number") {
        throw new TypeError("Esta operaciÃ³n sÃ³lo suma nÃºmeros")
    }
    if (!Number.isInteger(a) || !Number.isInteger(b)) {
        throw new Error("Esta operaciÃ³n sÃ³lo suma nÃºmeros enteros")
    }
    if (a == 0 || b == 0) {
        throw new SumZeroIntegerError("Se estÃ¡ intentando sumar cero", a, b)
    }
    return a + b
}

try {
    console.log(sumIntegers(5, 10))
    // console.log(sumIntegers(5.5, 10))
    console.log(sumIntegers("5", 10))
    // console.log(sumIntegers(5, "10"))
    // console.log(sumIntegers("5", "10"))
} catch (error) {
    console.log("Se ha producido un error:", error.message)
}

// Capturar varios tipos de errores

try {
    // console.log(sumIntegers(5.5, 10))
    console.log(sumIntegers("5", 10))
} catch (error) {
    if (error instanceof TypeError) {
        console.log("Se ha producido un error de tipo:", error.message)
    } else if (error instanceof Error) {
        console.log("Se ha producido un error:", error.message)
    }
}

console.log(sumIntegers(5,10))

//Crear excepcions personalitzades

class SumZeroIntegerError extends Error {
    constructor(message, a, b) {
        super(message)
        this.a = a
        this.b = b
    }

    printNumbers() {
        console.log(this.a, " + ", this.b)
    }
}

try {
    console.log(sumIntegers(0, 10))
} catch (error) {
    console.log("Se ha producido un error personalizado:", error.message)
    error.printNumbers()
}