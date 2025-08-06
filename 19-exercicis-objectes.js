// 1. Crea un objeto con 3 propiedades.

let gos = {
    nom : "Leia",
    edat : "5",
    color : "marró" 
}

// 2. Accede y muestra su valor.

console.log(gos)

// 3. Agrega una nueva propiedad.

gos.adorable = true
console.log(gos)

// 4. Elimina una de las 3 primeras propiedades.

delete gos.color
console.log(gos)

// 5. Agrega una funciÃ³n e invÃ³cala.

gos.estaCorrent = function() {
    console.log(`La ${this.nom} està corrent`)
}

console.log("Invoco funcio: " + gos.estaCorrent())

// 6. Itera las propiedades del objeto.

console.log(gos)
for(key in gos){
    console.log(gos[key])
}

// 7. Crea un objeto anidado.

let veterinari = {
    nom : "Veterinari",
    anys : 15,
    animalPreferit : {
        nom : "Micha",
        tipus : "Gat",
        anys : 2
    }
}

// 8. Accede y muestra el valor de las propiedades anidadas.

console.log(veterinari.animalPreferit.nom)
console.log(veterinari.animalPreferit.tipus)
console.log(veterinari.animalPreferit.anys)

// 9. Comprueba si los dos objetos creados son iguales.

let person2 = {
    name: "Brais",
    age: 37,
    country: "EspaÃ±a"
}

let person3 = {
    name: "Brais",
    age: 37,
    country: "EspaÃ±a"
}

console.log(person2 === person3) // false: las referencias no son iguales

function areObjectsEqual(obj1, obj2) {

    const keys1 = Object.keys(obj1)
    const keys2 = Object.keys(obj2)

    // Comprobamos si tienen el mismo nÃºmero de propiedades
    if (keys1.length !== keys2.length) {
        return false
    }

    // Comprobamos si cada propiedad tiene el mismo valor
    for (let key of keys1) {
        if (obj1[key] !== obj2[key]) {
            return false
        }
    }

    return true
}

console.log(areObjectsEqual(person2, person3))

// 10. Comprueba si dos propiedades diferentes son iguales.

console.log(veterinari.nom == veterinari.anys)