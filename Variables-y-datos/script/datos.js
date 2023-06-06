//TIPOS DE DATOS Y VARIABLES EN JS
/*
Declaración de variables

var: utilizamos esta palabra reservada para variables globales - que se pueden usar a lo largo de todo nuestro codigo

let:utilizamos esta palabra reservada para variables locales - se pueden utilizar en un bloque específico de código

const: esta plabra reservad la utilizamos para dato o información que no pueden cambiar su valor 

var nombreDeVariable=x;

*/
// Tipos de Dato numérico (Number)

/*
Los tipos de dato numérico se expresan sin comillas
Se pueden trabajar enteros, decimales, positivos, negativos

*/


var edad = 26;
var altura = 1.78;
var añoDeNacimiento = 1996;
var diaDeLaSemana = 5;

var edadTexto = '22';

var nuevaEdad = Number (edadTexto) ;

//Tipo de Dato cadena de texto (string)
/*Los tipos de datos string o cadenas de texto utilizan comillas dobles o sencillas para asignar un valor

Son un tipo de dato sumamente flexible, sin embargo hay que utilizarlo con cuidado*/

var nombre = 'Giovani';
var ciudad = 'CDMX';
var colorFav = 'Negro';

var edadString = String(edad);

//Tipo de dato booleano (boolean)
/*Los tipos de datos booleanos solo arojan 2 resultados
true
false
*/

var esRegio = false;
var escuchaMusica = true; 

var condicion = Boolean(10 < 5); //False

var nuevaVariable;  //Variable indefinida

var otraNuevaVariable = null;

//string
var diaDelMes = '2';
var semanaDelMes = '1';
var comidaFavorita = 'tacos';
var peliculaFavorita = 'Interestelar';
var carrwraEstudiada = 'Ingenieria';
var horaDelDia = '12:15';
var deporteDePreferencia = 'MMA';
var valorDePi = '3.2426';
var V = '2';
var diaDelMes = '2';

//Number
var diaDelMes = 2;
var diaDeLaSemana = 5;
var añosPorCumplir = 27;
var numeroDeHermanos = 2;
var planetasDelSitema = 9;
var elementosTabPer = 118 ;
var mesDelAño = 6 ;
var numeroDeMascotas = 3 ;
var numeroFav = 20 ;
var valorDePi = 3.1416;

//Boolean
var condicion1 = Boolean(18 < 2);
var condicion2 = Boolean(4 < 12);
var condicion3 = Boolean(16 > 4);
var condicion4 = Boolean(14 < 9);
var condicion5 = Boolean(44 < 23);
var condicion6 = Boolean(31 > 54);
var condicion7 = Boolean(13 < 10);
var condicion8 = Boolean(0 > 56);
var condicion9 = Boolean(11 < 76);
var condicion10 = Boolean(34 > 1);

const pi = 3.1416;pi

//////////////////////////////////////////////////////////////////////////////////////////7

//------------------------- Arrays y objet os------------------------------

/*
Array, también conocido como Arreglo, es un tipo de dato que pertenece a JS, en el cual almacena una colección de elementos de maner ordenada

Primer elemento = indice 0.
Hasta n cantidad de indices.
*/

var ejemploDelArray =["Saludis", "Que onda", "Que hay", "Buenos días"];
var otroArray = [34,"Que onda",564,117,6,321];

/*
Objetos, los encontramos como Object
Son tipos de dato similares a ls Arrays, sin 

key=llave
value=valor
*/

var ejemploDeObjeto = {
    nombre:"Giovani",
    apellido: "Hernández",
    edad: 22, 
    esEstudiante: true,
}
































