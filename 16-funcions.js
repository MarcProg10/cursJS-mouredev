//funcions

//simple

function myFunc(){
    console.log("Hola, funció!")
}

for(let i = 0; i < 5; i++)
    myFunc()

//amb paràmetres

let myName = "Marc"
function myFuncWithParams(name){
    console.log(`Hola, ${myName}`)
}

myFuncWithParams(myName)

//funcions anònimes

const myFunct2 = function(myName){
    console.log(`Hola, ${myName}!`)
}

myFunct2(myName)

//arrow functions (es sol usar per a fer one-liners)

const myFunct3 = (name) => (console.log(`Hola, ${name}!`)
)

myFunct3(myName)

//parametres

function sum(a, b){
    console.log(a+b)
}

sum(5,10)

//valors per defecte

function defaultSum(a = 0, b = 0){
    console.log(a+b)
}

defaultSum(5,10)
defaultSum()
defaultSum(5)

//retorn de valors

function mult(a,b){
    return a * b
}

let result = mult(5,10)
console.log(result)

//funcions anidades

function extern(){
    console.log("Funció externa")
    function intern(){
        console.log("Funció interna")
    }
    intern() //es pot executar només dins la funció
}

extern()
//intern() esta fora de l'scope, no es veu des de fora

//funcions d'ordre superior

function applyFunct(funct, param){
    funct(param)
}

applyFunct(myFunct3,"Funció ordre superior")

// forEach

myArray = [1,2,3,4,5]
myArray.forEach(element => {console.log(element)})

myArray.forEach(function (value){
    console.log(value)
})

mySet = new Set(["Marc", "RM", "marcrmasso", 32, true])

myMap = new Map([
    ["name", "Marc"],
    ["email", "marcrmasso@gmail.com"],
    ["edat", 32]
])

mySet.forEach(element => {console.log(element)})

myMap.forEach(element => {console.log(element)})
