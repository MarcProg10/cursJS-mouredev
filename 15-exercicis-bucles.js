// NOTA: Explora diferentes sintaxis de bucles para resolver los ejercicios.

// 1. Crea un bucle que imprima los nÃºmeros del 1 al 20.

for(let i = 1; i <= 20; i++)
    console.log(i)

let i = 1
while(i <= 20){
    console.log(i)
    i++
}

// 2. Crea un bucle que sume todos los nÃºmeros del 1 al 100 y muestre el resultado.

let acumulat = 0
let numero = 1
while(numero <= 100){
    acumulat += numero
    numero++
}
console.log(acumulat)

// 3. Crea un bucle que imprima todos los nÃºmeros pares entre 1 y 50.

for(let i = 1; i <= 50; i++){
    if(i % 2 == 0)
        console.log(i)
}

// 4. Dado un array de nombres, usa un bucle para imprimir cada nombre en la consola.

const namesArray = ["Marc", "Pep", "Maria", "Elsa", "Júlia"]
for(let i = 0; i < namesArray.length; i++)
    console.log(namesArray[i])

// 5. Escribe un bucle que cuente el nÃºmero de vocales en una cadena de texto.

let cadena = "Abecedari"
let vocals = ['A', 'E', 'I', 'O', 'U', 'a', 'e', 'i', 'o', 'u']
let count = 0
for(let i = 0; i < cadena.length; i++){
    if(vocals.includes(cadena[i]))
        count++
}
console.log(count)

// 6. Dado un array de nÃºmeros, usa un bucle para multiplicar todos los nÃºmeros y mostrar el producto.

let numbersArray = [1,2,3,4,5]
acumulat = numbersArray[0]
for(let i = 1; i < numbersArray.length; i++)
    acumulat *= numbersArray[i]
console.log(acumulat)

// 7. Escribe un bucle que imprima la tabla de multiplicar del 5.

let nombre = 1
while(nombre <= 10){
    console.log(`5 per ${nombre} = ${5*nombre}`)
    nombre++
}

// 8. Usa un bucle para invertir una cadena de texto.

let cadenaOriginal = "Abecedari"
let cadenaInvertida = []
let indexInserir = 0
let indexExtreure = cadenaOriginal.length-1

while(indexExtreure >= 0){
    cadenaInvertida[indexInserir] = cadenaOriginal[indexExtreure]
    indexExtreure--
    indexInserir++
}
console.log(cadenaInvertida)

// 9. Usa un bucle para generar los primeros 10 nÃºmeros de la secuencia de Fibonacci.

let fibonacci = [0, 1]
let n = 2
while (n < 10) {
    fibonacci.push(fibonacci[n - 1] + fibonacci[n - 2])
    n++
}
console.log(fibonacci)

// 10. Dado un array de nÃºmeros, usa un bucle para crear un nuevo array que contenga solo los nÃºmeros mayores a 10.

let myArray = [1,5,10,15,20,25]
let newArray = []

for(let i = 0; i < myArray.length; i++){
    if(myArray[i] > 10)
        newArray.push(myArray[i])
}
console.log(newArray)