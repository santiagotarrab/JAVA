console.log ("HOLA");

let i=0;
let cantAlumnos;
let nota;
let sumaNota=0;
//reporte de notas de alumnos


alert (`INGRESE POR FAVOR LA CANTIDAD DE ALUMNOS
    REPORTE ALUMNOS`);

do {
cantAlumnos = (prompt("INGRESE CANTIDAD DE ALUMNOS"))

if(isNaN(cantAlumnos)){
    alert ("Por favor ingrese correctamente el número.")
}
}while (isNaN(cantAlumnos));

for (i=0; i<cantAlumnos;i++){
nota = Number(prompt("ingrese Nota del alumno " + (i+1) ));
console.log ("Nota del alumno" + (i+1) + ":" + nota);
sumaNota+=nota;
}
console.log("El promedio del alumnado es " + (sumaNota/cantAlumnos));