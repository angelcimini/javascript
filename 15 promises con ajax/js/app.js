const descargarUsuarios = cantidad => new Promise((resolve, reject) => {

    const api = `https://randomuser.me/api/?results=${cantidad}&nat=us`;

    // llamado ajax
    const xhr = new XMLHttpRequest();

    // abrir conexion
    xhr.open('GET', api, true);

    // on load
    xhr.onload = () => {
        if(xhr.status === 200) {
            resolve(JSON.parse(xhr.responseText).results);
        } else {
            reject(Error(xhr.statusText));
        }
    }

    //opcional (on error)
    xhr.onerror = (error) => reject(error);

    // send
    xhr.send()
});

descargarUsuarios(20)
    .then(
        miembros => console.log(miembros),
        error => console.error(
            new Error('Hubo un error '+error)
        )
    )