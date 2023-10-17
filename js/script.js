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
    console.log(reverse);
}

function checkInput (input, chk){

}

