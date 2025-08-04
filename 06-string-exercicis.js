// 1. Concatena dos cadenas de texto.

let nom = "Lamine"
let cognom = "Yamal"

console.log(nom + " " + cognom)

// 2. Muestra la longitud de una cadena de texto.

console.log(cognom.length)

// 3. Muestra el primer y Ãºltimo carÃ¡cter de un string.

console.log(cognom[0])
console.log(cognom[cognom.length-1])

// 4. Convierte a mayÃºsculas y minÃºsculas un string.

console.log(cognom.toUpperCase())
console.log(cognom.toLowerCase())

// 5. Crea una cadena de texto en varias lÃ­neas.

let missatge = `Aquesta és una cadena
de varies
linies`

console.log(missatge)

// 6. Interpola el valor de una variable en un string.

console.log(`El 10 del Barça és en ${nom} ${cognom}`)

// 7. Reemplaza todos los espacios en blanco de un string por guiones.

console.log(missatge.replaceAll(" ", "-"))

// 8. Comprueba si una cadena de texto contiene una palabra concreta.

console.log(missatge.indexOf("cadena"))
console.log(missatge.includes("cadena"))

// 9. Comprueba si dos strings son iguales.

console.log(nom == cognom)

// 10. Comprueba si dos strings tienen la misma longitud.

console.log(nom.length == cognom.length)