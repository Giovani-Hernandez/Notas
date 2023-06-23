/*Expresiones condicionales
Conjunto de instrucciones que se ejecutan si se cumple una condicion 

---if
---else
---else if
---switch

==== Declaración if
Sintaxis

  if(condition){
      //bloque de código que se ejecuta si la condición es verdadera
  }
  */
//Ejemplo para validar la mayotia de edad
let edadDaniel = 7;

if (edadDaniel >= 18) {
  console.log("Es mayor de edad");
}

/*==== Declaración else
 Se utiliza como instrucción para especificar un bloque de código que se ejecuta si la condición es falsa.
 Sintaxis

   if(condition){
       //bloque de código que se ejecuta si la condicion es verdadera
   } else{
      /bloque de código que se ejecuta sila condicion es falsa/
   }
 */

if (edadDaniel >= 18) {
  console.log("Es mayor de edad");
} else {
  console.log("Es menor de edad");
}

//Ejemplo de comparación entre dos numeros con declaración if-else
let num1 = 845369;
let num2 = 45872;

if (num1 < num2) {
  console.log(`El número ${num1} es mayor que ${num2}`);
} else {
  console.log(`El numero ${num2} es mayor que ${num1}`);
}

// Segunda forma
let resultado;

if (num1 > num2) {
  resultado = "El número" + num1 + "es mayor que" + num2;
} else {
  resultado = "El número" + num2 + "es mayor que" + num1;
}
console.log(resultado);

// Determinar si un número es par o impar (preguta de entrevista)

let numerito = 18979;

if (numerito % 2 === 0) {
  console.log("El numero " + numerito + " es par");
} else {
  console.log("El numero " + numerito + " es impar");
}

/*
========================Operador ternario================
Son una forma concisa de escribir una expresión condicional en un lenguaje de programación. Sel puede utilizar para realizar la misma tarea de una declaración if-else completa.

Sintaxis
(Condición)? expresion_true : expresion_false;
 */

// Determinar si un numero es par o impar utilizando OPERADOR TERNARIO
let numerito2 = 18978;

numerito2 % 2 === 0
  ? console.log("El numero" + numerito + "es par")
  : console.log("El numero" + numerito + "es impar");

// Tercera forma

/*
=====================Sentencia else-if======================
Se utiliza para especificar una nueva condición si la primera condicion es falsa (no se cumple)

Sintaxis
  if(condicion1){
    //Si se cumple, se ejecuta este bloque
  }else if(condicion2){
    //Si se cumple, se ejecuta este bloque
  }else if(condicion3){
    //Si se cumple, se ejecuta este bloque
  }
*/
/*
Determinar qué día de la semana corresponde al número, según la siguiente tabla:
    - 1 = Lunes
    - 2 = Martes
    - 3 = Miércoles
    - 4 = Jueves
    - 5 = Viernes
*/

let dia = 8;

if (dia === 1) {
  console.log("Lunes");
} else if (dia === 2) {
  console.log("Martes");
} else if (dia === 3) {
  console.log("Miercoles");
} else if (dia === 4) {
  console.log("Jueves");
} else if (dia === 5) {
  console.log("Viernes");
} else if (dia === 6) {
  console.log("Sabado");
} else if (dia === 7) {
  console.log("Domingo");
} else {
  console.log("Numero invalido,intente nuevamente");
}

/*Instrucciones: Crea un programa en Java Script en donde le muestes l usuraio si es de mañana, de tarde o de noche.
Requierimientos:
  -La hora almacenada en una variable(let hora)
  -Establecer el formato de 24 horas (0 - 23 horas)
  -Tablita para determinar los horarios correspondientes a mañana, tarde, noche y madrugada
    *6-12 es de mañana (hora >= 6 && hora <= 12)
    *13-18 es de tarde (hora >= 13 && hora <= 18)
    *19-23 es de noche (hora >= 19 && hora <= 23)
    *0-5 es de madrugada (hora >= 0 && hora <= 5)
    * Si hora está fuera de los valores 0 a 23, es inválido
*/

let hora = 5;

if (hora >= 6 && hora <= 12) {
  console.log("Es de mañana");
} else if (hora >= 13 && hora <= 18) {
  console.log("Es de tarde");
} else if (hora >= 19 && hora <= 23) {
  console.log("Es de noche segun la mayoría de la CH28");
} else if (hora >= 0 && hora <= 5) {
  console.log("Es de madrugada, aun que nadie da las buenas madrugadas");
} else {
  console.log("Escribe una hora valida entre las 0 y las 23");
}

// ====================Sentencias anidadas==================
// Instrucciones: crear un programa para determinar si es mayor de edad. Si es mayor de edad y tiene menos de 65 años, catalogarlo como adulto, si tiene más de 65 años catalogarlo como adulto mayor

let edadGiovani = 26;

if (edadGiovani >= 18) {
  if (edadGiovani < 65) {
    console.log("Es un adulto");
  } else {
    console.log("Es adulto mayor");
  }
} else if (edadGiovani >= 12) {
  console.log("Es un adolecente");
} else if (edadGiovani >= 3) {
  console.log("Es un niño");
} else {
  console.log("Es un bebé");
}

// Verificar la hora del día
const today = new Date(); //Nuevo objeto con un constructor Date (). Sirve para traer la hora y fecha actual.
let hour = today.getHours(); //Método para invocar la hora del día entero con formato de 24 horas
//today.toLocaleTimeSstring para hora con minutos y segundos

console.log(hour);

function greeting() {
  if (hour >= 6 && hour <= 12) {
    console.log("Es de mañana");
  } else if (hour >= 13 && hour <= 18) {
    console.log("Es de tarde");
  } else if (hour >= 19 && hour <= 23) {
    console.log("Es de noche segun la mayoría de la CH28");
  } else if (hour >= 0 && hour <= 5) {
    console.log("Es de madrugada, aun que nadie da las buenas madrugadas");
  } else {
    console.log("Escribe una hora valida entre las 0 y las 23");
  }
}
greeting();

//Verificar la hora del día mediante una función pero de otra manera, guardando los bloques de ejecución en una nueva variable.
function saludo () {
  let mensaje = "Error";

  if (hour >= 6 && hour <= 12) {
    mensaje = "Buenos días";
  } else if (hour >= 13 && hour <= 18) {
    mensaje = "Buenas tardes";
  } else if (hour >= 19 && hour <= 23) {
    mensaje = "Buenas noches";
  } else {
    mensaje = "Buenas madrugadas";
  }
  return mensaje;
}
console.log(saludo());

//Crear un programa en JavaScript que evalúe si un día corresponde a día de la semana (L-V) o fin de semana (S y D).

const checarDia = (diaDeSemana) =>{
    let finDeSemana = diaDeSemana === "Sábado" || diaDeSemana === "Domingo";

    if(finDeSemana){
        return "Es fin de semana";
    }else{
        return "Es día de semana (Lunes a viernes)"
    }
};

console.log(checarDia("Domingo"));

/*
===============switch
Permite evaluar la expresión haciendo coincidir el valor de la expresión con una etiqueta case. Si la encuentra, ejecuta la declaración.

Sintaxis

switch(exprecion){
  case etiqueta1:
    declaración1;
    break;
  case etiqueta2:
    declaración2;
    break;
  case etiqueta3:
    declaración3;
    break;
  case etiquetaN............
    declaraciónN;
    break;
  default:
    declaraciónDefault;
    break;
}
*/
/*Determinar mediante un programa que utilice sentencia switch, que dia de la semana corresponde al numero, segun la siguiente tabla:

 - 1 = Lunes
 - 2 = Martes
 - 3 = Miercoles
 - 4 = Jueves
 - 5 = Viernes
 - 6 = Sabado
 - 7 = Domingo
*/

let diaSemana = 6;

switch(diaSemana){
    case 1:
        console.log("Lunes");
        break; //Ayuda a detener el proceso cuando encuentra la coincidencia
    case 2:
        console.log("Martes");
        break;
    case 3:
        console.log("Miércoles");
        break;
    case 4:
        console.log("Jueves");
        break;
    case 5:
        console.log("Viernes");
        break;
    case 6:
        console.log("Sábado");
        break;
    case 7:
        console.log("Domingo");
        break;
    default:
        console.log("Número de la semana inválido");
        break;
}

//Crear un programa con un switch que muestre el precio del kilo de naranjas, manzanas, mandarinas, platanos, mangos

let fruta= 'Mandarinas';

switch (fruta.toLowerCase()) {
  case "naranjas":
    console.log('Las naranjas cuestan $30 el kilo');
    break;
  case "manzanas":
    console.log('Las naranjas cuestan $60 el kilo');
    break;
  case "mandarinas":
    console.log('Las mandarinas cuestan $25 el kilo');
    break;
  case "platano":
    console.log('Los platano cuestan 2 kilos por $25');
    break;
  case "mangos":
    console.log('Los mangos cuestan $22 el kilo');
    break;
  default:
    console.log('No tenemos esa fruta :C');
    break;
}

//Crear un programa con switch para evaluacion de alumnos(las calificaciones aprobatorias van de 5.5 a 10 y deben redondearse al numero superior inmediato)

let calificacion = 5.5;
let calificacionRedondeada = Math.round(calificacion);

switch (calificacionRedondeada) {
  case 10:
    console.log("Aprobado, excelente");
    break;
  case 9:
    console.log("Aprobado, muy buen trabajo");
    break;
  case 8:
    console.log("Aprobado, buen trabajo");
    break;
  case 7:
    console.log("Aprobado");
    break;
  case 6:
    console.log("Mediocre, pero sirve");
    break;
  case 5.5:
    console.log("Mediocre, pero sirve");
    break;
  default:
    console.log("Reprobado");
    break;
}

