const container =
document.getElementById("particles");


for(let i=0;i<160;i++){


let p=document.createElement("div");


p.className="particle";


let size=Math.random()*4+1;


p.style.width=size+"px";

p.style.height=size+"px";


p.style.left=Math.random()*100+"%";


p.style.top=Math.random()*100+"%";


p.style.animationDuration=
(8+Math.random()*15)+"s";


p.style.animationDelay=
(-Math.random()*20)+"s";



container.appendChild(p);


}
