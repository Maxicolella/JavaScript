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

// ---

const a = 20 

alert  ('Bienvenido a Calculadora Maxi.')


function pedirNumeros () {
    let numero1 = parseInt(prompt("Ingrese el primer numero"));
    let numero2 = parseInt(prompt("Ingrese el segundo numero"));

    if (isNaN(numero1) || isNaN (numero2)) {
    alert ('error, no son números. Ingrese los números nuevamente')
        pedirNumeros();
    } else {
            sumar(numero1,numero2)
    }
}

//pedirNumeros ()

function sumar (numero1, numero2){
    let mensaje= `El resultado de la operacion es ${numero1 + numero2}`;
    alert (mensaje);
};

// let numero1 = parseInt(prompt("Ingrese el primer numero"));
// let numero2 = parseInt(prompt("Ingrese el segundo numero"));

pedirNumeros   ()

sumar (numero1, numero2);



// if (pedirNumeros() % 2 ==  0) {
//       alert ("El numero es par");
//  } else {
//       alert ("EL numero es impar");
// }