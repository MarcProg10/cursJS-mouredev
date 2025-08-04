let age = 10

if(age == 37)
    console.log("L'edat és de 37 anys")
else if(age < 18)
    console.log("L'edat és menor a 18 anys")
else
    console.log("L'edat no és de 37 anys ni es menor d'edat")

//operador ternari

const message = age == 37 ? "L'edat és 37" : "L'edat no és 37"
console.log(message)

//switch

let day = 7
let dayName

switch (day){
    case 0 : 
        dayName = "Dilluns"
        break
    case 1 : 
        dayName = "Dimarts"
        break
    case 2 : 
        dayName = "Dimecres"
        break
    case 3 : 
        dayName = "Dijous"
        break
    case 4 : 
        dayName = "Divendres"
        break
    case 5 : 
        dayName = "Dissabte"
        break
    case 6 : 
        dayName = "Diumenge"
        break
    default:
        dayName = "Número de dia incorrecte"
}

console.log(dayName)