// FUNCTION DECLARATION

saludar('Juan');
function saludar( nombre ) {
    console.log('Bienvenido ' + nombre);
}
saludar('Juan');

// FUNCTION EXPRESSION

// se tiene que declarar antes de utilizar la funcion
// da error: cliente('Juan');

const cliente = function (nombreCliente){
    console.log('Mostrando datos del cliente: ' + nombreCliente);
}

// no da error
cliente('Juan');