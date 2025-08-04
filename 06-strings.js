//strings

let myName = "Marc"
let greeting = "Hola, " + myName + "!"
console.log(greeting)

//longitud
console.log(greeting.length)

//acces a caracters
console.log(greeting[0])
console.log(greeting[1])

//metodes comuns
console.log(greeting.toUpperCase())
console.log(greeting.toLowerCase())
console.log(greeting.indexOf("Marc"))
console.log(greeting.indexOf("Hola"))
console.log(greeting.indexOf("Pep"))
console.log(greeting.includes("Hola"))
console.log(greeting.includes("Pep"))
console.log(greeting.slice(0,6))
console.log(greeting.replace("Marc","Pep"))

//Template literals (plantilles literals)

let message = `Hola, aquest és el meu
curs de JavaScript`
console.log(message)

console.log(`Hola, ${myName}!`)
