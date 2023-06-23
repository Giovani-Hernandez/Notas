// Simulacion de peticion asincrona
/*async function f() {
    let promise = new Promise((res, rej) => {
        setTimeout(() => res('done'), 3000)
    })
    
    let result = await promise;
    
    alert(result);
}*/

// f();
const btnm = document.getElementById('btn-count-')
const btn = document.getElementById('btn-count');
const p = document.getElementById('contador');

let counter = 0;

p.textContent = counter ;


btn.addEventListener('click', async () => {
    await setTimeout(() => {
        counter++;
        p.textContent = counter;
    }, 10);
});

btnm.addEventListener('click', async () => {
    await setTimeout(() => {
        counter--;
        p.textContent = counter;
    }, 10);
});










// async function f() {
//   let promise = new Promise((resolve, reject) => {
//     setTimeout(() => resolve('Exito'), 3000);
//   })

//   const result = await promise;

//   console.log(result);

// }

// f();