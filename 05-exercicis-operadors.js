// 1. Crea una variable para cada operaciÃ³n aritmÃ©tica.

let suma = 2 + 2
let resta = 2 - 2
let multiplicacio = 2 * 2
let divisio = 12 / 2
let modul = 2 % 2
let potencia = 2 ** 2

// 2. Crea una variable para cada tipo de operaciÃ³n de asignaciÃ³n, que haga uso de las variables utilizadas para las operaciones aritmÃ©ticas.

let suma2 = suma += 2
let resta2 = resta -= 2
let multiplicacio2 = multiplicacio *= 2
let divisio2 = divisio /= 2
let modul2 = modul %= 2
let potencia2 = potencia ** 2

// 3. Imprime 5 comparaciones verdades con diferentes operadores de comparaciÃ³n.

console.log(5 >= 2)
console.log(2 <= 5)
console.log(2 != 5)
console.log(2 === 2)
console.log(2 == "2")

// 4. Imprime 5 comparaciones falsas con diferentes operadores de comparaciÃ³n.

console.log(5 < 2)
console.log(5 <= 2)
console.log (5 != 5)
console.log( 5 === "5")
console.log(2 === 5)

// 5. Utiliza el operador lÃ³gico and.

console.log(5 > 2 && 10 > 5)

// 6. Utiliza el operador lÃ³gico or.

console.log(2 > 5 || 5 > 2)

// 7. Combina ambos operadores lÃ³gicos.

console.log((5 > 2 && 10 > 2) || (2 > 5 && 3 > 5))

// 8. AÃ±ade alguna negaciÃ³n.

console.log(!(5 > 2 && 10 > 5))

// 9. Utiliza el operador ternario.

const faCalor = true
faCalor ? console.log("Sí, fa calor") : console.log("No, fa fred")

// 10. Combina operadores aritmÃ©ticos, de comparÃ¡ciÃ³n y lÃ³gicas.

let esCompleix = ((10 > (2 + 2)) || (2 > 2 && 1 > 0))
console.log(esCompleix)