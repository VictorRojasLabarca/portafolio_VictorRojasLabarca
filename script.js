//Datos de imagen y texto.
const proyectosInfo = [
    {
        titulo: "Pokedex",
        descripcion: "Pokedex interactiva que muestra información básica sobre un pokémon.",
        tecnologia: "Html, Css , Javascript.",
        link:"https://github.com/VictorRojasLabarca/proyecto_pokedex"
    },
    {
        titulo: "Prueba 1",
        descripcion: "Prueba 1",
        tecnologia: "Prueba 1",
        link:"Prueba 1"
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

function plusSlides(n){
    showSlides(slideIndex += n);
}

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