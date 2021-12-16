// Chiedo utente num e pari/dispari
let userNumber = parseInt(prompt('Inserisci un numero da 1 a 5'));
let scelta = prompt('Scegli tra pari e dispari')

console.log(userNumber)


function computerNumber(minNum , maxNum){
    let num = Math.floor(Math.random() * ((maxNum + 1) - minNum)) + minNum;
    return num;
}

let machineNumber = computerNumber(1, 5);
console.log(machineNumber)
numero = userNumber + machineNumber;
console.log(numero);