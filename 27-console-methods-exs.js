// 1. Crea un funciÃ³n que utilice error correctamente.

function showError(){
    console.error("Això és un error")
}

showError()

// 2. Crea una funciÃ³n que utilice warn correctamente.

function showWarning(){
    console.warn("Això és un avís")
}

showWarning()

// 3. Crea una funciÃ³n que utilice info correctamente.

function showInfo(){
    console.info("Això és un missatge d'informació")
}

showInfo()
// 4. Utiliza table.

let data = [
    {nom : "Rafa", edat : 32},
    {nom : "Josefina", edat: 30}
]

console.table(data)

// 5. Utiliza group.

console.group("Ester's blacklist:")
console.log("Maria")
console.log("Oriol")
console.log("Mono")
console.groupEnd()

// 6. Utiliza time.

console.time("Temps d'execució")

for(let i = 0; i < 10; i++){
    console.log("Hola")
}

console.timeEnd("Temps d'execució")

// 7. Valida con assert si un nÃºmero es positivo.

let numero = -1
console.assert(numero > 0, "El número ha de ser positiu")

// 8. Utiliza count.

console.count("Hola")
console.count("Hola")
console.count("Hola")

// 9. Utiliza trace.

function funcA(){
    funcB()
}

function funcB(){
    console.trace("Seguiment de l'execució")
}

funcA()

// 10. Utiliza clear.

//console.clear()