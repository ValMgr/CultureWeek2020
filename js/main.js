/* Semaine de la culture 2020 */

/* Apply color from custom.js to css files */
document.documentElement.style.setProperty('--first', mainColor);
document.documentElement.style.setProperty('--second', mainColor2);
document.documentElement.style.setProperty('--third', secondaryColor);
document.documentElement.style.setProperty('--fourth', secondaryColor2);

document.documentElement.style.setProperty('--black', blackColor);
document.documentElement.style.setProperty('--white', whiteColor);

var daySelected = "LUNDI";
el1 = document.getElementsByClassName("one")[0];
el2 = document.getElementsByClassName("two")[0];
el3 = document.getElementsByClassName("three")[0];


function DaySelect(id){

    var days = document.getElementsByClassName("day");

    Array.from(days).forEach(element => {
        element.classList.remove("daySelected");
    });
    days[id].classList.add("daySelected");
    daySelected = days[id].innerHTML.substring(3).split('<')[0];;
    //console.log(daySelected);
    switchMenu(el1, 'up');
    switchMenu(el2, 'down')
    switchMenu(el3, 'up')
}



function switchMenu(el, way){

    if(way == 'up'){
        el.classList.remove('slideDown');
        el.classList.add('slideUp2');
            setTimeout(function () {
                Menu(daySelected, el)
                el.classList.remove('slideUp2');
                el.classList.add('slideDown');
            }, 300);
    }
    if(way == 'down'){
        el.classList.remove('slideUp');
        el.classList.add('slideDown2');
            setTimeout(function () {
                //Menu(daySelected, el)       /* L'image du milieu est la même quoi qu'il arrive */
                el.classList.remove('slideDown2');
                el.classList.add('slideUp');
            }, 300);
    }    
}

function Menu(day, el){
    Array.from(el.children).forEach(element => {
        if(element.getAttribute("day") == day) element.style.display = "unset";
        if(element.getAttribute("day") != day)  element.style.display = "none";
    });
}

window.addEventListener('wheel', function(event)
{
 if (event.deltaY < 0)
 {
  console.log('scrolling up');
  Scroll("up")
 }
 else if (event.deltaY > 0)
 {
  console.log('scrolling down');
  Scroll("down")
 }
});

function Scroll(dir){
    el = document.body

    if(dir == "down"){
        window.scrollTo({
            top: 1081,
            behavior: 'smooth'
        });
    }
    else if(dir == "up"){
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    }
    
}

var slidesPhoto = document.getElementsByClassName("slideShow");
var dotsPhoto = document.getElementsByClassName("dot");
var slideIndexPhoto = 0;

// this function work only for photographie.html 
// because j'ai fait de la merde en me dépéchant
// Les images sont déplacé 2 par 2 sauf qu'elles sont considéré comme 2 élément différent
// Il faut les regrouper en 1 seul div
// Et ça évitera d'avoir un slides[i*2] qui empeche de s'en servir pour les autres
function SlideShowPhoto(i){

    var posInit = slides[i*2].style.transform;
    posInit = posInit.split('(');
    posInit = posInit[1];
    posInit = posInit.split('v');
    posInit = posInit[0];
    posInit = Number(posInit)

    for (let j = 0; j < slides.length; j++) {
        var pos = slides[j].style.transform;
        pos = pos.split('(');
        pos = pos[1];
        pos = pos.split('v');
        pos = pos[0];
        pos = Number(pos)
        slides[j].style.transform = "translateX(" + (pos - posInit) + "vw)";
    }

    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    dots[slideIndex].className += " active";

}

function plusSlidesPhoto(n) {
    slideIndex += n
    

    if(slideIndex < 0){
        slideIndex = 6
        SlideShowPhoto(slideIndex);
    }
    else if(slideIndex > 6){
        slideIndex = 0
        SlideShowPhoto(slideIndex);
    }
    else{
        SlideShowPhoto(slideIndex);
    }
 
}

function currentSlidePhoto(n) {
    slideIndex = n
    SlideShowPhoto(slideIndex);
  }


// Du coup j'en fait un autre pour tout les autres ...
// C'est vraiment con mais j'ai pas le temps de tout modifier
var slides = document.getElementsByClassName("slideShow");
var dots = document.getElementsByClassName("dot");
var slideIndex = 0;


function SlideShow(i){

    var posInit = slides[i].style.transform;
    posInit = posInit.split('(');
    posInit = posInit[1];
    posInit = posInit.split('v');
    posInit = posInit[0];
    posInit = Number(posInit)

    for (let j = 0; j < slides.length; j++) {
        var pos = slides[j].style.transform;
        pos = pos.split('(');
        pos = pos[1];
        pos = pos.split('v');
        pos = pos[0];
        pos = Number(pos)
        slides[j].style.transform = "translateX(" + (pos - posInit) + "vw)";
    }

    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    dots[slideIndex].className += " active";

    }

    function plusSlides(n) {
    slideIndex += n

    var maxSlide = slides.length;

    if(slideIndex < 0){
        slideIndex = maxSlide
        SlideShow(slideIndex);
    }
    else if(slideIndex > maxSlide){
        slideIndex = 0
        SlideShow(slideIndex);
    }
    else{
        SlideShow(slideIndex);
    }
 
}

function currentSlide(n) {
    slideIndex = n
    SlideShow(slideIndex);
  }


includeHTML();
