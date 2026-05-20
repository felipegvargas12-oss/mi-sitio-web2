// ✅ DATOS
const juegos = [
    { id: 1, nombre: "GTA VI", categoria: "Acción", imagen: "images/juego1.jpg" },
    { id: 2, nombre: "FIFA 26", categoria: "Deportes", imagen: "images/juego2.jpg" },
    { id: 3, nombre: "The Last of Us", categoria: "Aventura", imagen: "images/juego3.jpg" },
    { id: 4, nombre: "Elden Ring", categoria: "RPG", imagen: "images/juego4.jpg" }
];

const app = {
    favoritos: []
};

// ✅ SELECTORES
const contenedor = document.querySelector("#lista-juegos");
const contenedorFavoritos = document.querySelector("#lista-favoritos");
const buscador = document.querySelector("#buscador");

// ✅ RENDER JUEGOS
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

// ✅ AGREGAR FAVORITO
function agregarFavorito(id) {
    const juego = juegos.find(j => j.id === id);

    if (!juego) return;

    if (!app.favoritos.some(fav => fav.id === juego.id)) {
        app.favoritos.push(juego);
        mostrarFavoritos();
    } else {
        alert("Ya está en favoritos ❌");
    }
}

// ✅ MOSTRAR FAVORITOS
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

// ✅ BUSCADOR
buscador.addEventListener("input", () => {
    const texto = buscador.value.toLowerCase();

    const filtrados = juegos.filter(juego =>
        juego.nombre.toLowerCase().includes(texto)
    );

    mostrarJuegos(filtrados);
});

// ✅ INICIAR
mostrarJuegos(juegos);