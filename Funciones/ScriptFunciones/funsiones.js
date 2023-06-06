// Sesion de funciones
/*
Hoisting:

Es fundamental en el entendimiento de la forma en que se ejecuta nuestro
código de JS, esto aplica tanto para variables como para funciones.

Como tal, la traducción de Hoisting es elevación, a partir de aquí, su entendimiento es
mucho más intuitivo, lo que hace a grandes rasgos es "elevar" las funciones y variables 
declaradas dentro del código.

Yo puedo invocar una función antes de siquiera declararla.

JS, cuando es ejecutado por el motor JS del navegador,
primero lee e interpreta las variables y las
funciones declaradas.

*/

/*

Scope : 

El concepto scope hace referencia al alcance que tiene
una variable dentro de un código JS.

var, let y const.

var : global - Quiere decir que se puede utilizar o
trabajar con esta variable dentro de cualquier
parte del código

let : Porque además de funcionar de manera global
en caso de ser requerida, también puede solo ser
utilizada de manera local.

const : Se refiere, por su nombre tan intuitivo,
a la palabra constante, esto quiere decir que su
valor no puede ser reasignado.

El uso de la palabra reservada 'var' no es tan recomendado
por el comportamiento y la poca adaptabilidad de una
variable.

Entonces, se implementan let y const como una 
alternativa mucho más eficiente para determinar el 
Scope o alcance que tiene una variable.

*/


// Funciones, invocación y declaracióm

//Declaración de una función

/*
Palabra reservada - function

Nombre de la funcion - nombreFuncion
establecer parametros -recibe de 0 a n parametros y se encasillan
dentro un paréntesis ()

Establecer el bloque de código sobre el que vamos a trabajar
lo hacemos mediante llaves {
codigo a ejecutar
}
*/



// Ejemplo de función pero no retorna ningún valor
// No recibe ningún parámetro
function nuevaFuncion(){
    console.log("Buenos días CH28"); // Ni retorna un valor
}

nuevaFuncion();

// Ejemplo de función que si retorna un valor
// Tamién recibe un parámetro
function holaMundo(nombre){
    return "Hola " + nombre; // Si retorna un valor
}

//holaMundo("Fernando");
//console.log(holaMundo("Fernando"));

/*
Elaborar una función que calcule la velocidad 
de un objeto

-velocidad = distancia / tiempo

- function

- calcularVelocidad
  (distancia, tiempo)

- elaborar el bloque de código
*/

function calcularVelocidad(distancia, tiempo){ // Inicio
    let velocidad = distancia / tiempo;
    return "La velocidad calculada es: " + velocidad + " m/s";
} // Cierre

console.log(calcularVelocidad(30, 5));

//Esta funcion me permite introducir valores de sdela consola

function calcularVelocidad(distancia, tiempo){ // Inicio
    return "La velocidad calculada es: " + distancia / tiempo + " m/s";
} // Cierre

console.log(calcularVelocidad());

//Input = Entrada : Se refiere a los datos que recibe nuestra función,las funciones pueden recolectar gran cantidad de datos como input(es buena practica simplifiar los datos que ingresan ya que entre menos datos reciba, mas simplificado es el código) Hace la función dinámica

//Output= Salida = {console.log} = return: La informacion que devuelve la funcion, no es necesario que se envie al cliente, ya que se pueden guardar los datos en otra variable o hacer otras operaciones, por buenas practicas una funcion solo debe de tener un statement para regresar valores, pero es posible tener mas de un return statement.

//=====================================================================
                    //Funciones dentro de JS
/*
Funciones flecha  | Funciones Fat arrow   | Funciones lambda

Funciones anonimas
Funciones CallBack - Que reciben otras funciones como parametros

Promesas

Funciones async - await
*/

// Funciones flecha

/*

Son una manera más compacta y sencilla de escribir una función normal.

No son lo mismo que una función general, se utiliza en otro tipo de contextos
Funciones CallBack que requieren funciones anonimas.

Su uso es limitado.

Declaración de una función flecha

- var, let, const
const - buena práctica utilizar const para declarar funciones flecha o lambda

- nombreFuncion

- Parámetros

- Establecer el bloque de código o procesos que va a ejecutar esta función.
=> - Fat arrow

invocacion de una funcion flecha

nombreFuncionFlecha();

(); se coloca el parámetro

*/


// Funcion general
function funcionNormal (parametro){
    return "Hola " + parametro;
}

// Funcion flecha - Arrow Function

//Funcion flecha más general
const funcionFlecha = parametro => "Hola " + parametro;

//Funciones flecha con más parámetros
const funcionVariosParametros = (datoA, datoB) => {
    let datoC = datoA + datoB;
    return "La suma de datoA + datoB = " + datoC;
}

//Funciones flecha sin recibir un parámetro
const funcionSinParametros = () => {
    return "Funcion flecha que no recibe parametros";
}

/////////////////////////////////////////////////////////////////////////
// Funcion flecha para calcular la velocidad

const calcularVelocidadFlecha = (distanciaFlecha, tiempoFlecha) => {
    
    console.log("Distancia =  " + distanciaFlecha + " metros");
    console.log("Tiempo = " + tiempoFlecha + " segundos");
    return "La velocidad calculada es = " + distanciaFlecha / tiempoFlecha + " m/s";
}

//========================================================================

//----------------------Actividad----------------------------------------

//Realizar una función que realice o saatisfaga los siguientes escenarios, en manera de función general y funcion flecha.

//1. Calcular el cuadrado de un número.

//Función general
function calcularCuadradoGeneral(numero) {
  return numero * numero;
}
//Función flecha
const calcularCuadradoFlecha = numero => numero * numero;


//2. Escribir un código que convierta de grados celsius a grados farenheit

//Función general
function celsiusFahrenheitGeneral(celsius) {
    return (celsius * 9/5) + 32;
  }

//Función flecha
const celsiusFahrenheitFlecha = celsius => (celsius * 9/5) + 32;


//3. Realizar una función que calcule el valor de Voltaje, recibiendo como entradas o parámetros Resistencia y Corriente.

//Función general
function calcularVoltajeGeneral(resistencia, corriente) {
    return resistencia * corriente;
  }

//Función flecha
const calcularVoltajeFlecha = (resistencia, corriente) => resistencia * corriente;


//4. Elaborar una función que calcule el volumen de un cubo, recibiendo como dato de entrada Lado.

//Función general
function calcularVolumenCuboGeneral(lado) {
    return lado * lado * lado;
  }

//Función flecha
const calcularVolumenCuboFlecha = lado => lado * lado * lado;


//5. Calcular el área de un triángulo

//Función general
function calcularAreaTrianguloGeneral(base, altura) {
    return (base * altura) / 2;
  }

//Función flecha
const calcularAreaTrianguloFlecha = (base, altura) => (base * altura) / 2;


//6. Calcular el volumen de una esfera

//Función general
function calcularVolumenEsferaGeneral(radio) {
    return (4/3) * (3.1416) * (radio * radio * radio);
  } 

//Función flecha
const calcularVolumenEsferaFlecha = radio => (4/3) * (3.1416) * (radio * radio * radio);


//7. Convertir una cadena de texto a mayúsculas, usando el método toUpperCase().

//Función general
function convertirAMayusculasGeneral(texto) {
    return texto.toUpperCase();
} 

//Función flecha
const convertirAMayusculasFlecha = texto => texto.toUpperCase();














