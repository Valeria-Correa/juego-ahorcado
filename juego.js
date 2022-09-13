let word;
let cant_errores = 0;
let cant_aciertos = 0;

const palabras = ["PYTHON","HTML","DISEÑO","SORTEO","EQUIPO","JAVASCRIPT","BOTONES"];
const btn = id("jugar");
const imagen =id("imagen");
const btn_letras = document.querySelectorAll("#letras button");
btn.addEventListener("click" , iniciar);

function id(str){
    return document.getElementById(str);
}

function obtener_ramdon(num_min, num_max){
    const amplitud_valores = num_max - num_min;
    const valor_al_azar = Math.floor(Math.random() * amplitud_valores)
    + num_min;
    return valor_al_azar;
    
}
       
for( let i = 0; i < btn_letras.length; i++){
    btn_letras[i].addEventListener("click", click_letra);
    
}

function iniciar(event){
    imagen.src = "imagen/img0.png";
    btn.disabled = true;
    cant_errores = 0;
    cant_aciertos = 0;
    const parrafo = id("palabra_a_adivinar");
    parrafo.innerHTML = " ";
    const cant_palabras = palabras.length;
    const valor_al_azar = obtener_ramdon(0, cant_palabras);

    word = palabras[valor_al_azar];
    console.log(word);
    const cant_letras = word.length;
    for( let i = 0; i < btn_letras.length; i++){
        btn_letras[i].disabled = false;
    } 

    for( let i = 0; i < cant_letras; i++){
        const span = document.createElement("span");
        parrafo.appendChild(span);
    }
    
    
}


function click_letra(event){
    const span = document.querySelectorAll("#palabra_a_adivinar span");
    const button = event.target;
    button.disabled = true;
    const letra = button.innerHTML;
    const palabras = word;
    let acerto = false;
    for(let i = 0; i < palabras.length; i++){
        if(letra == palabras[i]){
            span[i].innerHTML = letra;
            cant_aciertos++;
            acerto = true;
        }
        
    }
    if(acerto == false){
            cant_errores++;
            const source = `imagen/img${cant_errores}.png`;
            imagen.src = source;
                   
    }
    if(cant_errores == 7){
        id("resultado").innerHTML = "¡Perdiste! La palabra era:" + palabras;
        game_over();
    }else if(cant_aciertos == palabras.length){
        id("resultado").innerHTML = "¡FELICIDADES, HAS GANADO!";
        game_over();
    }
    console.log("la letra" + letra + "en la palabra" + palabras + "existe:" + acerto);
}

function game_over(){
    for( let i = 0; i < btn_letras.length; i++){
        btn_letras[i].disabled = true;
    }
    btn.disabled = false;
}
game_over();