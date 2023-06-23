//Crear una nueva clase llamada perrito que herede propiedades y métodos de mascota, con la palabra reservada extends
class Perrito extends Mascota {
  id = "";
  raza = "";
  //Ago mi cosntructor con los atributos unicos de perrito y agrego los que heredara de la clase padre(Mascota)
  constructor(id, raza, nombre, edad, especie) {
    super(nombre, edad, especie);
    this.id = id;
    this.raza = raza;
  }

  propiedades() {
    console.log("Mi perrito número " + this.id);
    console.log("Nombre: " + this.nombre);
    console.log("Edad " + this.edad);
  }

  sonido() {
    console.log("grrrr");
  }
}

//Instanciar objetos : perrillo y appa
let perrillo = new Perrito (1, 'Husky', 'Perrillo', 3, 'Canis canis');
let appa = new Perrito (2, 'Chihuahua', 'Appa', 10, 'Canis canis');

//Invocar metodos 
perrillo.propiedades();
appa.sonido();
perrillo.love();