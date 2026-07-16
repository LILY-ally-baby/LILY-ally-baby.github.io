/* =====================================
   LIYI PORTFOLIO JAVASCRIPT
===================================== */


document.addEventListener(
"DOMContentLoaded",
function(){



/* =====================================
1. HERO PARTICLES
首页光粒子效果
===================================== */


const particleContainer =
document.querySelector(".particles");



if(particleContainer){


for(let i=0;i<45;i++){


const particle =
document.createElement("span");


particle.className="particle";



particle.style.left =
Math.random()*100+"%";



particle.style.animationDuration =
(
8+
Math.random()*12
)
+
"s";



particle.style.animationDelay =
(
Math.random()*10
)
+
"s";



particleContainer.appendChild(
particle
);



}


}










/* =====================================
2. HERO MOUSE PARALLAX
首页背景轻微移动
===================================== */


const heroBackground =
document.querySelector(
".hero-background"
);



if(heroBackground){



window.addEventListener(
"mousemove",
(e)=>{


let x =
(e.clientX /
window.innerWidth
-
0.5)
*
20;



let y =
(e.clientY /
window.innerHeight
-
0.5)
*
20;



heroBackground.style.transform =

`
scale(1.08)
translate(${x}px,${y}px)
`;



});


}











/* =====================================
3. JOURNEY CARD HOVER ENHANCE
MY JOURNEY悬浮效果
===================================== */


const journeyCards =
document.querySelectorAll(
".journey-image"
);



journeyCards.forEach(
(card)=>{


card.addEventListener(
"mouseenter",
()=>{


card.style.boxShadow =
"0 30px 60px rgba(0,0,0,.25)";



});





card.addEventListener(
"mouseleave",
()=>{


card.style.boxShadow =
"0 20px 40px rgba(0,0,0,.15)";


});



});









/* =====================================
4. SCROLL REVEAL
滚动进入动画
===================================== */


const revealElements =
document.querySelectorAll(

".journey-item,"
+
".photo-feature,"
+
".photo-grid img,"
+
".story-description,"
+
".contact-info"

);



revealElements.forEach(
(element)=>{


element.style.opacity="0";


element.style.transform=
"translateY(60px)";


element.style.transition=
"all 1s ease";



});






const revealObserver =
new IntersectionObserver(

(entries)=>{


entries.forEach(
(entry)=>{


if(entry.isIntersecting){



entry.target.style.opacity="1";



entry.target.style.transform=
"translateY(0)";



revealObserver.unobserve(
entry.target
);



}



});



},

{

threshold:0.2

}



);





revealElements.forEach(
(element)=>{


revealObserver.observe(
element
);


});









/* =====================================
5. STORYTELLING FAN OPENING
七张图片左到右展开
===================================== */


const storyFan =
document.querySelector(
".story-fan"
);



if(storyFan){



const storyImages =
storyFan.querySelectorAll(
"img"
);



const fanPositions=[


{
x:-360,
rotate:-35
},


{
x:-240,
rotate:-25
},


{
x:-120,
rotate:-15
},


{
x:0,
rotate:0
},


{
x:120,
rotate:15
},


{
x:240,
rotate:25
},


{
x:360,
rotate:35
}



];





const storyObserver =
new IntersectionObserver(

(entries)=>{


entries.forEach(
(entry)=>{


if(
entry.isIntersecting
){



storyImages.forEach(
(img,index)=>{


setTimeout(
()=>{


img.style.opacity="1";


img.style.transform=

`
translateX(${fanPositions[index].x}px)
rotate(${fanPositions[index].rotate}deg)
`;



},
index*250
);



});




storyObserver.disconnect();



}



});


},

{

threshold:.3

}



);




storyObserver.observe(
storyFan
);



}











/* =====================================
6. NAVBAR SCROLL EFFECT
===================================== */


const navbar =
document.querySelector(
".navbar"
);



window.addEventListener(
"scroll",
()=>{


if(
window.scrollY>80
){


navbar.style.background=
"rgba(0,0,0,.35)";


navbar.style.backdropFilter=
"blur(10px)";



}

else{


navbar.style.background=
"transparent";


navbar.style.backdropFilter=
"none";



}



});









/* =====================================
7. LEARN MORE BUTTON
===================================== */


const learnButton =
document.querySelector(
".learn-btn"
);



if(learnButton){


learnButton.addEventListener(
"click",
()=>{


document.querySelector(
"#about"
)
.scrollIntoView(

{

behavior:"smooth"

}

);


});


}






});
