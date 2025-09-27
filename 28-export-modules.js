//exportació de mòduls

//funcions

export function add(a, b){
    return a + b
}

console.log(add(5,10))

// propietats

export const PI = 3.1416
export let name = "Marc"

//exportació per defecte

export default function substract(a,b){ //nomes admet una exportació de funcionalitat amb default
    return a-b
}

// Clases

export class Circle{
    constructor(radius){
        this.radius = radius
    }

    area(){
        return Math.PI * Math.pow(this.radius,2)
    }
}

// ImportaciÃ³n por defecto

console.log(defaultImport(5, 10))

// let myClass = new defaultImport()
// myClass.func()

// Proyecto modular

// import { MyImport } from "./directory/file.js"