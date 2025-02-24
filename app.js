// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
// array para almacenar los nombres de los amigos ingresados
let amigos = [];

// funcion para agregar un amigo y agregarlo al array
function agregarAmigo (){
    let nombreinput = document.getElementById("amigo");
    let nombre = nombreinput.value.trim();

    if (nombre === ""){
        alert("ingresa un nombre");
        return;


    }
    if(amigos.includes(nombre)){
        alert("el nombre " + nombre + " ya esta en la lista")
        nombreinput.value = "";
        return;

    }
    amigos.push(nombre);
    nombreinput.value = "";
    console.log(amigos);


    recorrerAmigos();
}

function recorrerAmigos (){
    let lista = document.getElementById("listaAmigos");
    lista.innerHTML = "";

    for (let i = 0; i < amigos.length; i++){
        let amigo = amigos[i];


        let nuevoLi = document.createElement('li');
        nuevoLi.textContent = amigo;
        lista.appendChild(nuevoLi);

    }

}

function sortearAmigo (){
    if (amigos.length <= "0"){
        alert("no hay amigos para sortear")
        return;

    }
    let sortear = Math.floor(Math.random()*amigos.length);

    let indiceSorteado = amigos[sortear];

    let resultado = document.getElementById("resultado");
    resultado.innerHTML = `el amigo sorteado es ${indiceSorteado}`;

}





