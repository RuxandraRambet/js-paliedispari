'use strict';

// FUNZIONI

// funzione per prendere e validare la scelta dell'user
function handleUserChoice(text){
    let availableWords = ['pari', 'dispari'];
    let choice = '';

    do{
        choice = prompt(text).toLowerCase();
    }while(!availableWords.includes(choice));//parola inclusa nell'array

    return choice;
}
// per evitare ulteriori controlli
function handleUserNumber(text, min, max){
    let choice = '';

    do{
        choice = parseInt(prompt(text));
        console.log(choice);
    }while(choice < min || choice > max);

    return choice;
}
// random Number
function randomNumber(min, max){
    return Math.floor(Math.random() * (max - min + 1)) * min;
}

// pari o dispari
function isEven(number){
    return number % 2 === 0; // restituisce true or false 
}

// Chi vince
function userWon(userChoice, isEven){
    if(userChoice === 'pari' && isEven) return true;
    if(userChoice === 'dispari' && !isEven) return true; 
    return false;
}

// OPERAZIONI

const userChoice = handleUserChoice('Inserisci pari o dispari');
const userNumber = handleUserNumber('Inserisci un numero', 1, 5);
const computerNumber = randomNumber(1,5);

const numbersSum = userNumber + computerNumber;
const sumIsEven = isEven(numbersSum);
const winner = userWon(userChoice, sumIsEven)

console.log(`
Scelta User: ${userChoice}
Numero User: ${userNumber}
Numero Computer: ${computerNumber}
Somma Numeri: ${numbersSum} 
Somma Pari ? : ${sumIsEven}`);

if(winner){
    console.log('Vince user');
}else{
    console.log('Vince computer')
}
