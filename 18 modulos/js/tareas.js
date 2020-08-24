// // EXPORT
// export const nombreTarea = 'Pasear al perro';

// // EXPORT por default
// const tareaDefault = 'Pasear al perro';
// export default tareaDefault;

// // EXPORT de objectos
// const tareaA = 'Pasear al perro';
// const tareaB = 'Fregar los platos';
// export default {
//     tarea1: tareaA,
//     tarea2: tareaB
// }

// // EXPORT variables y funciones
// export const nombreTarea = 'Pasear al perro';

// export const crearTarea = (tarea, urgencia) => `La tarea ${tarea} tiene una urgencia ${urgencia}`;
// export const tareaFinalizada = () => console.log('Ya hiciste la tarea');

// // EXPORT por Default de clases
export default class Tarea {
    constructor(nombre,prioridad){
        this.nombre = nombre;
        this.prioridad = prioridad
    }
    mostrar(){
        console.log(`${this.nombre} tiene una prioridad de ${this.prioridad}`);
    }
}
