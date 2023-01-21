const inputText = document.querySelector("#area");
const message = document.querySelector('.message');
// const textResult = document.querySelector(".text-result");
const imgSearch  = document.querySelector(".img-search");
const imgLens = document.querySelector('.lens');
const defaultTitle = document.querySelector(".default-title");
const textDefault = document.querySelector(".default-text");
const buttonCopy = document.querySelector(".copy");
const eraseButton = document.querySelector('.erase');

imgLens.classList.remove('inactive');

function btnEncrypt() {
    imgLens.classList.add('inactive');
    defaultTitle.classList.add('inactive');
    textDefault.classList.add("inactive");
    buttonCopy.classList.remove("inactive");
    message.classList.remove('inactive');
    eraseButton.classList.remove('inactive');


    const result = encryptFunction(inputText.value);
    message.value = result;
    inputText.value="";
}

function encryptFunction(stringEncrypt){  
    let options = [["e", "enter"],["i", "imes"],["a", "ai"],["o", "ober"],["u", "ufat"]];

    stringEncrypt = stringEncrypt.toLowerCase();

    for(let i=0; i<options.length; i++){
        if(stringEncrypt.includes(options[i][0])){
            stringEncrypt = stringEncrypt.replaceAll(options[i][0], options[i][1]);
        }
    }
    return stringEncrypt
}

function btnDecrypt() {
    imgLens.classList.add('inactive');
    defaultTitle.classList.add('inactive');
    textDefault.classList.add("inactive");
    buttonCopy.classList.remove("inactive");
    message.classList.remove('inactive');
    eraseButton.classList.remove('inactive');

    const answer = decrypt(inputText.value);
    message.value = answer;

}

function decrypt(stringDecrypt){
    let options = [["e", "enter"],["i", "imes"],["a", "ai"],["o", "ober"],["u", "ufat"]];

    for(let i=0; i<options.length; i++){
        if(stringDecrypt.includes(options[i][1])){
            stringDecrypt = stringDecrypt.replaceAll(options[i][1], options[i][0]);
        }
    }
    return stringDecrypt    
}

function btnErase(){
    imgLens.classList.remove('inactive');
    defaultTitle.classList.remove('inactive');
    textDefault.classList.remove("inactive");
    buttonCopy.classList.add("inactive");
    message.classList.add('inactive');
    eraseButton.classList.add('inactive');

    inputText.value="";
    message.value="";

}