/*
Pari e Dispari
L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
Sommiamo i due numeri
Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
Dichiariamo chi ha vinto.
Consigli del giorno
1. Scriviamo sempre in italiano i passaggi che vogliamo fare
2. Scriviamo sempre solo un pezzetto di codice alla volta, se funziona allora andiamo avanti.
Domande da farsi quando scriviamo una funzione
- 1 - Come la chiamo?
- 2 - Ho bisogno di parametri? (se si quali?)
- 3 - Devo restituire qualcosa? (se si cosa? di che tipo?)
- 4 OPZIONALE:  Qualcosa  potrebbe andare storto? (se si, cosa?)

`

*/

// Esercizio 2

const userChoice = prompt('Pari o Dispari ?: ', 'Pari');

const userNumber = parseInt(prompt('Inserisci un numero da 1 a 5: ', '2'));

function getCpuNumber(min = 1, max = 5) {
    const cpuNumber = Math.floor(Math.random() * (max - min)) + min;
    return cpuNumber;
}

const cpuNumber = getCpuNumber();

console.log(userChoice);
console.log(userNumber);
console.log(cpuNumber);

function sumNumber(a, b) {
    const sum = userNumber + cpuNumber;

    return sum;
}

const result = sumNumber();

console.log(result);

const even = result % 2 === 0;

const odd = result % 2 === 1;

console.log(even);
console.log(odd);

if (even === true && userChoice === 'Pari') {
    alert('Hai vinto!');
} else if (odd === true && userChoice === 'Dispari') {
    alert('Hai vinto!');
} else {
    alert('Hai Perso!');
}