// function saludar () {
//     console.log ("hola")
// }

// saludar()

// function pedirDatos () {
//     let nombre = prompt ("Ingrese su Nombre");
//     let mensaje = `Hola ${nombre}`;
//     alert(mensaje);
// }

// pedirDatos();
// pedirDatos();
// pedirDatos();

/*
Estructura de una funcion con parametros

funtion nombre (parametro1,parametro2,..., parametro n){
    codigo de la funcion
}
*/

// function sumar (numero1, numero2){
//     let numero1 = 3
//     let numero2 = 4
//     console.log(numero1 + numero2);
// };

// sumar (3,4)


function sumar (numero1, numero2){
    let mensaje= `El resultado de la operacion es ${numero1 + numero2}`;
    alert (mensaje);
};

let numero1 = parceInt(prompt("Ingrese el primer numero"));
let numero2 = parceInt(prompt("Ingrese el segundo numero"));

sumar (numero1, numero2);