document.addEventListener('DOMContentLoaded', function() {
// Agregar timestap a css  y js para evitar cache.
function agregarTimeStamp(url){
    return url + '?t=' + new Date().getTime();
}
// Actualizar css
document.getElementById('cssFile').href= agregarTimeStamp('style.css');
// Actualizar js
// var script = document.createElement('script');
// script.src = agregarTimeStamp('script.js');
// script.defer = true;
// document.head.appendChild(script);
var scriptOriginal = document.querySelector('script[src="script.js"]');
if(scriptOriginal){
    scriptOriginal.remove();
    var scriptNuevo = document.createElement('script');
    scriptNuevo.src = agregarTimeStamp('script.js');
    scriptNuevo.defer = true;
    document.head.appendChild(scriptNuevo);
}

//Datos de imagen y texto.
const proyectosInfo = [
    {
        titulo: "Pokedex",
        descripcion: "Pokedex interactiva que muestra información básica sobre un pokémon.",
        tecnologia: "Html, Css , Javascript.",
        link:"https://github.com/VictorRojasLabarca/proyecto_pokedex"
    },
    {
        titulo: "Acortador de URL",
        descripcion: "Acortador de URL como página web.",
        tecnologia: "Css|Bootstrap, Python|Flask",
        link:"https://github.com/VictorRojasLabarca/Acortador-URL-Python-Flask"
    },
    {
        titulo: "Prueba 2",
        descripcion: "Prueba 2",
        tecnologia: "Prueba 2",
        link:"Prueba 2"
    }
];
//Actualizar texto de los proyectos.
function cambiarInfo(index){
    const contenedorTitulo = document.querySelectorAll('.textImg')[index];
    const contenedorInfo = document.querySelector('.info_proyecto');
    //Cambiar el título de la imagen.
    contenedorTitulo.textContent = proyectosInfo[index].titulo;
    //Cambiar los detalles del proyecto.
    contenedorInfo.innerHTML = `
    <p>${proyectosInfo[index].descripcion}</p>
    <p>Tecnologías: ${proyectosInfo[index].tecnologia}</p>
    <a href="${proyectosInfo[index].link}" target="a_blank">Visitar proyecto</a>
    `;
}
// Animación slideshow
let slideIndex = 1;
showSlides(slideIndex);

document.querySelector('.prev').addEventListener('click', function(){
    plusSlides(-1);
});
document.querySelector('.next').addEventListener('click', function(){
    plusSlides(1);
});
function plusSlides(n){
    showSlides(slideIndex += n);
}

const dots = document.querySelectorAll('.dot');
dots.forEach(dot =>{
    dot.addEventListener('click', function(){
        const slideNumber = parseInt(this.getAttribute('data-slide'));
        currentSlide(slideNumber);
    });
});
function currentSlide(n){
    showSlides(slideIndex = n);
}

function showSlides(n){
    let i;
    let slides = document.getElementsByClassName("misImgs");
    let dots = document.getElementsByClassName("dot");
    if(n > slides.length){
        slideIndex = 1
    };
    if(n < 1){
        slideIndex = slides.length
    };
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display = "block";
    dots[slideIndex-1].className +=" active";

    cambiarInfo(slideIndex - 1);
}

// Obtener año
const fecha_anio = new Date().getFullYear();
document.getElementById('anio').textContent = fecha_anio;
});