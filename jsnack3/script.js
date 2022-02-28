/**
 * 
   Il software deve chiedere per 10 volte all'utente di inserire un numero.
   Il programma stampa la somma di tutti i numeri inseriti.
 */
//Definisco una variabile per la somma che vorrò ottenere
   total = 0;
//Creo un ciclo che per 10 volte chiede di inserire un numero all'utente che aggiungo ad ogni ciclo al valore della variabile total
   for (let i = 0; i < 10; i++){
       const userNumber = parseInt(prompt('Inserisci un numero'));
       total += userNumber;
    }
//Concluso il ciclo stampo la somma dei numeri inseriti(variabile total)
   console.log(total);