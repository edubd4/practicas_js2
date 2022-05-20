"use strict";
//1-

// let edad = parseInt(prompt('Ingrese su edad'));

// if (edad >= 18){
//     document.write('Usted ya puede conducir');
// } else {
//     document.write('lo siento, todavia eres menor de edad');
// }

//2

let nota = parseInt(prompt('Ingrese la nota obtenida'))

if (nota <= 2) {
    document.write('Muy deficiente')
} else if(nota <= 4) {
    document.write('Insuficiente')
} else if (nota <= 6) {
    document.write('Suficiente')
} else if (nota <= 7) {
    document.write('Bien')
} else if (nota <= 9) {
    document.write('Notable')
} else if(nota <= 10) {
    document.write('Sobresaliente')
} else if(nota >= 11) {
    document.write('El valor ingresado no es correcto')
}