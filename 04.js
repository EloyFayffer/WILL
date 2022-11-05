/* 
  Importante: 
  No modificar ni el nombre ni los argumetos que reciben las funciones, sólo deben escribir
  código dentro de las funciones ya definidas. 
  No comentar la funcion 
*/

function numeroSimetrico(num) {
  // La funcion llamada 'numeroSimetrico' recibe como argumento un numero entero 'num'
  // Esta devuelve true o false dependiendo de si el número es simétrico o no. 
  // Un número es simétrico cuando es igual a su reverso.
  // Ej:
  // numeroSimetrico(11711) devuelve true

  // Tu código:
  cadeReve = "";
  let longitud = "" + num;
for (let i = longitud.length - 1; i>=0; i--){
  cadeReve = cadeReve + longitud[i];
} 
if (cadeReve==longitud){
  return true;
}else{
  return false;
}
}

// No modifiques nada debajo de esta linea //

module.exports = numeroSimetrico