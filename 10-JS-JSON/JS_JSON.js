/* Hoisting. Es un comportamiento especial en el cual las 
declaraciones de variales y funciones se mueven 
al principio de ámbito, es decir, antes de que se ejecute
el código*/

function saludoGatito(){
    console.log("Hola, soy un gatito");

}
saludoGatito();

/* JSON (JavaScript Object Notation), Notacion
de objetos de JS.

Es utiliazdo para transmitir datos en aplicaciones web,
desde el uruario al servidor y viceversa.
*/
let laika = {
    nombre: "Laika",
    edad: 5,
    color:"café"
}
 console.log(laika);
 console.log(typeof(laika));

//  //Objeto JSON

 let laikaJson = `{
    nombre: "Laika",
    edad: 5,
    color:"café"
}`;
 console.log(laikaJson);
 console.log(typeof(laikaJson));
 /* Los JSON son útiles para transmitir datos a través de la red, pero deben 
 ser convertidos a objetos nativos de JS
 para acceder  a sus datos.

 ... Serialización. Proceso para convertir un
 objeto en una secuencia de bytes o en una cadena
 de caracteres que pueden ser almacenada o transmitida

 ..Descrealización. Proceso de tomar una secuencia
 de bytes o una cadena de caracteres searializados
 y convertilos en la memoría*/

 let sultan = `{
    "nombre": "Sultán",
    "edad": 4,
    "color": "Crema"

 }`;
let milaneso = {
nombre: "Milaneso",
edad: 7,
color: "Blanco"

};
 
/*Para convertir (serialización y deserealización) los 
diferentes tipos de objetos (nativos, JSON), recurrimos
a dos métodos de JS:

-JSON.parse()analiza una cadena de texto como JSON,
trasnformandolo
-JSON.stringify() convierte un objeto de JS en
una cadena de texto tipo JSON

*/

// let sultanTransformado  = JSON.stringify(sultan);
// console.log(sultanTransformado);

//Método Parse(). de JSON a Object

let sultanTransformado = JSON.parse(sultan);
console.log(sultanTransformado);

// Método stringgfy(). Object JSON
let milanesoTransformado = JSON.stringify(milaneso);
console.log(milanesoTransformado);

/*Anidacion de objetos en objetos*/
const employees = { employees:[
    {firstName:'Carlos', lastName: 'Navarro', age:29},
    {firstName:'Jonathan', lastName: 'Mendoza', age:25},
    {firstName:'Nancy', lastName: 'Perez', age:24},]
};

console.log(typeof(employees));
console.log(employees);

let employeesTransform = JSON.stringify(employees);
console.log(employeesTransform);
console.log(typeof(employeesTransform));


//Experimento con API de RickAndMorty
let rickSanchez = `{"id":1,"name":"Rick Sanchez","status":"Alive","species":"Human","type":"","gender":"Male","origin":{"name":"Earth (C-137)"}}`;

console.log(rickSanchez);
console.log(typeof(rickSanchez));
let rickSanchezObject = JSON.parse(rickSanchez);
console.log(rickSanchezObject);

console.log(rickSanchezObject.gender);
console.log(rickSanchezObject.origin); 