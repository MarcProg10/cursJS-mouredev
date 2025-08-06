// NOTA: Explora diferentes sintaxis de funciones para resolver los ejercicios.

// 1. Crea una funciÃ³n que reciba dos nÃºmeros y devuelva su suma.

function sum(a,b){
    return a+b
}

console.log(sum(2,8))

// 2. Crea una funciÃ³n que reciba un array de nÃºmeros y devuelva el mayor de ellos.

function greatestElement(myArray){
    let greatest = 0
    myArray.forEach(element => {
        if(element > greatest)
            greatest = element
    });
    return greatest
}

myArray = [1,2,3,4,5]
console.log(greatestElement(myArray))

// 3. Crea una funciÃ³n que reciba un string y devuelva el nÃºmero de vocales que contiene.

function isVocal(character){
    vocalsArray = new Set(['A', 'E', 'I', 'O', 'U'])
    if(vocalsArray.has(character.toUpperCase()))
        return true
    return false    
}

function howManyVocals(myString){
    let nVocals = 0
    for(let i = 0; i < myString.length; i++){
        if(isVocal(myString[i]))
            nVocals++
    }
    return nVocals
}

const vocalString = "Abecedari"
console.log(howManyVocals(vocalString))

// 4. Crea una funciÃ³n que reciba un array de strings y devuelva un nuevo array con las strings en mayÃºsculas.

function arrayToUpperCase(originalArray){
    let newArray = []
    originalArray.forEach( element => {
        newArray.push(element.toUpperCase())
    })

    return newArray
}

const arrayToConvert = ['a', 'b', 'c', 'd']
const newArray = arrayToUpperCase(arrayToConvert)
console.log(newArray)

// 5. Crea una funciÃ³n que reciba un nÃºmero y devuelva true si es primo, y false en caso contrario.

function isPrimary(number){
    
    if(number <= 1)
        return false
    for(let i = 2; i < number; i++){
        if(number % i === 0)
            return false
    }

    return true
    
}

console.log(isPrimary(3))

// 6. Crea una funciÃ³n que reciba dos arrays y devuelva un nuevo array que contenga los elementos comunes entre ambos.

function commonElements(array1, array2){
    
    let setArray2 = new Set(array2)
    let commonSet = new Set()
    
    for(let i = 0; i < array1.length; i++){
        if(setArray2.has(array1[i]))
            commonSet.add(array1[i])             
    }

    let arrayToReturn = Array.from(commonSet)
    return arrayToReturn 
}

array1 = [1,0,0,4]
array2 = [0,0,1,4,6]

console.log(commonElements(array1,array2))

// 7. Crea una funciÃ³n que reciba un array de nÃºmeros y devuelva la suma de todos los nÃºmeros pares.

function evenNumbersSum(numbersArray){
    let total = 0
    for(let i = 0; i < numbersArray.length; i++){
        if(numbersArray[i] % 2 == 0)
            total += numbersArray[i]
    }
    return total
}

let numbersArray = [1,2,3,4]
console.log(evenNumbersSum(numbersArray))

// 8. Crea una funciÃ³n que reciba un array de nÃºmeros y devuelva un nuevo array con cada nÃºmero elevado al cuadrado.

function powArrayElements(numbersArray){
    let newArray = []
    for(let i = 0; i < numbersArray.length; i++){
        newArray.push(numbersArray[i]**2)
    }
    return newArray
}

console.log(powArrayElements(numbersArray))

// 9. Crea una funciÃ³n que reciba una cadena de texto y devuelva la misma cadena con las palabras en orden inverso.

function reverseString(originalString){
    let reversedString = []
    for(let i = originalString.length-1; i >= 0; i--){
        reversedString.push(originalString[i])
    }
    return reversedString
}

console.log(reverseString("Marc"))

// 10. Crea una funciÃ³n que calcule el factorial de un nÃºmero dado.

function numberFactorial(number){
    if(number <= 0)
        return null
    let total = 1
    for(let i = 1; i <= number; i++){
        total *= i
    }
    return total
}

console.log(numberFactorial(9))