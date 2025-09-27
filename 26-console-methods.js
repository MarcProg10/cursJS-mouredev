//Console

//log

console.log("Hola, Javascript!")

//error

console.error("Aquest és un missatge d'error")
console.error("Error al contestar-se a la base de dades"), new Error("Conexió fallida")

//warn

console.warn("Aquest és un missatge d'advertència")

//info

console.info("Missatge d'informarció")

//table

let data = [
    ["Pep", 27],
    ["Xusep", 3]
]

console.table(data)

data = [
    { name :"Pep", age: 27},
    {name : "Xusep", age : 3}
]

console.table(data)

//group

console.group("Usuari:")
console.log("Nom: Pep")
console.log("Edat: 27")
console.groupEnd() //indica final de l'agrupació per consola

console.log("akhfakdf")

//time

console.time("Temps d'execució")

for(let i = 0; i < 10000; i++){

}

console.timeEnd("Temps d'execució") //ha de ser el mateix temps que el d'obertura

//assert (validació)

let age = 18
console.assert(age >= 17, "L'usuari ha de ser major d'edat")

//count

console.count("Click")
console.count("Click")
console.count("Click")
console.countReset("Click")
console.count("Click")

//trace

function funcA(){
    funcB()
}

function funcB(){
    console.trace("Seguiment de l'execució")
}

funcA()

//clear

//console.clear()