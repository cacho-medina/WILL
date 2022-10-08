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
    let numero = num.toString();
    let aux = 0;
    for (let index = numero.length - 1; index >= 0; index--) {
        if (numero[index] !== numero[aux]) {
            return !true;
        }
        aux++;
    }
    return true;
}

// No modifiques nada debajo de esta linea //

module.exports = numeroSimetrico;
