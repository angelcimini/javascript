// DESTRUCTURING DE OBJETOS

const aprendiendoJS = {
    version: {
        nueva: 'ES6',
        anterior: 'ES5'
    },
    frameworks: ['React', 'VueJS', 'AngularJS']
}
// Destructuring es extraer valores de un objeto
//console.log(aprendiendoJS);

// VERSION ANTERIOR

// let version = aprendiendoJS.version.nueva;
// let framework = aprendiendoJS.frameworks[1];
// console.log(version);
// console.log(framework);


// VERSION NUEVA
let {version, frameworks} = aprendiendoJS;
console.log(version);
console.log(frameworks[0]);

// let {nueva} = aprendiendoJS.version;
// console.log(nueva);



// OBJECT LITERAL ENHANCEMENT

const banda = 'metallica';
const genero = 'heavy metal';
const canciones = ['master of puppets', 'seek & destroy', 'enter sandman'];

// forma anterior
// const metallica = {
//     banda: banda,
//     genero: genero,
//     canciones: canciones
// }

// forma nueva
const metallica = {banda, genero, canciones};

// console.log(metallica);