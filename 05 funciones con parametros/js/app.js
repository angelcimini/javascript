// parametros por default en las funciones

// function actividad(nombre = 'Walter White', actividad = 'Enseñar quimica') {
//     console.log(`La persona ${nombre}, esta realizando la actividad ${actividad}`);
// }

const actividad = function (nombre = 'Walter White', actividad = 'Enseñar quimica') {
    console.log(`La persona ${nombre}, esta realizando la actividad ${actividad}`);
}

 actividad('Juan', 'aprender javascript');
 actividad('pedro', 'creando un sitio web');
 actividad();
 actividad('antonio');