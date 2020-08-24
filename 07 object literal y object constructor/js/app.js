// OBJECT LITERAL
const persona = {
    nombre: 'Juan',
    profesion: 'Desarrollador Web',
    edad: 500
}
console.log(persona);

// OBJECT CONSTRUCTOR
function Tarea(nombre, urgencia){
    this.nombre = nombre;
    this.urgencia = urgencia;
}

const tarea1 = new Tarea('Aprender JS y React', 'Urgente');
const tarea2 = new Tarea('Preparar cafe', 'Urgente');
const tarea3 = new Tarea('Sacar al perro', 'Media');
const tarea4 = new Tarea('Conocer a los suegros', 'Baja');
console.log(tarea1.nombre);
console.log(tarea1);
console.log(tarea2);
console.log(tarea3);
console.log(tarea4);