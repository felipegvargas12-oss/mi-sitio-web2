const juegos = [
    { id: 1, nombre: "GTA VI", categoria: "Acción", imagen: "images/juego1.jpg" },
    { id: 2, nombre: "FIFA 26", categoria: "Deportes", imagen: "images/juego2.jpg" },
    { id: 3, nombre: "The Last of Us", categoria: "Aventura", imagen: "images/juego3.jpg" },
    { id: 4, nombre: "Elden Ring", categoria: "RPG", imagen: "images/juego4.jpg" }
];

const app = {
    favoritos: []
};

const contenedor = document.querySelector("#lista-juegos");

function mostrarJuegos(lista) {
    contenedor.innerHTML = "";

    lista.forEach(juego => {
        contenedor.innerHTML += `
            <div class="juego">
                <img src="${juego.imagen}" alt="${juego.nombre}">
                <h3>${juego.nombre}</h3>
                <button onclick="agregarFavorito(${juego.id})">
                    ❤️ Favorito
                </button>
            </div>
        `;
    });
}


function agregarFavorito(id) {
    const juego = juegos.find(j => j.id === id);

    if (!app.favoritos.includes(juego)) {
        app.favoritos.push(juego);
        alert(juego.nombre + " agregado a favoritos 🎮");

        mostrarFavoritos();

    } else {
        alert("Ya está en favoritos ❌");
    }
}


const buscador = document.querySelector("#buscador");

buscador.addEventListener("input", () => {
    const texto = buscador.value.toLowerCase();

    const filtrados = juegos.filter(juego =>
        juego.nombre.toLowerCase().includes(texto)
    );

    mostrarJuegos(filtrados);
});

mostrarJuegos(juegos);


const contenedorFavoritos = document.querySelector("#lista-favoritos");
``

function mostrarFavoritos() {
    contenedorFavoritos.innerHTML = "";

    app.favoritos.forEach(juego => {
        contenedorFavoritos.innerHTML += `
            <div class="juego">
                <img src="${juego.imagen}" alt="${juego.nombre}">
                <h3>${juego.nombre}</h3>
            </div>
        `;
    });
}
``

const buscador = document.querySelector("#buscador");

buscador.addEventListener("input", () => {

    const texto = buscador.value.toLowerCase();

    const filtrados = juegos.filter(juego => 
        juego.nombre.toLowerCase().includes(texto)
    );

    mostrarJuegos(filtrados);
});

