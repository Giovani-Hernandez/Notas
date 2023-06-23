// Módulo de importación.
// module.exports ...  es una propiedad especial de NodeJS que se utiliza para exportar valores (funciones, variables) o módulos para que puedan se utilizados en otro archivos o módulos de nodeJS

module.exports = function(numero) { 
     (numero % 2 === 0) ? console.log(`El numero ${numero} es par`) : console.log(`El numero ${numero} es impar`);

}

