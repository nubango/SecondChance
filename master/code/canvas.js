var canvas_horizontal = document.querySelector("#horizontal");
var ampliar_lienzo = document.querySelector("#juego");

function ampliar() {
    canvas_horizontal.style.width = "100%";
    canvas_horizontal.style.height = "100vh";
    canvas_horizontal.style.margin = "0";
    
    
    ampliar_lienzo.style.width = "100%";
    ampliar_lienzo.style.height = "100vh";
    ampliar_lienzo.style.backgroundSize = "cover";
    ampliar_lienzo.style.backgroundRepeat = "no-repeat";
}