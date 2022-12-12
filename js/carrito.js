let carrito = localStorage.getItem("carrito");
carrito = JSON.parse(carrito);

const contenedorCarritoVacio = document.querySelector("#carritoVacio");
const contenedorCarritoProductos = document.querySelector("#carritoProductos");
const contenedorCarritoAcciones = document.querySelector("#carritoAcciones");
const contenedorCarritoComprado = document.querySelector("#carritoComprado");
let botonEliminar = document.querySelectorAll(".carritoProductoEliminar");
const botonAccionVaciar = document.querySelector("#carritoAccionesVaciar");
const contenedorTotal = document.querySelector("#total");
const botonAccionComprar = document.querySelector("#carritoAccionesComprar");


function productosAlCarrito() {
    if (carrito && carrito.length > 0) {

        contenedorCarritoVacio.classList.add("disabled");
        contenedorCarritoProductos.classList.remove("disabled");
        contenedorCarritoAcciones.classList.remove("disabled");
        contenedorCarritoComprado.classList.add("disabled");
    
        contenedorCarritoProductos.innerHTML = "";
    
        carrito.forEach(producto => {
    
            const div = document.createElement("div");
            div.classList.add("carritoProducto");
            div.innerHTML = `
                <img class="carritoProductoImagen" src="${producto.imagen}" alt="${producto.nombre}">
                <div class="carritoProductoTitulo">
                    <small>Título</small>
                    <h3>${producto.nombre}</h3>
                </div>
                <div class="carritoProductoPrecio">
                    <small>Precio</small>
                    <p>$${producto.precio}</p>
                </div>
                <button class="carritoProductoEliminar" id="${producto.id}"><i class="bi bi-trash-fill"></i></button>
            `;
    
            contenedorCarritoProductos.append(div);
        })
    
    } else {
        contenedorCarritoVacio.classList.remove("disabled");
        contenedorCarritoProductos.classList.add("disabled");
        contenedorCarritoAcciones.classList.add("disabled");
        contenedorCarritoComprado.classList.add("disabled");
    }

    BotonEliminarActualizado();
    totalActualizado();
}

productosAlCarrito();

function BotonEliminarActualizado() {
    botonEliminar = document.querySelectorAll(".carritoProductoEliminar");

    botonEliminar.forEach(boton => {
        boton.addEventListener("click", eliminarDelCarrito);
    });
}

function eliminarDelCarrito(e) {
    const idBoton = e.currentTarget.id;
    const index = carrito.findIndex(producto => producto.id === idBoton);
    
    carrito.splice(index, 1);
    productosAlCarrito();

    localStorage.setItem("carrito", JSON.stringify(carrito));

}

botonAccionVaciar.addEventListener("click", vaciarCarrito);
function vaciarCarrito() {
    carrito.length = 0;
    localStorage.setItem("carrito", JSON.stringify(carrito));
    productosAlCarrito();
}


function totalActualizado() {
    const totalCalculado = carrito.reduce((acc, producto) => acc + (producto.precio), 0);
    total.innerText = `$${totalCalculado}`;
}

botonAccionComprar.addEventListener("click", comprarCarrito);
function comprarCarrito() {

    carrito.length = 0;
    localStorage.setItem("carrito", JSON.stringify(carrito));
    
    contenedorCarritoVacio.classList.add("disabled");
    contenedorCarritoProductos.classList.add("disabled");
    contenedorCarritoAcciones.classList.add("disabled");
    contenedorCarritoComprado.classList.remove("disabled");

}