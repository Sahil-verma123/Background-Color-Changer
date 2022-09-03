
let display = document.querySelector('body');
let button = document.querySelector('button');
let hexCode = document.getElementById('demo');
let buttonBackground = document.getElementById('demo1');
let alphabets = ['A','B','C','D','E','F',1,2,3,4,5,6,7,8,9,0];

button.addEventListener('click', changeColor);

function changeColor(){
    let hex = '#'
    for(let i = 1 ; i<=6 ; i++){
        let makeHexCode = Math.floor(Math.random() * alphabets.length)
        hex += alphabets[makeHexCode]; 
    }
    display.style.backgroundColor = hex;
    buttonBackground.style.backgroundColor = hex
    hexCode.innerHTML = hex
}
