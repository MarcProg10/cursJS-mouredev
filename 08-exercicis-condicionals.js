// if/else/else if/ternaria

// 1. Imprime por consola tu nombre si una variable toma su valor.

let nom = "Marc"
if(nom == "Marc")
    console.log(nom)
else
    console.log("Nom diferent de Marc")

// 2. Imprime por consola un mensaje si el usuario y contraseÃ±a concide con unos establecidos.

let usuari = "Marc"
let contrasenya = "1234"

usuari == "Marc" && contrasenya == "1234" ? console.log("Login correcte") : console.log("Login incorrecte, usuari o contrasenya incorrecte")

// 3. Verifica si un nÃºmero es positivo, negativo o cero e imprime un mensaje.

let numero = -1

if(numero > 0)
    console.log("El número és positiu")
else if(numero < 0)
    console.log("El número és negatiu")
else
    console.log("El número és zero")

// 4. Verifica si una persona puede votar o no (mayor o igual a 18) e indica cuÃ¡ntos aÃ±os le faltan.

edat = 20
if(edat >= 18)
    console.log("Sí, pot votar")
else
    console.log(`A la persona li falten ${18 - edat} anys per a poder votar`)

// 5. Usa el operador ternario para asignar el valor "adulto" o "menor" a una variable dependiendo de la edad .

const esMajor = edat >= 18 ? "adult": "menor" 
console.log(esMajor)

// 6. Muestra en que mes nos encontramos dependiendo del valor de una variable "mes".

let mes = 1
let nomMes

switch(mes){
    case 0 : 
        nomMes = "Gener"
        break
    case 1 : 
        nomMes = "Febrer"
        break
    case 2 : 
        nomMes = "Març"
        break
    case 3 : 
        nomMes = "Abril"
        break
    case 4 :
        nomMes = "Maig"
        break
    case 5 :
        nomMes = "Juny"
        break
    case 6 : 
        nomMes = "Juliol"
        break
    case 7 :
        nomMes = "Agost"
        break
    case 8 :
        nomMes = "Setembre"
        break
    case 9 :
        nomMes = "Octubre"
        break
    case 10 :
        nomMes = "Novembre"
        break
    case 11 :
        nomMes = "Desembre"
        break
    default :
        nomMes = "Mes incorrecte"
        break 
}
console.log(nomMes)

// 7. Muestra el nÃºmero de dÃ­as que tiene un mes dependiendo de la variable del ejercicio anterior.

switch(nomMes){
    case "Gener" :
        console.log("31 dies")
        break
    case "Febrer" :
        console.log("28 dies")
        break
    case "Març" :
        console.log("31 dies")
        break
    case "Abril" :
        console.log("30 dies")
        break
    case "Maig" :
        console.log("31 dies")
        break
    case "Juny" :
        console.log("30 dies")
        break
    case "Juliol" :
        console.log("31 dies")
        break
    case "Agost" :
        console.log("31 dies")
        break
    case "Setembre" :
        console.log("30 dies")
        break
    case "Octubre" :
        console.log("31 dies")
        break
    case "Novembre" :
        console.log("30 dies")
        break
    case "Desembre" :
        console.log("31 dies")
        break
    default :
        console.log("Mes incorrecte")
        break
}

// switch

// 8. Usa un switch para imprimir un mensaje de saludo diferente dependiendo del idioma.

const idioma = "Català"

switch(idioma){
    case "Català" :
        console.log("Benvingut")
        break
    case "Castellà" :
        console.log("Bienvenido")
        break
    case "Francés" :
        console.log("Bienvenue")
        break
    case "Anglés" :
        console.log("Welcome")
        break
    default :
        console.log("Idioma incorrecte")
        break    
}

// 9. Usa un switch para hacer de nuevo el ejercicio 6.

// 10. Usa un switch para hacer de nuevo el ejercicio 7.