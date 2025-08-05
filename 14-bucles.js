//loops, bucles

//for

for (let i = 0; i < 5; i++){
    console.log(`Hola ${i}`)
}

const numbers = [1,2,3,4,5]
for(let i = 0; i < numbers.length; i++){
    console.log(`Element: ${numbers[i]}`)
}

//while
let i = 0
while(i < 5){
    console.log(`Hola ${i}`)
    i++
}

//do while (s'executa mínim una vegada)
i = 6
do{
    console.log(`Hola ${i}`)
    i++
} while(i < 5)

//for of

myArray = [1,2,3,4]


mySet = new Set(["Marc", "RM", "marcrmasso", 32, true])


myMap = new Map([
    ["name", "Marc"],
    ["email", "marcrmasso@gmail.com"],
    ["edat", 32]
])

for(let valor of myArray){
    console.log(valor)
}

for(let valor of mySet){
    console.log(valor)
}

for(let valor of myMap){
    console.log(valor)
}

//bones pràctiques

//break i continue

for (let i = 0; i < 10; i++){
    if(i == 5)
        continue //salta una iteració
    else if (i == 6)
        break //acaba amb l'execució del bucle
    console.log(`Hola ${i}`)
}




