
///////////////////////////////// menu toggle function is start here ///////////////////////////////////
let menuToggle = document.getElementById('menu');

let menuList = document.getElementById('menu-click');

menuToggle.addEventListener('click' , () => {
    menuList.classList.toggle('active-menu');
})

//////////////////////////////////// menu toggle is ended here /////////////////////////////////////////


///////////////////////////////// screen size function is start here ////////////////////////////////

let minus = document.getElementById('minus');

let plus = document.getElementById('plus');

let size = document.getElementById('size');

let a = 100;

minus.addEventListener('click' , () => {

   if(a >= 0){
    size.innerText = a;
    a = a - 10 ;
   }

})


plus.addEventListener('click' , () => {
    a = a + 10;
    size.innerText = a;
})


///////////////////////////////// screen size function is ended here ////////////////////////////////



////////////////////////////////// canvas is started here ///////////////////////////////////////////

const canvas = document.getElementById("canvas");

canvas.width = window.innerWidth; 
canvas.height = window.innerHeight;

const c = canvas.getContext("2d");

/////////////////////////////// pencil drawing fuvtion is started here //////////////////////////////////////

let previousPosition = null;

function onMouseDown(e){
    previousPosition = [e.clientX , e.clientY];
    c.strokeStyle = "red";
    c.lineWidth = 2;

    canvas.addEventListener("mousemove" , onMouseMove);
    canvas.addEventListener("mouseup" , onMouseUp);
}

function onMouseMove(e){
    let currentPosition = [e.clientX , e.clientY];
    c.beginPath();
    c.moveTo(...previousPosition);
    c.lineTo(...currentPosition);
    c.stroke();
    c.closePath();
    previousPosition = currentPosition;
}

function onMouseUp(e){
    canvas.removeEventListener("mousemove" , onMouseMove);
}

/////////////////////////////// pencil drawing fuvtion is ended here //////////////////////////////////////





/////////////////////////////////////////// canvas is ended here //////////////////////////////////



///////////////////////////// background color changer is started here ////////////////////////////////

const bg_white = document.querySelector(".bg-color-white");

bg_white.addEventListener("click" , white);

function white(){
    canvas.style.backgroundColor = "#ffffff";
}

/////////////////////////////////////////////////// white bg-color /////////////////////////////////////

const bg_gray = document.querySelector(".bg-color-gray");

bg_gray.addEventListener("click" , gray);

function gray(){
    canvas.style.backgroundColor = "#f8f9fa";
}

//////////////////////////////////////////////////// gray bg-color /////////////////////////////////////

const bg_lightGreen = document.querySelector(".bg-color-lightGreen");

bg_lightGreen.addEventListener("click" , lightGreen);

function lightGreen(){
    canvas.style.backgroundColor = "#f5faff";
}

////////////////////////////////////////////////lightGreen bg-color ////////////////////////////////////

const bg_lightPink = document.querySelector(".bg-color-lightPink");

bg_lightPink.addEventListener("click" , lightPink);

function lightPink(){
    canvas.style.backgroundColor = "#fffce8";
}

////////////////////////////////////////////// lightPink bg-color //////////////////////////////////////

const bg_veryLightPink = document.querySelector(".bg-color-veryLightPink");

bg_veryLightPink.addEventListener("click" , veryLightPink);

function veryLightPink(){
    canvas.style.backgroundColor = "#fdf8f6";
}

///////////////////////////// background color changer is ended here ////////////////////////////////