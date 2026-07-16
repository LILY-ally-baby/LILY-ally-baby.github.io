const particles = document.getElementById("particles");


const particleCount = 80;


for(let i = 0; i < particleCount; i++){


    const p = document.createElement("div");


    p.className = "particle";


    p.style.left = Math.random() * 100 + "%";


    p.style.top = Math.random() * 100 + "%";


    const size = Math.random() * 3 + 1;


    p.style.width = size + "px";
    p.style.height = size + "px";



    p.style.animationDuration =
    (8 + Math.random()*15) + "s";



    p.style.animationDelay =
    (-Math.random()*20) + "s";



    particles.appendChild(p);


}
