// Fecha actual
let fechaActual = new Date()
console.log(fechaActual)

// Fecha nacimiento

let fechaNacimiento = new Date(1996, 4, 15)
console.log(fechaNacimiento)

// Comparo fechas

let esMasTarde = fechaActual > fechaNacimiento
console.log(esMasTarde)

// Dia nacimiento

let diaNacimiento = fechaNacimiento.getDate()
console.log(diaNacimiento)

// Mes nacimiento

let mesNacimiento = fechaNacimiento.getMonth()
console.log(mesNacimiento)

// A;o nacimiento

let anioNacimiento = fechaNacimiento.getFullYear()
console.log(anioNacimiento)