// Objects

// Sintaxis

let person = {
    name : "Marc",
    age : 32,
    alias : "marcrmasso"
}

// Accés a propietats

//Notació punt

console.log(person.name)

// Notació parentesis

console.log(person["name"])

// Modificació

person.name = "Marc RM"
console.log(person.name)

console.log(typeof person.age)
person.age = "37"
console.log(person.age)
console.log(typeof person.age)

// Eliminació de propietats

delete person.age

console.log(person)

// Nova propietat

person.email = "marcrmasso@gmail.com"
console.log(person)

person.age = 37
console.log(person)

//mètodes (funcions)

let person2 = {
    name: "Pep",
    age : 37,
    alias : "Pepe",
    walk : function(){
        console.log("La persona està caminant")
    }
}

person2.walk()

//anidació d'objectes

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

console.log(person3)

console.log(person3.job.name)
person3.job.work()

//igualtat d'objectes

let person4 = {
    name : "Marc",
    age : 32,
    alias : "marcrmasso"
}

let person5 = {
    name : "Marc",
    age : 32,
    alias : "marcrmasso"
}

console.log(person4)
console.log(person5)


console.log(person4 == person5) //es comparen referencies, no son tipus primitius
console.log(person4 === person5)

console.log(person4. name == person5.name)

// Iteració

for(let key in person4){
    console.log(key + ": " + person4[key] )
}

// funcions com a objectes

function Person(name, age){ //hauria de ser una class
    this.name = name,
    this.age = age
}

let personaNova = new Person("Marc", 32)
console.log(personaNova)

