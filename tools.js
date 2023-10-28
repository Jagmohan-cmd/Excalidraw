////////////////////////////////// canvas is started here ///////////////////////////////////////////

const canvas = document.getElementById("canvas");

canvas.width = window.innerWidth; 
canvas.height = window.innerHeight;

const c = canvas.getContext("2d");


let previousPosition = null;

const pencils = document.getElementById("pencil");


const actions = {
    lock  : false,
    hand : false,
    arrow : false,
    rectangle : false,
    dimond : false,
    ellipse : false,
    arrowRight : false,
    line : false,
    pencil : false,
    text : false,
    image : false,
    eraser : false,
    moreTools : false
}

function onMouseDown(e){
    if(!(actions.lock || actions.hand || actions.arrow || actions.rectangle || actions.dimond || actions.ellipse || actions.arrowRight || actions.line || actions.pencil || actions.text || actions.image || actions.eraser || actions.moreTools)){
        return;
    }
    previousPosition = [e.clientX , e.clientY];
    c.strokeStyle = "red";
    c.lineWidth = 2;

    canvas.addEventListener("mousemove" , onMouseMove);
    canvas.addEventListener("mouseup" , onMouseUp);
}

function onMouseMove(e){
    let currentPosition = [e.clientX , e.clientY];
    if(actions.pencil){
        drawPencil(currentPosition);
    }
    else if(actions.eraser){
        handleEraser(currentPosition);
    }
 
}

function onMouseUp(e){
    canvas.removeEventListener("mousemove" , onMouseMove);
}



//////////////////////////////////////////// DRAW PENCIL IS STARTED HERE /////////////////////////////////
function drawPencil(currentPosition){
    c.beginPath();
    c.moveTo(...previousPosition);
    c.lineTo(...currentPosition);
    c.stroke();
    c.closePath();
    previousPosition = currentPosition;
}


//////////////////////////////////////////// DRAW PENCIL IS ENDED HERE ////////////////////////////////////

/////////////////////////////////////////// HANDLE ERASER IS STARTED HERE /////////////////////////////////
function handleEraser(currentPosition){
   let er =  c.clearRect(...currentPosition, 10, 10);
   console.log(er);
}



/////////////////////////////////////////// HANDLE ERASER IS STARTED HERE /////////////////////////////////


///////////////////////////////////////////// TOOLS ACTIVATION STARTED HERE /////////////////////////////////
const actionButton = document.querySelectorAll("#tools > .btn")

function onPencilClick(element){
    
    const actionAnswer = element.id;
    actionButton.forEach(btn =>{
        if(btn.classList.contains("active-icons") && btn.id !== actionAnswer){
            btn.classList.remove("active-icons");
        }  
    })
    element.classList.toggle("active-icons"); 
  

    actionButton.forEach(btn =>{
      const isActive = btn.classList.contains("active-icons")
      actions[btn.id] = isActive;
    })
    console.log(actions);


    if(actions.pencil || actions.eraser){
        canvas.style.cursor = "crosshair";
        canvas.addEventListener("mousedown" , onMouseDown);
    }
    else{
        canvas.style.cursor = "auto";
        canvas.removeEventListener("mousedown" , onMouseDown);
    }
    let pencilMenu = document.querySelector(".drawingPencil");

    pencilMenu.classList.toggle("activePencil");

}

///////////////////////////////////////////// TOOLS ACTIVATION ENDED HERE /////////////////////////////////




/////////////////////////////////////////// canvas is ended here //////////////////////////////////