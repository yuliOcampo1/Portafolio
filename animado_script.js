let menuVisible=false;
//funcion oculta o muestra el menu
function mostrarOcultarMenu(){
    if(menuVisible){
        document.getElementById("nav").classList="";
        menuVisible = false;
    }else{
            document.getElementById("nav").classList="responsive";
            menuVisible = true;
    }
}
function seleccionar(){
    //al seleccionar una opcion el menu se oculta
    document.getElementById("nav").classList = "";
    menuVisible = false;
}
//funcion para las animaciones de las habilidades
function efectoHabilidades(){
    var skills = document.getElementById("skills");
    var distancia_skills = window.innerHeight - skills.getBoundingClientRect().top;
    if (distancia_skills >= 300){
        let habilidades = document.getElementsByClassName("progreso");
        habilidades[0].classList.add("javascript");
        habilidades[1].classList.add("htmlcss");
        habilidades[2].classList.add("photoshop");
        habilidades[3].classList.add("paginaweb");
        habilidades[4].classList.add("comunicacion");
        habilidades[5].classList.add("trabajo");
        habilidades[6].classList.add("creatividad");
        habilidades[7].classList.add("dedicacion");

    }
}
//detectar el scrolling para applicar la animacion  de las barras
window.onscroll = function(){
    efectoHabilidades();
}