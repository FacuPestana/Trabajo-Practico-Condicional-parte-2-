/*
= (Se le asiga el valor a algo)
== (Es igual a algo)
<= (Mayor igual)
=> (Menor igual)
!= (Distinto)
&& = y
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
else { 'Tenes el dia para descansar'}

//Punto 5

alert(Contraseña(prompt))
if ((Contraseña) = 'Secreto') {
  return 'Acceso Concedido'
}
else { 'Acceso denegado'}

//Punto 6 
let numero = Number(prompt('Ingresa un numero'))
function multiplo(numero){
  return numero %5 === 0
}

//Punto 7
let Descuento = Number(prompt)('Ingresa tu edad')
function Descuento1(){
    if (Descuento > 65) alert{
      'Perfecto,tenes un descuento del 10%'
    }
}