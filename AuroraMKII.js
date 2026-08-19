let imagen1 = document.getElementById("imagen1");

let anterior = document.getElementById("anterior");

let siguiente = document.getElementById("siguiente");

let imagenes = ["auroramkII.webp", "auroraimg3.webp"];

let position = 0;

siguiente.addEventListener("click",
    function () {
        position++;
        if (position >= imagenes.length) {
            position = 0;
        }
        imagen1.src = imagenes[position];
    }
    
);

anterior.addEventListener("click",
    function() {
        position--;
        if(position < 0) {
            position = imagenes.length -1;
        }
        imagen1.src = imagenes[position];
    }
);