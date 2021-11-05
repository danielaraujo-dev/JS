alert("Por Favor Ingrese a la consola: Dar click derecho a cualquier parte de la página, Inspeccionar, Consola.");

//Se desea unir la lista de estudiantes de la sección A y B para conocer la cantidad de estudiantes
var grupoA= ["Matías", " Rodolfo"," Susana"," Valeria" ];
var grupoB=[" Ana", " Christian", " Isabella", " Sofía", " Eduardo"];
var seccionCompleta, seccionUnica, nombre;

nombre=prompt("Introduzca su nombre");

seccionCompleta = grupoA.concat(grupoB);
console.log("Estos serían todos los nombres de los Estudiantes: "+ seccionCompleta);
console.log("Este es el numero total de estudantes del grado: " + seccionCompleta.length);

//Ahora Se le desea hacer una Sección única para este grado

seccionUnica= seccionCompleta.join("<->");

console.log("La nueva sección única está conformada por: " + seccionUnica);

//Eduardo se retira del colegio

seccionCompleta.pop();
console.log("Esta es la nueva lista de estudiantes " + seccionCompleta);

//Se le añade el nombre de la persona que ingresó a la página

seccionCompleta.push(nombre);
console.log("Esta es la nueva lista de estudiantes " + seccionCompleta);
