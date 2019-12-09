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


includeHTML();
