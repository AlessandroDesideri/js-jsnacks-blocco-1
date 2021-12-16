// Chiedo utente num e pari/dispari
let scelta = prompt('Scegli tra pari e dispari').toLocaleLowerCase()
console.log(scelta)
let userNumber = parseInt(prompt('Inserisci un numero da 1 a 5'));
console.log(userNumber)

// Funzione num random
function computerNumber(minNum , maxNum){
    let num = Math.floor(Math.random() * ((maxNum + 1) - minNum)) + minNum;
    return num;
}



//Funzione controllo pari/dispari
function pariDispari(numero, scelta){
    if ((numero % 2) === 0 && scelta === 'pari'){
        console.log(numero, 'L umano ha vinto');
    }
    else if ((numero % 2) !== 0 && scelta === 'dispari'){
        console.log('L umano ha vinto');
    }
    else {
        console.log('Ha vinto il computer');
    }
}

 
let machineNumber = computerNumber(1, 5);
let numero = userNumber + machineNumber;
console.log(machineNumber)
console.log(numero)
pariDispari(numero, scelta)
