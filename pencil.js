const pencil = document.getElementById("pencil");

let isPencilActive = false;

pencil.addEventListener("click" , onPencilClick);

function onPencilClick(){
    pencil.classList.toggle("active-icons");
    isPencilActive = !isPencilActive;
    if(isPencilActive){
        canvas.style.cursor = "crosshair";
        canvas.addEventListener("mousedown" , onMouseDown);
    }
    else{
        canvas.style.cursor = "auto";
        canvas.removeEventListener("mousedown" , onMouseDown);
    }
}
