// metodos o funciones en un objeto

const persona = {
    nombre: 'juan',
    trabajo: 'desarrollador web',
    edad: 50,
    musicaRock: true,
    mostrarInfo() {
        console.log(`${this.nombre} es ${this.trabajo} y tiene ${this.edad} años.`);
        //agregamos el "this." porque nos referimos a una propiedad del mismo objeto persona
    }
}

persona.mostrarInfo();