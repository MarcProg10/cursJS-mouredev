//no admet duplicats
//no permet accés directe als indexs: el set està indexat per hash

//declaracio

let mySet = new Set()

//inicialització

mySet = new Set(["Marc", "RM", "marcrmasso", 32, true])
console.log(mySet)

//mètodes comuns

//add i delete

mySet.add("marcrmasso@gmail.com")
console.log(mySet)

mySet.delete("marcrmasso@gmail.com") //s'esborra per valor
console.log(mySet)

//has

console.log(mySet.has("Marc"))
console.log(mySet.has("Pep"))

//size

console.log(mySet.size)

//convertir un set a array

let myArray = Array.from(mySet)
console.log(myArray)

//convertir un array a set

mySet = new Set(myArray)
console.log(mySet)

//no admet duplicats

mySet.add("Marc")
console.log(mySet)

