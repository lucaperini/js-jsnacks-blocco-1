/**
 *
Chiedi un numero di 7 cifre all'utente
e calcola la somma di tutte le cifre che compongono il numero.

 *
 */

// let sum= 0;
// let userNumber= parseInt(prompt('Inserisci un numero di 7 cifre'));
// for (let i=0; i<7; i++){
//     userNumber = userNumber.split;
//     sum += userNumber;
// };
// console.log(sum);
//Ho avviato la soluzione dello snack ma non sapendo come suddividere la cifra stavo cercando di utilizzare la funzione split in maniera non corretta. La correzione e il completamento dello snack segue la correzione svolta in classe.

const userNumber=prompt('Inserisci un numero di sette cifre');
let sum = 0;
for (let i = 0; i < userNumber.length; i++){
    sum += parseInt(userNumber.charAt(i));
}
console.log(sum);


