// Classes

class Person {
    constructor(name, age, alias){
        this.name = name, 
        this.age = age,
        this.alias = alias
    }
}

//sintaxis

let person = new Person("Marc", 32, "marcrmasso")
let person2 = new Person("Brais", 37, "Mouredev")

console.log(person)
console.log(person2)

console.log(typeof person)

//valors per defecte

class DefaultPerson {
    constructor(name = "Sense nom", age = 0, alias = "Sense alias"){
        this.name = name,
        this.age = age,
        this.alias = alias
    }
}

let person3 = new DefaultPerson("Marc", 32)

console.log(person3)

//accés a propietats

console.log(person3.alias)
console.log(person3["alias"])

person3.alias = "marcrmasso"

console.log(person3.alias)

class PersonWithMethod {
    constructor(name, age, alias){
        this.name = name, 
        this.age = age,
        this.alias = alias
    }

    walk (){
        console.log("La persona està caminant")
    }
}

let person4 = new PersonWithMethod("Marc", 32, "marcrmasso")
person4.walk()

//propietats privades

class PrivatePerson{
    
    #bank //propietat privada

    constructor(name, age, alias, bank){
        this.name = name
        this.age = age
        this.alias = alias
        this.#bank = bank
    }

    pay(){
        this.#bank
    }
}

let person5 = new PrivatePerson("Marc", 32, "marcrmasso", "IBAN12345")

//no es pot accedir a la propietat privada

//getters setters

class GetSetPerson {
    
    #name
    #age
    #alias
    #bank

    constructor(name, age, alias, bank){
        this.#name = name,
        this.#age = age,
        this.#alias = alias
        this.#bank = bank
    }

    get getName(){
        return this.#name
    }

    get getBank(){
        return this.#bank
    }

    set newBank(newBank){
        this.#bank = newBank
    }
}

let persona6 = new GetSetPerson("Marc", 32, "marcrmasso", "IBAN12345678")
console.log(persona6.getName)
console.log(persona6.getBank)
persona6.newBank = "IBAN9999" //atenció a com modificar
console.log(persona6.getBank)
