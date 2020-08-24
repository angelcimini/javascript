// ARROW FUNCTIONS PARA UN PARAMETRO:

//      let viajando = destino => {
//          return `Viajando a la ciudad de: ${destino}`;
//      }
//      se simplifica así
let viajando = destino => `Viajando a la ciudad de: ${destino}`;

let viaje;
viaje = viajando('Barcelona');
console.log(viaje);


// ARROW FUNCTIONS PARA VARIOS PARAMETROS:

//      let viajando2 = (destino, duracion) => {
//          return `Viajando a la ciudad de: ${destino} por ${duracion}`;
//      }
//      se simplifica igual para más parámetros
let viajando2 = (destino, duracion) => `Viajando a la ciudad de: ${destino} por ${duracion}`;

let viaje2;
viaje2 = viajando2('Barcelona', '9 dias');
console.log(viaje2);
