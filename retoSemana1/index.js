let nombre1 = prompt("ingresa el primer nombre de tu mama");
let nombre2 = prompt("ingresa el primer nombre de un amigo o amiga");
let nombre3 = prompt(" ingresa el primer nombre de tu jefe o profesor");

const nombres = Array.from(new Set([nombre1,  nombre2, nombre3]));
let resultado=0;

console.log("Estos son los nombre mas importantes en tu vida " + nombres   );

switch(nombre1){

    case "1":
        resultado = (nombre1 == nombre2);
        alert("este nombre esta repetido"+ nombre1);
        break;
    case "2":
        resultado = (nombre1 == nombre3);
        alert("este nombre esta repetido"+ nombre1);
        break;
    case "3":
        resultado = (nombre2 == nombre3);
        alert("este nombre esta repetido"+ nombre2);
        break;
        default:
            alert( "Estos son los nombre mas importantes en tu vida " + nombres )


        
        


}

