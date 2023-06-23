class Serpiente extends Mascota{
    comportamiento ='';

    constructor(comportamiento, nombre, edad, especie){
        super(nombre, edad, especie)
        this.comportamiento = comportamiento;
    }
    //Metodos
    saludano(){
        console.log('Hola, soy ' + this.nombre +' y me estoy arrastrando');        
    }    
}
let serpentin = new Serpiente('Diurno', 'Serpentin', 2, 'Cobra real');

console.log ('Soy una ' + this.especie );
serpentin.saludano();

//Metodo heredado
serpentin.love();
