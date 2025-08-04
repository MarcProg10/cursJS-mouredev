//operadors

// Operadors aritmètics
let a = 5

console.log(5+10)
console.log(5-10)
console.log(5*10)
console.log(5/10)
console.log(5%10)
console.log(5**2) // Potència
console.log(a++) // Incrementa en 1
console.log(a--)// Decrementa en 1

console.log(a)
a++
console.log(a)

// Operadors d'assignació
let myVariable = 2
console.log(myVariable)
myVariable += 2
console.log(myVariable)

let b = 10

myVariable -= 2
myVariable *= 2
myVariable /= 2
myVariable %= 2
myVariable **= 2

//operadors de comparació
console.log(a > b)
console.log(a < b)
console.log(a >= b)
console.log(a <= b)
console.log(a == b)
console.log(a == 6) //igualtat per valor
console.log(a == "6") //igualtat per valor
console.log(a === a) //igualtat per identitat (tipus i valor)
console.log(a != 6)
console.log(a !== "6") // Desigualtat per identitat (tipus i valor)
console.log(0 == false)
console.log(1 == false)

//Truthy values (valors verdaders)
//tots els numeros positius i negatius menys el 0
//totes les cadenes de text menys la cadena buida
//el boolean true

//Falsy valuyes (valors falsos)
//el 0
//0n
//null
//undefined
//NaN (Not a Number)
//el boolean false
//cadenes de text buides

//Operadors lògics
console.log(5 > 10 && 15 > 20) // AND
console.log(5 > 10 || 15 > 20) //OR
console.log(! (5 > 10)) //not

//operadors ternaris

const isRaining = true

isRaining ? console.log("Està plovent") : console.log("No està plovent")