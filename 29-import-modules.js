//importació de moduls

import {add} from "./28-export-modules.js"

import resta from "./28-export-modules.js"

add(5,10)

import { PI, name, Circle } from "./28-export-modules.js"

console.log(PI)
console.log(name)

//console.log(substract(5,10))
console.log(resta(5,10))

//classes

let circle = new Circle(5)
console.log(circle.radius)

console.log(defaultImport(5, 10))

// let myClass = new defaultImport()
// myClass.func()

// Proyecto modular

// import { MyImport } from "./directory/file.js"