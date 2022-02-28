/**
 * 
   L'utente inserisce due parole in successione, con due prompt.
   Il software stampa prima la parola più corta, poi la parola più lunga.
 */
//Recupero la prima parola dell'utente
const firstWord = prompt('Inserisci la prima parola');
//Recupero la seconda parola dell'utente
const secondWord = prompt('Inserisci la seconda parola');
//Verifico se la prima parola è più lunga in numero di caratteri della seconda e nel caso lo sia stampo prima la seconda parola poi la prima
if (firstWord.length > secondWord.length){
    console.log(secondWord + firstWord);
    document.getElementById('word-sequence').innerHTML=secondWord +" "+ firstWord;
}
//Verifico se la seconda parola è più lunga in numero di caratteri della prima e nel caso lo sia stampo prima la prima parola poi la seconda
else if (secondWord.length >firstWord.length){
    console.log(firstWord + secondWord);
    document.getElementById('word-sequence').innerHTML=firstWord + " " + secondWord;

}
//Negli altri casi le due parole avranno lo stesso numero di caratteri e quindi sta,mperò che sono uguali
else {
    console.log('Le due parole hanno lo stesso numero di caratterri');
    document.getElementById('word-sequence').innerHTML="Le due parole hanno lo stesso numero di caratteri";
}