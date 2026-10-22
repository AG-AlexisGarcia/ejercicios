

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
const usuariosLocales = [
    { id: 1, nombre: 'Ana Gómez', email: 'ana@ies.es' },
    { id: 2, nombre: 'Luis Martínez', email: 'luis@ies.es' },
    { id: 3, nombre: 'María García', email: 'maria@ies.es' },
    { id: 4, nombre: 'Pedro Sánchez', email: 'pedro@ies.es' },
    { id: 5, nombre: 'Laura Fernández', email: 'laura@ies.es' }
];

// 2. Localizamos el contenedor HTML por su ID
const contenedor = document.getElementById('contenedor-usuarios');

// 3. Recorremos el array de usuarios
usuariosLocales.forEach(usuario => {

    // A) Creamos el div de la tarjeta y le asignamos la clase CSS
    const tarjeta = document.createElement('div');
    tarjeta.classList.add('card-usuario'); // Exigido en el enunciado

    // B) Creamos el encabezado h3 y le asignamos el nombre del usuario
    const titulo = document.createElement('h3');
    titulo.textContent = usuario.nombre;

    // C) Creamos el párrafo p y le asignamos el email
    const correo = document.createElement('p');
    correo.textContent = usuario.email;

    // D) Ensamblamos la tarjeta: metemos el h3 y el p dentro del div tarjeta
    tarjeta.appendChild(titulo);
    tarjeta.appendChild(correo);

    // E) Insertamos la tarjeta ya montada dentro del contenedor del HTML
    contenedor.appendChild(tarjeta);
});

