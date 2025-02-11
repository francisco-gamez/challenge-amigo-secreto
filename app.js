// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación.
// Aquí deberás desarrollar la lógica para resolver el problema.

//Declarando lista amigos
let Amigos = [];

//Valida y agrega elementos a la lista de amigos

function agregarAmigo() {
    //Desde el campo del HTML llamamos el valor igresado, eliminamos espacios con .trim()
    let nombreAmigo = document.getElementById('amigo').value.trim();
    //Verificamos que el campo no esté vacío
    if(nombreAmigo === ""){
        alert('Por favor, inserte un nombre.');
        return;        
    }
    
    //Verificar si el nombre ya existe en la lista
    if (Amigos.includes(nombreAmigo)) {
        alert(`${nombreAmigo} ya está en la lista.`);
        return;
    }
    //agrega el nombre a la lista de amigos
    Amigos.push(nombreAmigo);

    replicarListado();
    
    console.log(Amigos);   

    limpiarcaja();
    return;
}

function limpiarcaja() {
    document.getElementById('amigo').value = '';
}

//Replicar el listado en HTML
function replicarListado(){
    let listaHTML = document.getElementById('listaAmigos');
    //Para asegurarse que no haya duplicados al actualizar se limpia lista existente
    listaHTML.innerHTML = "";
    
    //Crear elementos <li> para cada titulo de la lista
    Amigos.forEach(function (agregarLiAmigo){
        let nuevo = document.createElement("li");
        nuevo.textContent = agregarLiAmigo;
        listaHTML.appendChild(nuevo);        
    })
}

//Realizar sorteo
function sortearAmigo(){
    if(Amigos.length===0){
        alert ('El listado está vacio, inserte un nombre');
        return;
    }
    let indiceAleatorio = Math.floor(Math.random()*Amigos.length);
    let amigoSorteado = Amigos[indiceAleatorio];

    document.getElementById('listaAmigos').innerHTML = '';

    document.getElementById('resultado').textContent = `El amigo sorteado es: ${amigoSorteado}`;
}