//POO

//Gatito Pelusa
let nombre = 'Pelusa';
let edad = 5;
let especie = 'Gato';
let raza = 'Angora';
let caracter = 'Amoroso';
let color = 'Blanco';

//Metodos
function comer() {}
function treparArboles(){}
function dormir(){}
function maullar(){}
function ronrronear(){}

//Pelusa ahora es un objeto
const gatito1 ={
    nombre : 'Pelusa',
    edad : 5,
    especie : 'Gato',
    raza : 'Angora',
    caracter : 'Amoroso',
    color : 'Blanco',
}

//Pusheen
const gatito2 ={
    nombre : 'Pusheen',
    edad : 2,
    especie : 'Gato',
    raza : 'Siamés',
    caracter : 'Tragon',
    color : 'Gris',
}

//Michiberto
const gatito3 ={
    nombre : 'Michiberto',
    edad : 8,
    especie : 'Gato',
    raza : 'Esfinje',
    caracter : 'Flojo',
    color : 'Arena',
}

console.log(gatito1);
console.log(gatito2);
console.log(gatito3);

//Accediendo a propiedades de mis gatitos, mediante metodos.
console.log(`El nombre de mi gatito 1 es ${gatito1.nombre}`); 
console.log(`${gatito2.nombre} tiene un caracter ${gatito2.caracter}`);
console.log(`Mis gatitos se llaman ${gatito1.nombre}, ${gatito2.nombre} y ${gatito3.nombre}`);

//Clases para agilisar el proceso de creación de código (funcionan como plantillas)

//1. Le decimos a JS que utilizaremos POO con la palabra reservada class, la cual define mi clase.

class Gatito{
//2. Definir atributos (propiedades) como variables, para asignarles valores posteriomente
     nombre = '';
     edad = 0;
     especie = '';
     raza = '';
     caracter = '';
     color = '';  

//3. Agregar constructores nos permite  construir los atributos de la clase, agregando valores o parámetros
constructor(nombre, edad, especie, raza, caracter, color){
    //This palabra reservada para hacer referencia a los atributos e instanciarlos. Separar los atributos individuales para no confundirlos con las variables.
    this.nombre = nombre;
    this.edad = edad;
    this.especie = especie;
    this.raza = raza;
    this.caracter = caracter;
    this.color = color;  
}
//4.Definir los métodos como funciones o aciones
 comer() {
    console.log('comiendo pescadito');
 }
 treparArboles(){
    console.log('escalando');
 }
 dormir(){
    console.log('mimiendo... zzzz');
 }
 maullar(){
    console.log('miau');
 }
 ronrronear(){
    console.log('prr');
 }
}

//5. Crear objetos (gatitos), con la palabra reservada new
let pelusa = new Gatito('Pelusa', 5, 'Gato', 'Angora', 'Amoroso', 'Blanco');
let pusheen = new Gatito('Pusheen', 2, 'Gato', 'Siames', 'Tragón', 'Gris');
let michiberto = new Gatito('Michiberto', 8, 'Gato', 'Esfinge', 'Flojo', 'Arena');

console.log(pelusa);

pusheen.dormir();
pusheen.treparArboles();
michiberto.ronrronear();
pelusa.maullar();

/*Orden para instanciar objetos a partir de una clase
    Class
    Atributos como variables vacías
    Constructores (this)
    Métodos o acciones
    Fuera de la clase, se instancian (crean) objetos con new 
*/


