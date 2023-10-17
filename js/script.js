// Palindroma

// inserire parola
const wordInput= document.getElementById('inputPalindromo');
const btnPali = document.getElementById('btn-pali');
btnPali.addEventListener ('click', isPalindormo)
// controllare se la parola inserita è palindroma
function isPalindormo(){
    //checkInput(wordInput, )
    const inputValue= wordInput.value.toLowerCase();

    let reverse ='';
    for (let i = inputValue.length -1; i >= 0; i--) {
        reverse += inputValue[i];
        
    }
    if (inputValue === reverse){
    console.log('la parola inserita è  palindroma');
    } else {
        console.log('la parola inserita non è palindroma')
    }
}   

function checkInput (input, chk){

}


// Pari e dispari

// bottone pari e dispari
const btnPariDispari= document.getElementById('btn-pari-dispari');
btnPariDispari.addEventListener('click', playOddEven);

// scegliere pari o dispari


    
// inserire un numero
const numInput = document.getElementById('number');//(valore input)
console.log(numInput);
// genera un numero randomico da uno a 5 e sommalo al numero dell'utente

//sommare i due numeri

//dichiarare il vincitore



function playOddEven(){
    const pariDispari = document.querySelector('.pari-dispari');//(valore select)
    console.log(pariDispari)
    let oddeven = pariDispari.value;
    console.log(oddeven);
    let num = numInput.value
    console.log(num);
    
}