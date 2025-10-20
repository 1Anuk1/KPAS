const busqp = document.getElementById("busqp");
const nombrepais = document.getElementById("nombre");
const inputnombre = document.getElementById("pais"); 
const bandera = document.getElementById("bandera");
const n_oficial = document.getElementById("n_oficial");
const capital = document.getElementById("capital");
const poblacion = document.getElementById("poblacion");
const ubicacion = document.getElementById("Ubicacion");
const mapa = document.getElementById("mapa");
const iframe = document.getElementById("iframe_mapa"); 


async function fetchPais(){
    const respuesta = await fetch("https://restcountries.com/v3.1/name/" + inputnombre.value);
    const infopais = await respuesta.json();
    nombrepais.innerText = infopais[0].name.common;
    bandera.src = infopais[0].flags.svg;
    n_oficial.innerText = "Nombre oficial: " + infopais[0].name.official;
    capital.innerText = "Capital: " + infopais[0].capital[0];
    poblacion.innerText = "Población: " + infopais[0].population;
    ubicacion.innerText = "Ubicación: ";
    mapa.href = infopais[0].maps.googleMaps;
   

    // Mostrar el mapa en un iframe
    iframe.src = `https://www.google.com/maps?q=${encodeURIComponent(infopais[0].name.common)}&output=embed`;
}
 
busqp.addEventListener("click", (e) => {
    e.preventDefault();
    fetchPais();
});


