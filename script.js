const eye =
document.getElementById("eye");



function blink(){


eye.src =
"assets/eye-close.png";



setTimeout(()=>{


eye.src =
"assets/eye-open.png";


},350);


}




function randomBlink(){


let time =
Math.random()*3000+5000;


// 5-8秒


setTimeout(()=>{


blink();


randomBlink();


},time);


}



randomBlink();
