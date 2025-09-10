// 1. Captura una excepciÃ³n utilizando try-catch.

let myObject

try{
    console.log(myObject.name)
} catch{
    console.log("Aquest mètode no existeix")
}
finally{
    console.log("Això s'executa sempre")
}

// 2. Captura una excepciÃ³n utilizando try-catch y finally, fet a l'1

// 3. Lanza una excepciÃ³n genÃ©rica.

let a = -1
let b = 20

try{
    if(a < 0 || b < 0){
        throw new Error("Excepció personalitzada, cap nombre pot ser negatiu")
    }
    console.log(a + b)
} catch(error){
    console.error(error.message)
}

// 4. Crea una excepciÃ³n personalizada.

let c = -1
let d = 20

try{
    if(c < 0 || d < 0){
        throw new NegativeNumberError("Excepció personalitzada, cap nombre pot ser negatiu")
    }
    console.log(c+d)
} catch(error){
    console.log("S'ha produït un error: " + error.message)
}

// 5. Lanza una excepciÃ³n personalizada.

// 6. Lanza varias excepciones segÃºn una lÃ³gica definida.

function numberValidation(num){
    if(num == 0){
        throw new InputIsZero("El nombre no pot ser 0")
    }
    if(num < 0){
        throw new NegativeInput("El nombre no pot ser negatiu")
    }
    return true
}

try{
    console.log(numberValidation(-10))
} catch(error){
    console.log("S'ha produït un error: " + error.message)
}

// 7. Captura varias excepciones en un mismo try-catch.

// 8. Crea un bucle que intente transformar a float cada valor y capture y muestre los errores.

myArray = [1,2,3,undefined,true]
for(let i = 0; i < myArray.length; i++){
    try{
        let num = parseFloat(myArray[i])
        console.log(num + " " + typeof num)
        if(typeof num !== "number"){
            throw new Error("El resultat no és un nombre")
        }
    } catch(error){
        console.log("S'ha produït un error: " + error.message)
    }
}

// 9. Crea una funciÃ³n que verifique si un objeto tiene una propiedad especÃ­fica y lance una excepciÃ³n personalizada.

// 10. Crea una funciÃ³n que realice reintentos en caso de error hasta un mÃ¡ximo de 10.