const inputnombre = document.getElementById("nombre");
const boton = document.getElementById("boton");
const peso = document.getElementById("Peso");
const imagen = document.getElementById("imagen");
const sonido = document.getElementById("sonido");
const listaitems = document.getElementById("items");

async function fetchPokemon(){
    const respuesta = await fetch("https://pokeapi.co/api/v2/pokemon/" + inputnombre.value);

    const infopokemon = await respuesta.json();
    peso.innerText = infopokemon.weight;


    imagen.src = infopokemon.sprites.other.home.front_default;
    sonido.src = infopokemon.cries.latest;

    infopokemon.held_items.forEach((item) => {
        const itemli = document.createElement("li");
        itemli.innerText = i.item.name;
        listaitems.appendChild(itemli);
        
    });




}

boton.addEventListener("click", (e) => {
    e.preventDefault();

    fetchPokemon();
});