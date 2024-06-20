let nombre1 = prompt("ingresa el primer nombre de tu mama");
let nombre2 = prompt("ingresa el primer nombre de un amigo o amiga");
let nombre3 = prompt(" ingresa el primer nombre de tu jefe o profesor");

const nombres = Array.from(new Set([nombre1,  nombre2, nombre3]));

console.log("Estos son los nombre mas importantes en tu vida " + nombres   );

