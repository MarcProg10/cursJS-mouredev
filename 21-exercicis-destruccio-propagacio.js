// 1. Usa desestructuraciÃ³n para extraer los dos primeros elementos de un array.

myArray = [1,2,3]
let [myValue1, myValue2] = myArray
console.log(myValue1)
console.log(myValue2)

// 2. Usa desestructuraciÃ³n en un array y asigna un valor predeterminado a una variable.

let [myValue3, myValue4, myValue5, myValue6 = 0] = myArray
console.log(myValue3)
console.log(myValue4)
console.log(myValue5)
console.log(myValue6)

// 3. Usa desestructuraciÃ³n para extraer dos propiedades de un objeto.

let cat = {
    name : "Miau",
    weigth : 3,
    color : "Orange"
}

let {name, color} = cat
console.log(name)
console.log(color)

// 4. Usa desestructuraciÃ³n para extraer dos propiedades de un objeto y asÃ­gnalas a nuevas variables con nombres diferentes.

let {name : catName, color : catColor} = cat
console.log(catName)
console.log(catColor)

// 5. Usa desestructuraciÃ³n para extraer dos propiedades de un objeto anidado.

let person3 = {
    name: "Pep",
    age : 37,
    alias : "Pepe",
    walk : function(){
        console.log("La persona està caminant")
    },
    job : {
        name : "Programador",
        exp : 15,
        work : function(){
            console.log("La persona treballa")
        }
    }    

}

let {name : personName, job : {name : jobName}} = person3
console.log(personName)
console.log(jobName)

// 6. Usa propagaciÃ³n para combinar dos arrays en uno nuevo.

let myArray1 = [1,2]
let myArray2 = [3,4]

let combinedArray = [...myArray1, ...myArray2]
console.log(combinedArray)

// 7. Usa propagaciÃ³n para crear una copia de un array.

let copiedArray = [...myArray1]
console.log(copiedArray)

// 8. Usa propagaciÃ³n para combinar dos objetos en uno nuevo.

let car = {
    name : "Ferrari",
    color : "Red"
}

let driver = {
    driverName : "Fernando",
    surname : "Alonso",
    number : 14
}

let combinedObjects = {...car, ...driver}
console.log(combinedObjects)

// 9. Usa propagaciÃ³n para crear una copia de un objeto.

let copiedObject = {...driver}
console.log(copiedObject)

// 10. Combina desestructuraciÃ³n y propagaciÃ³n.

let numbers = [100, 200, 300, 400, 500]
let [num1, num2, ...rest] = numbers
console.log(num1)
console.log(num2)
console.log(rest)