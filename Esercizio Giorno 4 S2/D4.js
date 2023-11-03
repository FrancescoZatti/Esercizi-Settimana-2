/* ESERCIZIO 1
 Scrivi una funzione di nome "area", che riceve due parametri (l1, l2) e calcola l'area del rettangolo associato..
*/

/* SCRIVI QUI LA TUA RISPOSTA */

let x = 11;
let y = 12;

function area(x, y) {

    let molt = x * y;
    return molt;

}

let areatot = area(x, y);

console.log(areatot);



/* ESERCIZIO 2
 Scrivi una funzione di nome "crazySum", che riceve due numeri interi come parametri.
 La funzione deve ritornare la somma dei due parametri, ma se il valore dei due parametri è il medesimo deve invece tornare
 la loro somma moltiplicata per tre.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

x = Math.floor(Number(prompt("Esercizio 2.1 - Inserisci un numero")));
y = Math.floor(Number(prompt("Esercizio 2.2 - Inserisci un numero")));

function crazySum(x, y) {
    if (x === y) {
        return ((x + y) * 3);
    } else {
        return (x + y);
    }
}

console.log(crazySum(x, y));


/* ESERCIZIO 3
 Scrivi una funzione di nome "crazyDiff" che calcola la differenza assoluta tra un numero fornito come parametro e 19.
 Deve inoltre tornare la differenza assoluta moltiplicata per tre qualora il numero fornito sia maggiore di 19.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

x = Number(prompt("Esercizio 3 - Inserisci un numero"));
y = 19;

function crazyDiff(x, y) {
    if (x > y) {
        return ((x - y) * 3);
    } else {
        return (x - y);
    }
}

console.log(crazyDiff(x, y));

let absDiff = Math.abs(crazyDiff(x, y));

console.log(absDiff);



/* ESERCIZIO 4
 Scrivi una funzione di nome "boundary" che accetta un numero intero n come parametro, e ritorna true se n è compreso tra 20 e 100 (incluso) oppure
 se n è uguale a 400.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

let n = Math.floor(Number(prompt("Esercizio 4 - Inserisci un numero")));

function boundary(n) {
    if (n > 20 && n <= 100 || n === 400) {
        return true;
    } else {
        return false;
    }
}

console.log(boundary(n));



/* ESERCIZIO 5
 Scrivi una funzione di nome "epify" che accetta una stringa come parametro.
 La funzione deve aggiungere la parola "EPICODE" all'inizio della stringa fornita, ma se la stringa fornita comincia già con "EPICODE" allora deve
 ritornare la stringa originale senza alterarla.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

let stringa1 = prompt("Esercizio 5 - Inserisci una frase o una parola")

function epify(stringa1){
    if(stringa1.startsWith("EPICODE")){
        return stringa1
    }else{
        return "EPICODE " + stringa1
    }
}

console.log(epify(stringa1))



/* ESERCIZIO 6
 Scrivi una funzione di nome "check3and7" che accetta un numero positivo come parametro. La funzione deve controllare che il parametro sia un multiplo
 di 3 o di 7. (Suggerimento: usa l'operatore modulo)
*/

/* SCRIVI QUI LA TUA RISPOSTA */

let n2 = Number(prompt("Esercizio 6 - Inserisci un numero"))

function check3and7(n2) {
    if (n2 > 0 && n2 % 7 === 0 || n2 % 3 === 0) {
        return true;
    } else {
        return false;
    }
}

console.log(check3and7(n2));

/* ESERCIZIO 7
 Scrivi una funzione di nome "reverseString", il cui scopo è invertire una stringa fornita come parametro (es. "EPICODE" --> "EDOCIPE")
*/

/* SCRIVI QUI LA TUA RISPOSTA */

let stringa2 = prompt("Esercizio 7 - Inserisci una frase o una parola")

console.log(stringa2)
 
function reverseString(stringa2) {
    let stringa2reverse = "";
  for (let i = stringa2.length - 1; i >= 0; i--) {
    stringa2reverse += stringa2[i];
  }
  return stringa2reverse;
} 

console.log(reverseString(stringa2));

/* ESERCIZIO 8
 Scrivi una funzione di nome "upperFirst", che riceve come parametro una stringa formata da diverse parole.
 La funzione deve rendere maiuscola la prima lettera di ogni parola contenuta nella stringa.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

let stringa3 = prompt("Esercizio 8 - Inserisci una frase o una parola")
console.log(stringa3)

function upperFirst(stringa3) {
    let words = stringa3.split(" ");
    let fraseConMaiuscole = "";

  for (var i = 0; i < words.length; i++) {
    let singleWord = words[i];
    fraseConMaiuscole += singleWord.charAt(0).toUpperCase() + singleWord.slice(1) + "";
    if (i < words.length - 1) {
        fraseConMaiuscole += " ";
    }
  }
  return fraseConMaiuscole;
}

console.log(upperFirst(stringa3));

/* ESERCIZIO 9
 Scrivi una funzione di nome "cutString", che riceve come parametro una stringa. La funzione deve creare una nuova stringa senza il primo e l'ultimo carattere
 della stringa originale.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

let stringa4 = prompt("Esercizio 9 - Inserisci una frase o una parola")
console.log(stringa4)

function cutString(stringa4) {
    let stringaTagliata = stringa4.substring(1, stringa4.length - 1);
    return stringaTagliata;
  }

console.log(cutString(stringa4))

/* ESERCIZIO 10
 Scrivi una funzione di nome "giveMeRandom", che accetta come parametro un numero n e ritorna un'array contenente n numeri casuali inclusi tra 0 e 10.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

let n3 = Number(prompt("Esercizio 10 - Inserisci quanti numeri vuoi avere"))

function giveMeRandom(n3) {
    var numeriGenerati = [];
  
    for (var i = 0; i < n3; i++) {
      let singoloNumero = Math.floor(Math.random() * 11);
      numeriGenerati.push(singoloNumero);
    }
  
    return numeriGenerati;
  }

  console.log(giveMeRandom(n3))
