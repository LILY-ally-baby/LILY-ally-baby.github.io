/* =========================
        PARTICLES SYSTEM
========================= */


const particleContainer = document.getElementById("particles");



const particleCount = 120;



for(let i = 0; i < particleCount; i++){



    const particle = document.createElement("div");


    particle.className = "particle";



    // random position

    particle.style.left =
    Math.random() * 100 + "%";



    particle.style.bottom =
    Math.random() * -20 + "%";




    // random size


    const size =
    Math.random() * 5 + 2;



    particle.style.width =
    size + "px";


    particle.style.height =
    size + "px";





    // random opacity


    particle.style.opacity =
    Math.random() * .7 + .2;






    // random speed


    const duration =
    Math.random() * 15 + 8;



    particle.style.animationDuration =
    duration + "s";





    // random delay


    particle.style.animationDelay =

    Math.random() * 10 + "s";





    particleContainer.appendChild(particle);



}









/* =========================
        PAGE LOAD EFFECT
========================= */



window.addEventListener(
"load",
()=>{


    document.body.classList.add(
        "loaded"
    );



});









/* =========================
        KEEP HERO ELEMENTS SAFE
========================= */



const heroLogo =
document.querySelector(".logo");



const heroText =
document.querySelector(".hero-content");




if(heroLogo){


    heroLogo.style.zIndex="50";


}



if(heroText){


    heroText.style.zIndex="50";


}









/* =========================
        TREE RESTART WHEN VIEW
========================= */


const tree =
document.querySelector(".tree-image");



const observer =
new IntersectionObserver(
(entries)=>{


    entries.forEach(
    entry=>{


        if(entry.isIntersecting){


            tree.style.animation =
            "none";



            setTimeout(()=>{


                tree.style.animation =
                "treeGrow 3s ease forwards";


            },100);



        }



    });


},
{

threshold:.4

});



if(tree){

    observer.observe(tree);

}
