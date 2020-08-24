// template strings

const nombre = 'juan';
const trabajo = 'desarrollador web';

//concatenar js
console.log(`Nombre: ${nombre}, Trabajo: ${trabajo}`);

//concatenar con multiples lineas
const contenedorApp = document.querySelector('#app');
// let html = '<ul>' +
//                 '<li> Nombre: ' + nombre + '</li>' +
//                 '<li> Trabajo: ' + trabajo + '</li>' +
//             '</ul>';
let html =`
    <ul>
        <li> Nombre: ${nombre} </li>
        <li> Trabajo: ${trabajo} </li>
    </ul>
`;
contenedorApp.innerHTML = html;