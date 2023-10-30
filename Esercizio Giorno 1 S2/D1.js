/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per visualizzare l'output, lancia il file HTML a cui è collegato e apri la console dagli strumenti di sviluppo del browser. 
- Utilizza dei console.log() per testare le tue variabili e/o i risultati delle espressioni che stai creando.
*/

/* ESERCIZIO 1
 Elenca e descrivi i principali datatype in JavaScript. Prova a spiegarli come se volessi farli comprendere a un bambino.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

let numero = 10;
console.log(numero)
/*Il datatype Numerico esprime il suo contenuto come valore numerico, si
scrive semplicemente come numero dopo l'identificatore "=".*/
numero = 5.7;
console.log(numero)
/*Per inserire valori decimali si scrive come N.decimale
(NON si usa la virgola ma il punto).*/

let testo = "Esempio di testo";
console.log (testo)
/*Il datatype Stringa esprime un valore in termini di testo scritto 
(sia come carattere singolo che come insieme di caratteri),
si esprime inserendo gli apici (singoli o doppi
anche se meglio questi ultimi) intorno al testo interessato
dopo l'identificatore "=".*/
testo = "Esempio stringa con numeri 1 2 3";
console.log(testo)
/*Se si inseriscono dei numeri all'interno di una stringa essi
non avranno datatype numerico.*/

let booleano1 = true;
console.log(booleano1)

let booleano2 = false;
console.log(booleano2)
/*Il datatype Booleano ha solo due valori possibili: true o false.
Viene principalmente utilizzato nei comandi ed è utile a far prendere
delle decisioni al nostro codice.*/

/* ESERCIZIO 2
 Crea una variable chiamata "name" e assegna ad essa il tuo nome, sotto forma di stringa.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

let name = "Francesco";
console.log(name);

/* ESERCIZIO 3
 Scrivi il codice necessario ad effettuare un addizione (una somma) dei numeri 12 e 20.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

let somma = 12 + 20;
console.log(somma)

/* ESERCIZIO 4
 Crea una variable di nome "x" e assegna ad essa il numero 12.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

let x = 12;
console.log(x);

/* ESERCIZIO 5
  Riassegna un nuovo valore alla variabile "name" già esistente: il tuo cognome.
  Dimostra l'impossibilità di riassegnare un valore ad una variabile dichiarata con il costrutto const.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
name = "Zatti"; //Questo se la variabile è, appunto, una variabile sovrascrive il valore assegnatole in precedenza
console.log(name);

var namevar = "Francesco";
console.log(namevar)

var namevar = "Zatti";
console.log(namevar)

const citta = "Parma";
console.log(citta);

/*const citta = "Reggio"; <-- Se si toglie il commento il file js darà errore
console.log(citta);*/

/* ESERCIZIO 6
 Esegui una sottrazione tra i numeri 4 e la variable "x" appena dichiarata (che contiene il numero 12).
*/
let y = 4;
console.log(x - y)

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 7
 Crea due variabili: "name1" e "name2". Assegna a name1 la stringa "john", e assegna a name2 la stringa "John" (con la J maiuscola!).
 Verifica che name1 sia diversa da name2 (suggerimento: è la stessa cosa di verificare che la loro uguaglianza sia falsa).
 EXTRA: verifica che la loro uguaglianza diventi true se entrambe vengono trasformate in lowercase (senza cambiare il valore di name2!).
*/

/* SCRIVI QUI LA TUA RISPOSTA */

let name1 = "john";
console.log(name1);

let name2 = "John";
console.log(name2);


console.log(name1 === name2) //Il valore john è diverso da John, l'uguaglianza è falsa

console.log(name1 !== name2) //conferma della diversità

console.log(name1 === name2.toLowerCase("Jhon")) //se impostiamo name2 come tutto in lowercase l'uguaglianza è vera

/* Questi risultati sono ottenuti grazie all'uguaglianza specifica data da ===, così da considerare sia
il valore che il tipo della variabile*/