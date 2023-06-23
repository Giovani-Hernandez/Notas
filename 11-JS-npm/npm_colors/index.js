/*Tutorial para instalar un paquete de npm
1. Crea una carpeta con un archivo .js
2. Abrir la ubicación de nuestr carpeta en la terminal
3. Ejecutar alguno de los comandos siguientes:
  $ npm init ===> package propio
  $ npm init -y ===> package de npm existente
4. Instalar el paquete desde la linea de comandos. p.e. con el package colors seria:  npm install colors
5. Importar el paquete desde el archivo main/index.js
6. Ejecutar el paquete mediante la terminal utilizando nodeJS
     $node archivo.js
   

*/
const colors = require('colors/safe');

console.log(colors.green('Hola'));
console.log(colors.red.underline('i like cake and pies'));


