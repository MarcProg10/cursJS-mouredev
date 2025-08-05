// Map clau,valor

let myMap = new Map()
console.log(myMap)

//inicialització

myMap = new Map([
    ["name", "Marc"],
    ["email", "marcrmasso@gmail.com"],
    ["edat", 32]
])

console.log(myMap)

//mètodes i propietats

//set

myMap.set("alias", "marcrmasso")
myMap.set("name", "Pep")
console.log(myMap)

//get

console.log(myMap.get("name"))
console.log(myMap.get("surname"))

//has

console.log(myMap.has("surname"))
console.log(myMap.has("edat"))

// delete

myMap.delete("email")
console.log(myMap)

//keys, values i entries

console.log(myMap.keys())
console.log(myMap.values())
console.log(myMap.entries())

//size

console.log(myMap.size)

//clear

myMap.clear()
console.log(myMap)