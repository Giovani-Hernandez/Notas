//Obtener elementos/nodos
const inputNombre = document.getElementById('nombre-input');

const parrafo = document.getElementById('texto');

//Obtener la primera coincidencia 
const parrafo2 = document.querySelector('.texto');

//Obtener todos los nodos que coinciden 
const parrafos = document.querySelectorAll('.texto');

//Obtener atributo de nodos

// console.log(inputNombre.getAttribute('id'));
// console.log(inputNombre.id);

//Manipulacion del DOM

// inputNombre.value = 'Hola soy un input';
// document.getElementById('texto').innerHTML = 'Modificamos el texto';




// function actualizarTexto(e) {
//     parrafo.texContent = e.target.value;
// }

//Escuchando un evento
//Modificando el valor de un nodo
inputNombre.addEventListener('input', e =>{
    parrafo.textContent = e.target.value;
});


//Lo mismo pero mas rapito
// inputNombre.addEventListener('input', e => parrafo.textContent = e.target.value);

//Creamos elemento
const divParrafo = document.getElementById('div-container');

const p = document.createElement('p');
p.textContent = 'Agregado desde JS';

//insertamos elemento
// divParrafo.appendChild('p');




