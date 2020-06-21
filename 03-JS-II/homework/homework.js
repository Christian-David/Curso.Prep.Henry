// No cambies los nombres de las funciones.

function obtenerMayor(x, y) {
return Math.max(x,y);
}

function saludo(idioma) {
if(idioma==="aleman"){
  return "Guten Tag!";
}else if(idioma ==="mandarin"){
return "Ni Hao!";
}else if(idioma==="ingles"){
  return "Hello!";
}else{
  return "Hola!";
}
}

function esDiezOCinco(numero) {
    if(numero===10 || numero===5){
      return true;
    }else{
      return false;
    }
}

function estaEnRango(numero) {
  return numero<50 && numero>20;
}

function esEntero(numero) {
 return numero % 1===0;
}

function fizzBuzz(numero) {
  if(numero%15===0){ 
    return "fizzbuzz";
  }
  if(numero%3===0) return "fizz";
  if(numero%5===0) return "buzz";
  return numero;
}

function esPrimo(numero) {
  // Devuelve "true" si "numero" es primo
  // De lo contrario devuelve "falso"
  // Pista: un número primo solo es divisible por sí mismo y por 1
  // Pista 2: Puedes resolverlo usando un bucle `for`
  // Nota: Los números 0 y 1 NO son considerados números primos
  if(numero<2) return false;
  for(var i=2;i<numero;i++){
    if(numero%i===0){
    return false;
    }
    return true;
  }
}



// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  obtenerMayor,
  saludo,
  esDiezOCinco,
  estaEnRango,
  esEntero,
  fizzBuzz,
  esPrimo
};
