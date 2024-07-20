var navLinks = document.getElementById("navLinks")

function showMenu(){
    navLinks.style.right = "0px";
}
function hideMenu(){
    navLinks.style.right = "-200px";
}

let inp = document.getElementById('inp')
let inp2 = document.getElementById('inp2')

function check() {

let reg = /^[a-zA-Z]{5,15}$/

if(reg.test(inp.value)){
    console.log('pass');
}else{
    alert('enter valid username ')
}

let regEmail = /^[a-zA-Z0-9_$]{3,20}@[a-z]{2,9}\.[a-z]{2,6}$/

if(regEmail.test(inp2.value)){
    console.log('pass email');
}else{
    alert('enter valid email')
}
}
