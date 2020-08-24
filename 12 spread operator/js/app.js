let lenguajes = ["JS", "PHP", "Python"];
let frameworks = ["React", "Laravel", "Django"];

// unir arrays (forma anterior)
// let combinacion = lenguajes.concat(frameworks);

// UNIR ARRAYS (spread operator)
let combinacion = [...lenguajes, ...frameworks];
//console.log(combinacion);

// COPIAR ARRAYS
let lenguajes2 = [...lenguajes];
//console.log(lenguajes2);

// EVITAR ERRORES DE CÓDIGO
let familia = ["Papá", "Noelia", "Nuria"];
// let [ultimo] = familia.reverse(); // (invierte el array)
// spread operator no invierte el array
let [ultimo] = [...familia].reverse();
// console.log(ultimo);
// console.log(familia);

// OTRO USO
function suma (a,b,c){
    console.log(a+b+c);
}
const numeros = [1,2,3];
// suma(numeros);
// devuelve -> 1,2,3undefinedundefined
suma(...numeros);
// devuelve -> 6
