/*AXIOS.
Axios es una libreria de JS que se puede utilizar para relizar solicidudes HTTP que funciona en el buscador y en NodeJS.
Está basado en promesas, y nos permite escribir código async/await para realizar solicitues.
--async es una manera de trabajar con promesas, ya qie asegura que una función devuelva una promesa
--await hace que JS espere hasta que la promesa se cumpla y devuelva su resultado
*/

const axios = require('axios');

async function makeGetRequest() {
    const response = await axios.get('https://rickandmortyapi.com/api/character/1');
    
    let data = response.data;
    console.log(data);
}

makeGetRequest();

/*Para correr el package desde axios-get agrego las dependencias en el script del archivo package.json:
    "axios-get": "node simpleGet.js"

Posteriormente utilizo el comando
    //$ npm run axios-get
*/
