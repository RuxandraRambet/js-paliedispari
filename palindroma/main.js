'use strict';
// Chiedo all'utente con un prompt di inserire una parola 
const Userword = prompt('Inserisci una parola');

// Creo una funzione per capire se la parola e palindroma
function palindrome(word)
{
     
    /* Uso i metodi split,reverse e join 
    Questo processo inverte l'ordine delle lettere nella parola */
    let splitWord = word.split('')
    let reverseWord = splitWord.reverse();
    let joinWord = reverseWord.join('');

    console.log(splitWord);
    console.log(reverseWord);
    console.log(joinWord);

    /* Confronto fra parola iniziale e risultato*/
    if (word === joinWord) {
        return true
    }
    else {
        return false
    }
};
// Stampo messaggio in console
if (palindrome(Userword)) {
    console.log(`${Userword} è una parola palindroma`)
}
else {
    console.log(`${Userword} non è una parola palindroma`)
}

