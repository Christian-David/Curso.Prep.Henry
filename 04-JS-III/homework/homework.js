// No cambies los nombres de las funciones.

const { suma } = require("../../02-JS-I/homework/homework");

function devolverPrimerElemento(array) {
  // Devuelve el primer elemento de un array
  // Tu código:
  return array[0];
}

function devolverUltimoElemento(array) {
return array[array.length -1];
}

function obtenerLargoDelArray(array) {
return array.length;
}

function incrementarPorUno(array) {
  var nuevoArray = [];
  for(var i=0; i<array.length;i++){
    nuevoArray.push(array[i] + 1);
  }
  return nuevoArray;
}

function agregarItemAlFinalDelArray(array, elemento) {
  array.push(elemento);
  return array;
}

function agregarItemAlComienzoDelArray(array, elemento) {
  array.unshift(elemento);
  return array;
}

function dePalabrasAFrase(palabras) {
  return palabras.join(" ");
}

function arrayContiene(array, elemento) {
  // Comprueba si el elemento existe dentro de "array"
  // Devuelve "true" si está, o "false" si no está
  // Tu código:
  for(var i=0;i<array.length; i++){
    if(array[i]===elemento){
      return true;
    }
  }
  return false;
}

function agregarNumeros(numeros) {
  // "array" debe ser una matriz de enteros (int/integers)
  // Suma todos los enteros y devuelve el valor
  // Tu código:
  var suma = 0;
  for(var i=0;i<numeros.length;i++){
    suma= suma+numeros[i];
  }
  return suma;
}

function promedioResultadosTest(resultadosTest) {
  // "resultadosTest" debe ser una matriz de enteros (int/integers)
  // Itera (en un bucle) los elementos del array, calcula y devuelve el promedio de puntajes
  // Tu código:
  var suma =0;
  for(var i=0 ;i<resultadosTest.length; i++){
    suma = suma+resultadosTest[i];
  }
  return suma / resultadosTest.length;
}

function numeroMasGrande(numeros) {
  var maximo = numeros[0];
  for(var i=1;i<numeros.length;i++){
    if(numeros[i]>maximo){
      maximo= numeros[i];
    }
  }
  return maximo;
}

function multiplicarArgumentos() {
  // Usa la palabra clave `arguments` para multiplicar todos los argumentos y devolver el producto
  // Si no se pasan argumentos devuelve 0
  // Si se pasa un argumento, simplemente devuélvelo
  // Tu código:
  if(arguments.length < 1) return 0;
  var total=1;
  for(var i=0;i<arguments.length;i++){
    total= total * arguments[i];
  }
  return total;
}

// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  devolverPrimerElemento,
  devolverUltimoElemento,
  obtenerLargoDelArray,
  incrementarPorUno,
  agregarItemAlFinalDelArray,
  agregarItemAlComienzoDelArray,
  dePalabrasAFrase,
  arrayContiene,
  agregarNumeros,
  promedioResultadosTest,
  numeroMasGrande,
  multiplicarArgumentos,
};
