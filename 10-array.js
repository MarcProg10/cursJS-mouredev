//array

//declaració

let myArray = [] //recomanada
let myArray2 = new Array()

//inicialització

myArray = [1]
myArray2 = new Array(1)

console.log(myArray)
console.log(myArray2)

myArray = [1,2,3,4]
myArray2 = new Array(1,2,3,4)

console.log(myArray)
console.log(myArray2)

myArray2 = new Array(3)
myArray2[0] = "Marc"
myArray2[1] = "RM"
myArray2[2] = "32"
console.log(myArray2)

myArray = []
myArray[2] = "Marc"
myArray[1] = "RM"
console.log(myArray)

//mètodes comuns

myArray = []

//push i pop

myArray.push("Marc")
myArray.push("RM")
myArray.push("32")
console.log(myArray)

console.log(myArray.pop())
console.log(myArray)

//shift i unshift

myArray.shift() //elimina el primer element de l'array
console.log(myArray)

myArray.unshift("Marc", 37) //afegeix un llistat des del principi
console.log(myArray)

//length

console.log(myArray.length)

//clear

myArray = []
myArray.length = 0 //poc elegant
console.log(myArray)

//slice

myArray.push("Marc", "RM", "marcrmasso", 32)
console.log(myArray)
let myNewArray = myArray.slice(1,2) //l'últim element (el 2) no el té en compte
console.log(myNewArray)

//splice

myArray.splice(1,3) //index on començar, quants elements eliminar
console.log(myArray)

myArray = ["Marc", "RM", "marcrmasso", 32, true]
console.log(myArray)
myArray.splice(1,2,"Nova entrada")
console.log(myArray)
