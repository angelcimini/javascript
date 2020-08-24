// escribir class Tarea
class Tarea {
    constructor(nombre,prioridad){
        this.nombre = nombre;
        this.prioridad = prioridad
    }
    mostrar(){
        console.log(`${this.nombre} tiene una prioridad de ${this.prioridad}`);
    }
}
// escribir class ComprasPendientes que hereda de Tarea
class ComprasPendientes extends Tarea{
    constructor(nombre, prioridad, cantidad){
        super (nombre, prioridad);
        this.cantidad = cantidad;
    }
    //modificando el metodo de la class Tarea
    mostrar(){
        super.mostrar();
        console.log(`y hacen falta ${this.cantidad}`);
    }
}
// crear objetos de la class Tarea
let tarea1 = new Tarea('Aprender Javascript','Alta');
let tarea2 = new Tarea('Preparar café','Alta');
let tarea3 = new Tarea('Pasear al perro','Media');
let tarea4 = new Tarea('Conocer a los suegros','Baja');
//console.log(tarea1);
//console.log(tarea2);
//console.log(tarea3.mostrar());
//console.log(tarea1.mostrar());
// crear objeto de class ComprasPendientes 
let compra1 = new ComprasPendientes('Jabon', 'Urgente', 3);
// usar metodos heredados de la class Tarea
compra1.mostrar();