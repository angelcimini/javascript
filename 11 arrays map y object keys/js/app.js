//devolver el array como está
const carrito = ["producto 1", "producto 2", "producto 3"];
const appContenedor = document.querySelector("#app");
appContenedor.innerHTML = carrito;

//devolver el array con forEach
let html = "";
carrito.forEach((producto) => {
  html += `<li>${producto}</li>`;
});
appContenedor.innerHTML = html;

//devolver un array basado en el anterior
carrito.map((producto) => {
  return "El producto es " + producto;
});

//object keys
const persona = {
  nombre: "Juan",
  profesion: "Desarrolador Web",
  edad: 500,
};

//para traer el valor de la clave "nombre" usamos...
const { nombre } = persona;
console.log(nombre);

//pero si quisieramos traer el nombre de las claves...
console.log(Object.keys(persona));