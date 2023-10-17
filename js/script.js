// Palindroma

// inserire parola
const wordInput = document.getElementById('inputPalindromo');
const btnPali = document.getElementById('btn-pali');
btnPali.addEventListener('click', isPalindormo)
// controllare se la parola inserita è palindroma
function isPalindormo() {
    //checkInput(wordInput, )
    const inputValue = wordInput.value.toLowerCase();

    let reverse = '';
    for (let i = inputValue.length - 1; i >= 0; i--) {
        reverse += inputValue[i];

    }
    if (inputValue === reverse) {
        console.log('la parola inserita è  palindroma');
    } else {
        console.log('la parola inserita non è palindroma')
    }
}

// Pari e dispari

// bottone pari e dispari
const btnPariDispari = document.getElementById('btn-pari-dispari');
btnPariDispari.addEventListener('click', playOddEven);
//risultato pari e dispari
const resultOddEven = document.getElementById('result-odd-even');

// scegliere pari o dispari
const pariDispari = document.querySelector('.pari-dispari');//(valore select)

// inserire un numero
const numInput = document.getElementById('number');//(valore input)






function playOddEven() {
    resetForm();

    let oddeven = pariDispari.value;
    console.log(oddeven);
    let num = parseInt(numInput.value);
    console.log(num);
    let bgAlert;
    // genera un numero randomico da uno a 5 e sommalo al numero dell'utente
    //sommare i due numeri
    let sum = num + getRndInteger(1, 5);
    console.log(sum);
    let youWin = 'Complimenti! Hai Vinto!';
    let youLose = ' Mi dispiace, hai perso. Ritenta'
    //dichiarare il vincitore
    let result= (isEven(sum) && oddeven === 'pari') ? youWin : youLose;
    console.log(result);
    if (result == youWin) {
        bgAlert = 'alert-success';
    } else if (result == youLose){
        bgAlert = 'alert-danger';
    }
    resultOddEven.classList.add(bgAlert);
    resultOddEven.classList.remove('d-none');
    resultOddEven.innerHTML = result;
}



function resetForm(){
    resultOddEven.classList.remove('alert-success');
    resultOddEven.classList.remove('alert-danger');
    resultOddEven.classList.add('d-none');

}

function printResult(){

}