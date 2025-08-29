myArray = [1,2,3,4,5]

let person = {
    name : "Marc",
    age : 32,
    alias : "marcrmasso"
}

let myValue = myArray[1]
console.log(myValue)

let myName = person.name
console.log(myName)

//desestructuració

//sintaxis a arrays

let [myValue0, myValue1, myValue2] = myArray
console.log(myValue0)
console.log(myValue1)
console.log(myValue2)

//sintaxis d'arrays amb valors predeterminats

let [myValue3, myValue4, myValue5, myValue6, myValue7, myValue8 = 0] = myArray //myValue8 no estava definit a l'array
console.log(myValue3)
console.log(myValue4)
console.log(myValue5)
console.log(myValue6)
console.log(myValue7)
console.log(myValue8)

//ignorar elements de l'array

let [myValue9, , , myValue12] = myArray
console.log(myValue9)
console.log(myValue12)

//sintaxis objectes

let {name, age, alias} = person //va per clau de l'objecte, no per nom de variable
console.log(name)
console.log(age)
console.log(alias)

//sintaxis d'objectes amb valors predeterminats

let {name2, age2, alias2, email = "email@email.com"} = person
console.log(name2) //no existeix
console.log(age2) //no existeix
console.log(alias2) //no existeix
console.log(email)

//sintaxis objectes però amb nous noms de variables

let {name : name3, age : age3, alias : alias3} = person
console.log(name3)
console.log(age3)
console.log(alias3)

//objectes anidats

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

let {name : name4, job : {name : jobName}} = person3
console.log(name4)
console.log(jobName)

//propagació (...)

//sintaxis array
let myArray2 = [...myArray] //copia
//let myArray3 = myArray fa una copia de la referencia
console.log(myArray2)

let myArray3 = [...myArray, 6] //copia afegint contingut

console.log(myArray3)

//combinació d'arrays

let myArray4 = [...myArray, ...myArray2, ...myArray3]
console.log(myArray4)

// combinacio: sintaxis d'objectes

let person4 = {...person, email : "marcrmasso@gmail.com"} //copia afegint contingut
console.log(person4)

let person5 = {...person} //copia d'objecte
console.log(person5)