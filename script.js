/* =================================

LIYI PORTFOLIO JAVASCRIPT

================================= */



document.addEventListener(
"DOMContentLoaded",
()=>{



/* =================================

1. HERO PARTICLES

首页光粒子动态增强

================================= */


const particles =
document.querySelector(".particles");


if(particles){


for(let i=0;i<35;i++){


let particle =
document.createElement("span");


particle.className="particle";


particle.style.left =
Math.random()*100+"%";


particle.style.top =
Math.random()*100+"%";


particle.style.animationDelay =
Math.random()*10+"s";


particle.style.animationDuration =
(8+Math.random()*12)+"s";



particles.appendChild(particle);



}


}








/* =================================

2. SCROLL FADE EFFECT

页面进入渐显

================================= */


const revealElements =
document.querySelectorAll(

".about,\
.journey-item,\
.photo-grid img,\
.main-photo,\
.story-text,\
.contact-content"

);



revealElements.forEach(el=>{

el.classList.add("reveal");

});





const revealObserver =
new IntersectionObserver(

(entries)=>{


entries.forEach(entry=>{


if(entry.isIntersecting){


entry.target.classList.add(
"active"
);


}


});


},


{

threshold:0.15

}

);




revealElements.forEach(el=>{

revealObserver.observe(el);


});









/* =================================

3. MY JOURNEY CARD EFFECT

卡片进入动画

================================= */


const journeyCards =
document.querySelectorAll(

".journey-item"

);



journeyCards.forEach(
(card,index)=>{


card.style.transitionDelay =
(index*0.15)+"s";


});









/* =================================

4. STORYTELLING FAN ANIMATION

七张图片依次展开

================================= */


const storySection =
document.querySelector(
".storytelling"
);



const storyFan =
document.querySelector(
".story-fan"
);



if(
storySection &&
storyFan
){



const storyObserver =
new IntersectionObserver(

(entries)=>{


entries.forEach(entry=>{


if(
entry.isIntersecting
){


storyFan.classList.add(
"show"
);



const cards =
storyFan.querySelectorAll(
"img"
);



cards.forEach(
(card,index)=>{


setTimeout(()=>{


card.style.opacity=1;


card.style.transform =
getFanPosition(index);



},

index*300);



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
storySection
);



}







function getFanPosition(index){


const positions=[


"rotate(-45deg) translateX(-300px)",

"rotate(-30deg) translateX(-200px)",

"rotate(-15deg) translateX(-100px)",

"rotate(0deg) translateX(0)",

"rotate(15deg) translateX(100px)",

"rotate(30deg) translateX(200px)",

"rotate(45deg) translateX(300px)"


];



return positions[index];


}










/* =================================

5. IMAGE HOVER PARALLAX

图片轻微移动

================================= */


const images =
document.querySelectorAll(
".photo-grid img"
);



images.forEach(img=>{


img.addEventListener(
"mousemove",
(e)=>{


const rect =
img.getBoundingClientRect();



const x =
e.clientX-rect.left;



const y =
e.clientY-rect.top;



const rotateX =
(y-rect.height/2)/20;



const rotateY =
(x-rect.width/2)/20;



img.style.transform =

`
scale(1.08)
rotateX(${-rotateX}deg)
rotateY(${rotateY}deg)
`;



});





img.addEventListener(
"mouseleave",
()=>{


img.style.transform =
"scale(1)";


});



});









/* =================================

6. NAVBAR COLOR CHANGE

滚动后导航变化

================================= */


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


navbar.style.position=
"fixed";


navbar.style.background=
"rgba(0,0,0,.8)";


navbar.style.backdropFilter=
"blur(10px)";


}

else{


navbar.style.background=
"transparent";


}


});








/* =================================

7. SMOOTH BUTTON

Learn More

================================= */


const button =
document.querySelector(
".hero-content button"
);



if(button){


button.addEventListener(
"click",
()=>{


document.querySelector(
"#about"
)
.scrollIntoView({

behavior:"smooth"

});


});


}






});
