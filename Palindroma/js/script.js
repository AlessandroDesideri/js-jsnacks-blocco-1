const word = prompt('Inserire parola')

function palindroma(string) {

    const arrayParola = word.split('');
    const arrayReverse = arrayParola.reverse('');
    const parolaInvertita = arrayReverse.join('');

    if (word == parolaInvertita) {
        console.log('La parola è palindroma')
    }
    else {
        console.log('Non è palindroma')
    }
}

palindroma(word);