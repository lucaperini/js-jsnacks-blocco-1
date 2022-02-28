/**
 *
   In un array sono contenuti i nomi degli invitati alla festa del grande Gatsby, chiedi all'utente il suo nome e comunicagli se può partecipare o no alla festa.
 *
 */
//Creo una lista di invitati
const guestList = ["Luca", "Giovanni", "Pippo", "Pluto", "Gaspare", "Maria", "Teresa", "John", "Mark", "Rick"];
//Recupero il nome inserito dall'utente escludendo gli spazi e convertendo i caratteri in minuscolo. NB.I metodi toLowerCase e trim li ho inclusi dopo la correzione. 
const userName = prompt('Inserisci il tuo nome').toLowerCase.trim();
//Aggiungo una variabile flag
let isRegistered = false;
//Avvio un ciclo che per tutta la lunghezza dell'array verifica se il nome è presente oppure no e nel caso sia presente o assente genera un messaggio di benvenuto o una risposta di esclusione
for (let i = 0; i < guestList.length; i++) {
    if (userName == guestList[i].toLocaleLowerCase){
        isRegistered = true;
    }
    if (isRegistered == true){
    console.log('Benvenuto, sei nella lista');
    }
    else {
    console.log('Non sei stato invitato, mi spiace');
    }
}