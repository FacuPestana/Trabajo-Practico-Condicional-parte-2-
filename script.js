/*
= (Se le asiga el valor a algo)
== (Es igual a algo)
<= (Mayor igual)
=> (Menor igual)
!= (Distinto)
&& = y
|| = O
*/



// Punto 1
prompt("Ingresa tu nombre")
if (nombre == "Santino" || "Nahuel") {
  alert("Bienvenido Señor, es un placer tenerte aquí.");
} else {
  alert("Bienvenido, " + nombre + "!Gracias por unirte a nosotros.");
}

/*Punto 2: Crea un programa que pida la edad del usuario y, si es mayor o igual a 18, muestra un mensaje indicando que es mayor de edad; de lo contrario, muestra un mensaje indicando que es menor de 
edad.Crea un programa que pida la edad del usuario y, si es mayor o igual a 18, muestra un mensaje indicando que es mayor de edad; de lo contrario, muestra un mensaje indicando que es menor de edad.*/
let edadUsuario
prompt('Ingrese su edad')
if (edadUsuario >= 18) {
  alert('Usted puede ingresar')
}
else { ('Usted es menor no puede Ingresar') }


//Punto 3
let CategoriaEdad
prompt('Ingrese su edad')

//Punto 4
alert(DiaLaboral(prompt))
if ((DiaLaboral) = 'Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes') {
  return 'Hoy se trabaja'
}
else { 'Tenes el dia para descansar' }

//Punto 5

alert(Contraseña(prompt))
if ((Contraseña) = 'Secreto') {
  return 'Acceso Concedido'
}
else { 'Acceso denegado'}

//Punto 6 
let numero = Number(prompt('Ingresa un numero'))
function multiplo(numero) {
  return numero % 5 === 0
}

//Punto 7
let Descuento = Number(prompt)('Ingresa tu edad')
function Descuento1(alert) {
  if (Descuento > 65) {
    'Perfecto,tenes un descuento del 10%'
  }
}

//Punto 8 
let Nota = Number(prompt)('Ingresa tu nota')
function Nota1(alert) {
  if (Nota >= 8) {
    'Felicitaciones tu nota es de MS'
  }
  if (Nota >= 60) {
    'Felicitaciones tu nota es una S, aprobaste, pero justito'
  }

  else (Nota <= 5); {
    'Lamento decirte que tendras que venir a hacer el periodo de intensificacion'
  }
}

//Punto 9

let Lunes = 1
let Martes = 2
let Miercoles = 3
let Jueves = 4
let Viernes = 5
let Sabado = 6
let Domingo = 7
function dia(x){ x=Number(prompt('Ingrese numero'))
} 

//Punto 10

año = (prompt('Ingrese un año:')) 
if ((año % 400 == 0) || (año % 4 == 0) && (año % 100 != 0)){
  alert ('Este año es bisiesto')
} else {
  alert ('Este año NO es bisiesto')
}

//Punto 11    
function compararCadenas(cadena1, cadena2) {
  if (cadena1 === cadena2) {
      console.log(cadena1 + 'y' + cadena2 + ' son iguales.');
  } else {
    console.log(cadena1 + 'y' + cadena2 + ' no son iguales.');
  }
}

//12

function calcularEdad(añoNacimiento) {
  const añoActual = new Date().getFullYear(); // Vi en un video como lo podia usar entonces la implementé, Gracias
  const edad = añoActual - añoNacimiento;
  return edad;
}