const particles =
document.getElementById("particles");



for(let i=0;i<100;i++){


const particle =
document.createElement("div");



particle.className="particle";



particle.style.left =
Math.random()*100+"%";



particle.style.top =
Math.random()*100+"%";



let size =
Math.random()*3+1;


particle.style.width =
size+"px";


particle.style.height =
size+"px";



particle.style.animationDuration =
(
6+
Math.random()*10

)
+"s";



particle.style.animationDelay =
(
Math.random()*8

)
+"s";



particles.appendChild(particle);


}
