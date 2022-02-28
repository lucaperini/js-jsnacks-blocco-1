/**
 * 
Crea un array vuoto.
Chiedi per 6 volte all'utente di inserire un numero,
se è dispari inseriscilo nell'array.
 * 
 */

//Creo un array vuoto
let emptyArr =[];
//Avvio un ciclo che chiede per 6 volte all'utente di inserire un numero
for (let i = 0; i < 7; i++){
    const userNumber = parseInt(prompt('Inserisci un numero'));
//Se il numero non è pari lo inserisco nell'array
    if (userNumber % 2 != 0){
        emptyArr.push(userNumber);
    }
}
//Stampo il nuovo contenuto dell'Array
console.log(emptyArr);
