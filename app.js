// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = [];

function agregarAmigo (amigos){
    let nombreinput = document.querySelector("#amigo");
    let nombre = nombreinput.value.trim();

    if (nombre === ""){
        alert("ingresa un nombre");
        return;


    }
    amigos.push(nombre);
    nombreinput.value = "";
    console.log(amigos);

}

function recorrerAmigos (amigos){
    let lista = document.getElementById(listaAmigos);
    lista.innerHTML = "";

    for (let i = 0; i < amigos.length; i++){
        let amigo = amigos[i];


        let nuevoLi = document.createElement('li');
        nuevoLi.textContent = amigo;
        lista.appendChild(nuevoLi);
        return;

    }

}



