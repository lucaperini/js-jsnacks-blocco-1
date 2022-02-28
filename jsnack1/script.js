/**
 * L'utente inserisce due numeri in successione, con due prompt.
    Il software stampa il maggiore.
 */
//Recupero il primo numero scelto dall'utente
const firstNumber = parseInt(prompt("inserisci il primo numero"));
//Recupero il primo secondo numero scelto dall'utente
const secondNumber = parseInt(prompt("inserisci il secondo numero"));
//verifico se il primo numero è maggiore del secondo
if (firstNumber > secondNumber){
    console.log('Questo è il maggiore dei due numeri scelti: ' + firstNumber);
}
//verifico se il secondo numero è maggiore del primo
else if (secondNumber > firstNumber){
    console.log('Questo è il maggiore dei due numeri scelti: ' + secondNumber);
}
//in tutti gli altri casi i numero sono uguali
else {
    console.log('I numeri sono uguali');
}