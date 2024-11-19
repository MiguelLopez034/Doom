
// function cambiarText(){

//     const selectorTitulo= document.getElementById('Titulo');
//     const nombreUsuario= prompt('Ingrese su nombre');
//     const contenedor= document.getElementById("cont-general");

//     //CAMBIANDO CONTENIDO DE UNA ETIQUETA DESDE JS
//     selectorTitulo.innerText = 'DIANA ACOSTA'

//     selectorTitulo.innerHTML = "<strong> USUARIO: <strong/> "+ nombreUsuario;

//     //CAMBIANDO ESTILOS DE UNA ETIQUETA DESDE JS
//     selectorTitulo.style.backgroundColor = 'pink';
//     selectorTitulo.style.padding ='20px';
//     selectorTitulo.style.color = '#000';

//     //CAMBIANDO ESTRUCTURA DE UNA ETIQUETA DESDE JS
    contenedor.className = ""
    contenedor.classList.add('dia');

// }

function circulo(){
    const selectorTitulo= document.getElementById('Titulo');
    const selectorFigura= document.getElementById('Figura');

    selectorTitulo.innerText = "CIRCULO";
    selectorFigura.style.borderRadius="50%";
}

function rombo(){
    const modiRombo= document.getElementById('Titulo');
    const modiRombo1= document.getElementById('Figura');

    modiRombo.innerText ="ROMBO";
    modiRombo1.style.transform= "rotate(45deg)";  
}

function Fondo(){
    const Titulo= document.getElementById('Titulo');
    const Figura= document.getElementById('Figura');


    Titulo.innerText ="Cambio de fondo"
    Figura.style.background = "Black"

}

function Imagen(){
    const Titulo= document.getElementById('Titulo');
    const Figura= document.getElementById('Figura');


    Titulo.innerText = "Cambio de fondo a imagen"
    Figura.style.background = "no-repeat"
    Figura.style.backgroundImage = "url(img/images.jpg)"

}

function Top(){
    const Titulo= document.getElementById('Titulo');
    const Figura= document.getElementById('Figura');


    Titulo.innerText ="Top"
    Figura.style.top = "-80px"
}

function left(){
    const Titulo= document.getElementById('Titulo');
    const Figura= document.getElementById('Figura');


    Titulo.innerText ="left"
    Figura.style.left = "-200px"
}

function bottom(){
    const Titulo= document.getElementById('Titulo');
    const Figura= document.getElementById('Figura');


    Titulo.innerText ="bottom"
    Figura.style.bottom = "-200px"
}

function right(){
    const Titulo= document.getElementById('Titulo');
    const Figura= document.getElementById('Figura');


    Titulo.innerText ="right"
    Figura.style.right = "-200px"
}

function diagonal(){
    const Titulo= document.getElementById('Titulo');
    const Figura= document.getElementById('Figura');


    Titulo.innerText ="right"
    Figura.style.right = "200px"
    Figura.style.bottom = "80px"
}

function animation(){
    const modiRombo= document.getElementById('Titulo');
    const modiRombo1= document.getElementById('Figura');

    modiRombo.innerText ="Animation";
    modiRombo1.style.transform= "rotate(360deg)";
}

function fondo_d(){
    const Titulo= document.getElementById('Titulo')
    const Figura= document.getElementById('Figura')

    Titulo.innerText = "Degradado"
    Figura.style.background = "linear-gradient(30deg, rgb(0, 255, 213), black)";
}

function estrella(){
    const Titulo= document.getElementById('Titulo')
    const Figura= document.getElementById('Figura')

    Titulo.innerText = "Estrella"
    Figura.classList.toggle("estrella")
}

function panel_lateral(){
    const Panel= document.getElementById('panel_lateral');

    Panel.classList.toggle('active')
}

function salir_panel(){
    const Salir= document.getElementById('panel_lateral')
    Salir.classList.toggle('active')
}

function panel_superior(){
    const Panel= document.getElementById('panel_superior');

    Panel.classList.toggle('active')
}

function salir_video(){
    const Salir= document.getElementById('panel_superior')
    Salir.classList.toggle('active')
}