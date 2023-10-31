/* ESERCIZIO 1
 Scrivi un algoritmo per trovare il più grande tra due numeri interi.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

let number1 = Number(window.prompt("Inserisci il primo numero della domanda 1"));
let number2 = Number(window.prompt("Inserisci il secondo numero della domanda 1"));

if(number1 > number2) {
      console.log("Il primo numero è maggiore del secondo.")
} else if(number1 < number2) {
  console.log("Il secondo numero è maggiore del primo.")
}

/* ESERCIZIO 2
  Scrivi un algoritmo che mostri "not equal" in console se un numero intero fornito è diverso da 5.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

let number = Number(window.prompt("Inserisci un Numero - Domanda 2"));
if(number != 5) {
      console.log("Not Equal")
} else {
      console.log("Equal")
}

/* ESERCIZIO 3
  Scrivi un algoritmo che mostri "divisibile per 5" in console se un numero fornito è perfettamente divisibile per 5 (suggerimento: cerca l'operatore modulo su un motore di ricerca)
*/

/* SCRIVI QUI LA TUA RISPOSTA */

number = Number(window.prompt("Inserisci un Numero - Domanda 3"));

let modulo = number % 5;
if(modulo == 0) {
      console.log("Divisibile per 5")
} else {
      console.log("Non divisibile per 5")
}



/* ESERCIZIO 4
  Scrivi un algoritmo per verificare che, dati due numeri interi, il valore di uno di essi sia 8 oppure se la loro addizione/sottrazione sia uguale a 8.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

number1 = Number(window.prompt("Inserisci il primo numero della domanda 4"));
number2 = Number(window.prompt("Inserisci il secondo numero della domanda 4"));

if(number1 == 8, number2 == 8) {
  console.log("Sono tutti 8!")
} else if(number1 == 8) {
      console.log("Il primo numero è 8")
} else if(number2 == 8) {
      console.log("Il secondo numero è 8")
} else {
      console.log("Mi dispiace, non c'è 8 qui!")
}

if(number1 - number2 == 8) {
      console.log("Il primo numero sottratto del secondo fa 8")
} else if(number1 + number2 == 8) {
      console.log("Il primo numero sommato al secondo fa 8")
} else if(number2 - number1 == 8) {
      console.log("Il secondo numero sottratto del primo fa 8")
} else {
      console.log("Mi dispiace, nessun risultato è 8!")
}

/* ESERCIZIO 5
  Stai lavorando su un sito di e-commerce. Stai salvando il saldo totale del carrello dell'utente in una variabile "totalShoppingCart".
  C'è una promozione in corso: se il totale del carrello supera 50, l'utente ha diritto alla spedizione gratuita (altrimenti la spedizione ha un costo fisso pari a 10).
  Crea un algoritmo che determini l'ammontare totale che deve essere addebitato all'utente per il checkout.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

let prodotto1 = Number(prompt("Aggiungi al carrello"));
let prodotto2 = Number(prompt("Aggiungi al carrello"));
let sommaProdotti = (prodotto1 + prodotto2);
console.log(sommaProdotti)

if (sommaProdotti > 50) {
      console.log("Hai superato i 50 soldi! Hai la spedizione gratuita!")
} else {
      console.log("Finchè non superi i 50 soldi la spedizione costa 10 soldi...")
}

if (sommaProdotti <= 50) {
      let totalShoppingCart = (sommaProdotti + 10)
      console.log(totalShoppingCart)
} else {
      totalShoppingCart = (sommaProdotti)
      console.log(totalShoppingCart)
}

/* ESERCIZIO 6
  Stai lavorando su un sito di e-commerce. Oggi è il Black Friday e viene applicato il 20% su ogni prodotto.
  Modifica la risposta precedente includendo questa nuova promozione nell'algoritmo, determinando come prima se le spedizioni sono gratuite oppure no e e calcolando il totale.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

console.log("Oggi è il Black Friday!")
prodotto1 = Number(prompt("Aggiungi al carrello"));
prodotto2 = Number(prompt("Aggiungi al carrello"));
let sconto1 = (prodotto1 - ((prodotto1 * 20) / 100));
console.log(sconto1);
let sconto2 = (prodotto2 - ((prodotto2 * 20) / 100));
console.log(sconto2);
sommaProdotti = (sconto1 + sconto2);
console.log(sommaProdotti)

if (sommaProdotti > 50) {
      console.log("Hai superato i 50 soldi! Hai la spedizione gratuita!")
} else {
      console.log("Finchè non superi i 50 soldi la spedizione costa 10 soldi...")
}

if (sommaProdotti <= 50) {
      let totalShoppingCart = (sommaProdotti + 10)
      console.log(totalShoppingCart)
} else {
      totalShoppingCart = (sommaProdotti)
      console.log(totalShoppingCart)
}

/* ESERCIZIO 7
  Crea tre variabili, e assegna un valore numerico a ciascuna di esse.
  Utilizzando un blocco condizionale, crea un algoritmo per ordinarle secondo il loro valore, dal più alto al più basso.
  Alla fine mostra il risultato in console.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

number1 = Number(prompt("Inserisci il primo numero della domanda 7"));
number2 = Number(prompt("Inserisci il secondo numero della domanda 7"));
let number3 = Number(prompt("Inserisci il terzo numero della domanda 7"));

if (number1 > number2&&number1 > number3&&number2 > number3) { // 1 2 3 
      console.log("L'ordine dei numeri, partendo dal più alto è:", number1, number2, number3)
} else if (number1 > number2&&number1 > number3&&number3 > number2) { // 1 3 2
      console.log("L'ordine dei numeri, partendo dal più alto è:", number1, number3, number2)
} else if (number2 > number1&&number2 > number3&&number1 > number3) { // 2 1 3
      console.log("L'ordine dei numeri, partendo dal più alto è:", number2, number1, number3)
} else if (number2 > number1&&number2 > number3&&number3 > number1) { // 2 3 1
      console.log("L'ordine dei numeri, partendo dal più alto è:",number2, number3, number1)
} else if (number3 > number2&&number3 > number1&&number2 > number1) { // 3 2 1
      console.log("L'ordine dei numeri, partendo dal più alto è:", number3, number2, number1)
} else if (number3 > number2&&number3 > number1&&number1 > number2) { // 3 1 2
      console.log("L'ordine dei numeri, partendo dal più alto è:", number3, number1, number2)
} 

/* ESERCIZIO 8
  Crea un algoritmo per verificare che un valore fornito sia un numero oppure no (suggerimento: cerca su un motore di ricerca "typeof").
*/

/* SCRIVI QUI LA TUA RISPOSTA */

console.log("Domanda 8");

let tipo = prompt("Inserisci un numero");
isNaN(tipo);

if (isNaN(tipo)) {
      console.log("La variabile è un numero.");
} else {
      console.log("La variabile non è un numero.");
}

/* ESERCIZIO 9
  Crea un algoritmo per controllare se un numero fornito sia pari o dispari (suggerimento: cerca l'operatore modulo su un motore di ricerca)
*/

/* SCRIVI QUI LA TUA RISPOSTA */

console.log("Domanda 9");

number = Number(prompt("Inserisci il numero della domanda 9"));

if (number % 2 == 0) {
  console.log("Il numero è pari.")
} else {
  console.log("Il numero è dispari.")
}

/* ESERCIZIO 10
  Modifica la logica del seguente algoritmo in modo che mostri in console il messaggio corretto in ogni circostanza.
  let val = 7
  if (val < 10) {
      console.log("Meno di 10");
    } else if (val < 5) {
      console.log("Meno di 5");
    } else {
      console.log("Uguale a 10 o maggiore");
    }
*/

/* SCRIVI QUI LA TUA RISPOSTA */

console.log("Domanda 10");
val = 10
  if (val < 10&&val >= 5) {
      console.log("Meno di 10");
    } else if (val < 5) {
      console.log("Meno di 5");
    } else {
      console.log("Uguale a 10 o maggiore");
    }

/* ESERCIZIO 11
  Fornito il seguente oggetto, scrivi del codice per aggiungere una proprietà "city", il cui valore sarà "Toronto".
*/
console.log("Domanda 11");

const me = {
  name: 'John',
  lastName: 'Doe',
  skills: ['javascript', 'html', 'css'],
}

/* SCRIVI QUI LA TUA RISPOSTA */
me.city = "Toronto";

console.log(me)


/* ESERCIZIO 12
  Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere la proprietà "lastName".
*/

/* SCRIVI QUI LA TUA RISPOSTA */

console.log("Domanda 12");

const me2 = {
  name: 'John',
  lastName: 'Doe',
  skills: ['javascript', 'html', 'css'],
}

me2.city = "Toronto";
delete me2.lastName

console.log(me2)

/* ESERCIZIO 13
  Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere l'ultimo elemento della proprietà "skills".
*/

/* SCRIVI QUI LA TUA RISPOSTA */

console.log("Domanda 13");

const me3 = {
  name: 'John',
  lastName: 'Doe',
  skills: ['javascript', 'html', 'css'],
}

me3.city = "Toronto";
delete me3.lastName
me3.skills.splice(2, 1)

console.log(me3)

/* ESERCIZIO 14
  Scrivi del codice per creare un array inizialmente vuoto. Riempilo successivamente con i numeri da 1 a 10.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

console.log("Domanda 14")

let array2 = []
array2.splice(0, 1, "1");
array2.splice(1, 2, "2");
array2.splice(2, 3, "3");
array2.splice(3, 4, "4");
array2.splice(4, 5, "5");
array2.splice(5, 6, "6");
array2.splice(6, 7, "7");
array2.splice(7, 8, "8");
array2.splice(8, 9, "9");
array2.push("10")

console.log(array2)

/* ESERCIZIO 15
  Scrivi del codice per sostituire l'ultimo elemento dell'array, ovvero il valore 10, con il valore 100.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

console.log("Domanda 15")

array2 = []
array2.splice(0, 1, "1");
array2.splice(1, 2, "2");
array2.splice(2, 3, "3");
array2.splice(3, 4, "4");
array2.splice(4, 5, "5");
array2.splice(5, 6, "6");
array2.splice(6, 7, "7");
array2.splice(7, 8, "8");
array2.splice(8, 9, "9");
array2.push("10")
array2.splice(9, 10, "100")

console.log(array2)