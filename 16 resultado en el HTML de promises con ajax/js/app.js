const descargarUsuarios = cantidad => new Promise((resolve, reject) => {
    // declarar la url
    const api = `https://randomuser.me/api/?results=${cantidad}&nat=us`;
    // declarar la llamada ajax
    const xhr = new XMLHttpRequest();
    // abrir conexion
    xhr.open('GET', api, true);
    // onload
    xhr.onload = () => {
        if(xhr.status === 200) {
            resolve(JSON.parse(xhr.responseText).results);
        } else {
            reject(Error(xhr.statusText));
        }
    }
    // on error (opcional)
    xhr.onerror = (error) => reject(error);
    // send
    xhr.send()
});

descargarUsuarios(20)
    .then(
        miembros => imprimirHTML(miembros),
        error => console.error(
            new Error('Hubo un error '+error)
        )
    )
function imprimirHTML(usuarios){
    html="";
    usuarios.forEach(element => {
        html += `
            <li>
                nombre: ${element.name.first} ${element.name.last}
                pais: ${element.nat}
                imagen:
                    <img src="${element.picture.medium}">
            </li>
        `;
    });
    const cont = document.querySelector('#app');
    cont.innerHTML = html;
}