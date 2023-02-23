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

function sumar (numero1, numero2){
    let mensaje= `El resultado de la operacion es ${numero1 + numero2}`;
    alert (mensaje);
};

pedirNumeros   ()

let operacion = prompt("Ingrese la operación");

while (operacion != "ESC") {
  switch (operacion) {
    case "SUMAR":
      pedirNumeros   ()
      break;

    case "RESTAR":
      alert("SITIO EN CONSTRUCCION");
      break;

    default:
      alert("OPERACION NO TIPIFICADA");
      break;
  }

  operacion = prompt("Ingrese la operación");
}
