let name = 'Gaby';
let friend = 'Sabrina';

let note = `${name}. Please excuse ${friend}. She is recovering from the flu. Thank you, ${friend}`;

console.log(note);

const matriz = [10, 43, 95];

// let x = matriz[0];
// let y = matriz[1];
// let z = matriz[2];

// console.log(x);
const [x, y, z] = matriz;

console.log(y, z, x);

const objeto = {
    animal: "dog",
    years: 4,
    color: "black",
    name: "Thor",
}

const animal = objeto.animal;
const nome = objeto.name;
const years = objeto.years;
const color = objeto.color;

console.log(animal, nome, years, color);