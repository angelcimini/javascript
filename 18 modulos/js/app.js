// // import variables
// import {nombreTarea} from './tareas.js';
// console.log(nombreTarea);

// // import por default
// import cualquierNombre from './tareas.js';
// console.log(cualquierNombre);

// // import por default de un objecto
// import  cualquierNombre  from './tareas.js';
// console.log(cualquierNombre.tarea2);

// // import variables y funciones
// import {nombreTarea, crearTarea, tareaFinalizada} from './tareas.js';
// console.log(nombreTarea);
// const tarea1 = crearTarea('preparar café', 'media');
// console.log(tarea1);
// tareaFinalizada();

import tareaConOtroNombre from './tareas.js';
const tarea1 = new tareaConOtroNombre('Hacer pis','urgente');
console.log(tarea1);
tarea1.mostrar();




