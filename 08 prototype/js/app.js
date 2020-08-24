// PROTOTYPE permite atar funciones a tipos de objetos

// OBJECT LITERAL
const persona = {
    nombre: 'Juan',
    profesion: 'Desarrollador Web',
    edad: 500
}
console.log(persona);
// da error :console.log(persona.mostrarInfoTarea());
// El prototype: "mostrarInfoTarea" está atado al objeto tipo Tarea
// const mostrarCliente = mostrarInfoTarea(persona.nombre, persona.profesion);
// console.log(mostrarCliente);


// OBJECT CONSTRUCTOR
function Tarea(nombre, urgencia){
    this.nombre = nombre;
    this.urgencia = urgencia;
}

// agregar un PROTOTYPE a Tarea
Tarea.prototype.mostrarInfoTarea = function (){
    return `La tarea ${this.nombre} tiene una prioridad ${this.urgencia}`;
}

// crear una nueva tarea
const tarea1 = new Tarea('Aprender JS y React', 'Urgente');
const tarea2 = new Tarea('Pasear al perro', 'Media');
console.log(tarea1);
console.log(tarea1.mostrarInfoTarea());
console.log(tarea2);
console.log(tarea2.mostrarInfoTarea());

// const mostrarInfo = mostrarInfoTarea(tarea1.nombre, tarea1.urgencia);
// console.log(mostrarInfo);