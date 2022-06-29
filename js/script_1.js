console.log('JS OK')

/*
Palidroma
Chiedere all’utente di inserire una parola
Creare una funzione per capire se la parola inserita è palindroma
Consigli del giorno
1. Scriviamo sempre in italiano i passaggi che vogliamo fare
2. Scriviamo sempre solo un pezzetto di codice alla volta, se funziona allora andiamo avanti.
Domande da farsi quando scriviamo una funzione
- 1 - Come la chiamo?
- 2 - Ho bisogno di parametri? (se si quali?)
- 3 - Devo restituire qualcosa? (se si cosa? di che tipo?)
- 4 OPZIONALE:  Qualcosa  potrebbe andare storto? (se si, cosa?)
*/

// Esercizio 1

const userWord = prompt('Inserisci una parola: ', 'otto');
console.log(userWord);

function reverseWord(a) {
    let result = '';
    for (let i = userWord.length - 1; i >= 0; i--) {
        result += userWord[i];
    }

    return result;
}

const reversedWord = reverseWord(userWord);


if (reversedWord === userWord) {
    alert('palindromo');
}