prompt('Inserisci un numero da 1 a 5')
function numCasuale(minNum , maxNum){
    let num = Math.floor(Math.random() * ((maxNum + 1) - minNum)) + minNum;
    return num;
}