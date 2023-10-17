// Palindroma

// inserire parola
const wordInput = document.getElementById('inputPalindromo');
const btnPali = document.getElementById('btn-pali');
btnPali.addEventListener('click', isPalindormo)
// controllare se la parola inserita è palindroma
function isPalindormo() {
    resetForm();

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
    resetForm(resultOddEven);

    let oddeven = pariDispari.value;
    console.log(oddeven);
    let num = parseInt(numInput.value);
    console.log(num);
    let bgAlert;
    let result;
    // genera un numero randomico da uno a 5 e sommalo al numero dell'utente
    //sommare i due numeri
    let sum = num + getRndInteger(1, 5);
    console.log(sum);
    let youWin = 'Complimenti! Hai Vinto!';
    let youLose = ' Mi dispiace, hai perso. Ritenta'
    //dichiarare il vincitore
    // let result= ((isEven(sum) && oddeven === 'pari') || !(isEven(sum) && oddeven === 'dispari')) ? youWin : youLose;
    // console.log(result);
    if (isEven(sum) && oddeven === 'pari'){
        result = youWin;
        bgAlert = 'alert-success';
    } else if (!isEven(sum) && oddeven === 'dispari') {
        result = youWin;
        bgAlert = 'alert-success';
    } else {
        result = youLose;
        bgAlert = 'alert-danger';
    }
    printResult(resultOddEven, bgAlert,result);
}



function resetForm(element){
    element.classList.remove('alert-success');
    element.classList.remove('alert-danger');
    element.classList.add('d-none');

}

function printResult(element, bgAlert, result){
    element.classList.add(bgAlert);
    element.classList.remove('d-none');
    element.innerHTML = result;
}