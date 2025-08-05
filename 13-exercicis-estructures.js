// 1. Crea un array que almacene cinco animales.

let arrayAnimals = ["Gos", "Gat", "Mússol", "Lleó", "Conill"]
console.log(arrayAnimals)

// 2. AÃ±ade dos mÃ¡s. Uno al principio y otro al final.

arrayAnimals.push("Pop: Final")
arrayAnimals.unshift("Serp: Principi")
console.log(arrayAnimals)

// 3. Elimina el que se encuentra en tercera posiciÃ³n.

arrayAnimals.splice(2,1)
console.log(arrayAnimals)

// 4. Crea un set que almacene cinco libros.

let mySet = new Set(["Llibre 1", "Llibre 2", "Llibre 3", "Llibre 4", "Llibre 5"])
console.log(mySet)

// 5. AÃ±ade dos mÃ¡s. Uno de ellos repetido.

mySet.add("Llibre 6")
mySet.add("Llibre 1")
console.log(mySet)

// 6. Elimina uno concreto a tu elecciÃ³n.

mySet.delete("Llibre 6")
console.log(mySet)

// 7. Crea un mapa que asocie el nÃºmero del mes a su nombre.

let monthsMap = new Map([
    [1, "Gener"],
    [2, "Febrer"],
    [3, "Març"],
    [4, "Abril"],
    [5, "Maig"],
    [6, "Juny"],
    [7,"Juliol"],
    [8,"Agost"],
    [9,"Setembre"],
    [10,"Octubre"],
    [11,"Novembre"],
    [12,"Desembre"]
])
console.log(monthsMap)

// 8. Comprueba si el mes nÃºmero 5 existe en el map e imprime su valor.

if(monthsMap.has(5))
    console.log(monthsMap.get(5))

// 9. AÃ±ade al mapa una clave con un array que almacene los meses de verano.

monthsMap.set("estiu",["Juny", "Juliol", "Agost"])
console.log(monthsMap)

// 10. Crea un Array, transfÃ³rmalo a un Set y almacÃ©nalo en un Map.

let myArray = ["Marc", "RM", "marcrmasso", "marcrmasso@gmail.com", 32]
let setFromArray = new Set(myArray)
let mapFromSet = new Map()
mapFromSet.set("Sóc jo", setFromArray)
console.log(mapFromSet)
