

// Ejercicio 1: Filtrar productos por precio y categoría
const stock = [
    { id: 1, nombre: "Ratón óptico", precio: 25, categoria: "perifericos" },
    { id: 2, nombre: "Memoria RAM 16GB", precio: 85, categoria: "componentes" },
    { id: 3, nombre: "Monitor 4K", precio: 320, categoria: "perifericos" },
    { id: 4, nombre: "Disco SSD 1TB", precio: 65, categoria: "componentes" },
];

// Tu código aquí abajo:

const stockMayor50 = stock.filter(producto => producto.precio > 50 && producto.categoria === "componentes");
console.log(stockMayor50);

// Ejercicio 2: Actualización de la cantidad de Cables hdmi

const carritoOriginal = [
    { id: 101, articulo: "Teclado", precio: 45, cantidad: 1 },
    { id: 102, articulo: "Cable HDMI", precio: 12, cantidad: 1 },
];

// Tu código aquí abajo:
const carritoActualizado = carritoOriginal.map(item => {
    if (item.id === 102) {
        return { ...item, cantidad: 3 };
    }
    return item;
});
console.log(carritoActualizado);
console.log(carritoOriginal); // Verificar que el carrito original no se ha modificado

// Ejercicio 3: Consumo de API Asíncrona (Nivel Avanzado)
// Tu código aquí abajo:
async function obtenerPostPorUsuario(userId) {
    try {
        // Hacemos la petición a la API
        const respuesta = await fetch('https://jsonplaceholder.typicode.com/posts');
        // Comprovamos que hay respuesta
        if (!respuesta.ok) {
            throw new Error(`Error en la petición: ${respuesta.status}`);
        }

        // Convertimos la respuesta a json
        const posts = await respuesta.json();

        // Filtramos los posts del usuario
        const postsDelUsuario = posts.filter(post => post.userId === userId);

        // Mostramos los titulos de los posts
        postsDelUsuario.forEach(post => {
            console.log(post.title);
        });
    } catch (error) {
        console.error('Error al obtener los posts:', error);
    }
}

// Ejecución de prueba:
obtenerPostPorUsuario(2);

// Ejercicio 4: Generación Dinámica de Nodos (DOM Nativo)


