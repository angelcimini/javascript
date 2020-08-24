const personas = [
    {nombre: 'Juan', edad: 24, aprendiendo: 'JS'},
    {nombre: 'Patricia', edad: 26, aprendiendo: 'React'},
    {nombre: 'Ana', edad: 31, aprendiendo: 'Angular'},
    {nombre: 'Oscar', edad: 18, aprendiendo: 'Vue'},
    {nombre: 'Cecilio', edad: 37, aprendiendo: 'Node'}
]
// console.log(personas);

// edad mayor que 25
const mayores25 = personas.filter(persona => {
    return persona.edad > 25;
});
// console.log(mayores25);

// que aprende Patricia
const patricia = personas.find(persona => {
    return persona.nombre === 'Patricia';
});
// console.log(patricia);
// console.log('Patricia está aprendiendo: ' + patricia.aprendiendo);

// suma todas las edades
let total = personas.reduce((edadTotal, persona) => {
    return edadTotal + persona.edad;
}, 0);
// console.log(total);

// promedio de todas las edades
// console.log(total / personas.length);

