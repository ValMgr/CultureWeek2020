/* Semaine de la culture 2020 */

/* Apply color from custom.js to css files */
document.documentElement.style.setProperty('--first', mainColor);
document.documentElement.style.setProperty('--second', mainColor2);
document.documentElement.style.setProperty('--third', secondaryColor);
document.documentElement.style.setProperty('--fourth', secondaryColor2);

document.documentElement.style.setProperty('--black', blackColor);
document.documentElement.style.setProperty('--white', whiteColor);

var daySelected = "LUNDI";


function DaySelect(id){

    var days = document.getElementsByClassName("day");

    Array.from(days).forEach(element => {
        element.classList.remove("daySelected");
    });
    days[id].classList.add("daySelected");
    daySelected = days[id].innerHTML.substring(3).split('<')[0];;
    //console.log(daySelected);
    switchMenu();
    
}

function switchMenu(){
    el1 = document.getElementsByClassName("one")[0];
    el2 = document.getElementsByClassName("two")[0];
    el3 = document.getElementsByClassName("three")[0];


    el1.classList.remove('slideDown');
    el1.classList.add('slideUp2');
        setTimeout(function () {
            Menu(daySelected)
            el1.classList.remove('slideUp2');
            el1.classList.add('slideDown');
        }, 300);

    el2.classList.remove('slideUp');
    el2.classList.add('slideDown2');
        setTimeout(function () {
            Menu(daySelected)
            el2.classList.remove('slideDown2');
            el2.classList.add('slideUp');
        }, 300);

    el3.classList.remove('slideDown');
    el3.classList.add('slideUp2');
        setTimeout(function () {
            Menu(daySelected)
            el3.classList.remove('slideUp2');
            el3.classList.add('slideDown');
        }, 300);
    
}

function Menu(day){
    el1 = document.getElementsByClassName("one")[0];
    Array.from(el1.children).forEach(element => {
        if(element.getAttribute("day") == day) element.style.display = "unset";
        if(element.getAttribute("day") != day)  element.style.display = "none";
    });

    el2 = document.getElementsByClassName("two")[0];
    Array.from(el2.children).forEach(element => {
        if(element.getAttribute("day") == day) element.style.display = "unset";
        if(element.getAttribute("day") != day)  element.style.display = "none";
    });

    el3 = document.getElementsByClassName("three")[0];
    Array.from(el3.children).forEach(element => {
        if(element.getAttribute("day") == day) element.style.display = "unset";
        if(element.getAttribute("day") != day)  element.style.display = "none";
    });
}

Menu(daySelected)
includeHTML();
