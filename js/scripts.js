
//TODO Nodo presupuestador


let calculoViaje = document.getElementById("calculoViaje");

calculoViaje.addEventListener('submit', calcExpenses)

function calcExpenses(e){ 
e.preventDefault();

let destino = document.getElementById('destino').value;
let presupuesto = document.getElementById('presupuesto').value;
let alojamiento = document.getElementById('alojamiento').value;
let transportes = document.getElementById('transportes').value;
let comida = document.getElementById('comida').value;

let expenses = parseInt(alojamiento) + parseInt(transportes) + parseInt(comida); 
let balance = presupuesto  - expenses; 
console.log(balance ?? "Otro dato");

presupeustoUsuario(destino, presupuesto, balance);

}

function presupeustoUsuario(destino, presupuesto, balance){
    let result = document.getElementById('result');
    let dataPrint = document.createElement('div');
    dataPrint.innerHTML = `
    <div class="container-data row text-center divAux">
        <div class="col-sm-4">
            <h6 class="fs-3"><i class="bi bi-airplane-engines-fill" style="font-size: 3rem; color: #2E70DC;"></i> Destino: ${destino}</h6>
        </div>
        <div class="col-sm-4">
            <h6 class="fs-3"><i class="bi bi-cash-coin" style="font-size: 3rem; color: #584B53;"></i> Presupuesto:$ ${presupuesto}</h6>
        </div>
        <div class="col-sm-4">
            <h6 class="fs-3"><i class="bi bi-shuffle" style="font-size: 3rem; color: #9D5C63;"></i> Balance:$ ${balance}</h6>
        </div>
    </div>
    `
    result.appendChild(dataPrint);

    reset();
}
function reset(){
    calculoViaje = document.getElementById("calculoViaje").reset();
}



//TODO Nodo shop

let carrito = [];
console.log(carrito?.productos || "Aún no hay datos")

let baseDeDatos = [];

let producto1 = new Producto('Bariloche', 59.999, 4, "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Llao_llao.jpg/800px-Llao_llao.jpg"); 
let producto2 = new Producto('Calafate', 159.999, 5,"https://www.clarin.com/img/2022/02/07/el-glaciar-perito-moreno-la___FftjkQcwW_2000x1500__1.jpg"); 
let producto3 = new Producto('Pinamar', 79.999, 7,"https://fotos.perfil.com/2020/02/12/trim/1280/720/playa-de-pinamar-915065.jpg"); 
let producto4 = new Producto('Carmen de Areco', 35.999, 4,"https://i0.wp.com/www.disfrutarosario.com/wp-content/uploads/2021/08/carmen-de-areco-buenos-aires.jpg?fit=750%2C500&ssl=1"); 
let producto5 = new Producto('San Martin de los Andes', 168.999, 4,"https://www.patagoniaandina.com/wp-content/uploads/2020/04/Portada-San-Mart%C3%ADn-de-los-Andes.jpg"); 
let producto6 = new Producto('Villa las rosas', 28.999, 3,"https://cordobainteriorinforma.com/wp-content/contenidos/2022/06/villa-de-las-rosas-1.jpg"); 
let producto7 = new Producto('Cajón del Azul', 46.999, 4,"https://www.rionegro.com.ar/wp-content/uploads/2022/01/Tekking-Rio-Azul-foto-puente-la-tronconada.jpg"); 
let producto8 = new Producto('Destino secreto', 199.999, 2,"https://img.freepik.com/vector-premium/sello-alto-secreto_25030-24458.jpg?w=2000"); 
let producto9 = new Producto('Usuahia', 149.999, 5,"https://www.eltiempo.com/files/image_640_428/uploads/2022/05/14/6280662b1a91a.jpeg");


baseDeDatos.push(producto1);
baseDeDatos.push(producto2);
baseDeDatos.push(producto3);
baseDeDatos.push(producto4);
baseDeDatos.push(producto5);
baseDeDatos.push(producto6);
baseDeDatos.push(producto7);
baseDeDatos.push(producto8);
baseDeDatos.push(producto9);

/* Destructuración de array - prueba */
const [a, b, c, d, e, f, g, h, i] = baseDeDatos;
console.log(a); 
console.log(b); 
console.log(c); 
console.log(d); 
console.log(e); 
console.log(f); 
console.log(g); 
console.log(h);

console.log(...baseDeDatos);


baseDeDatos.forEach((el)=>{
})




let aux = ``; 
for (let i = 0; i < baseDeDatos.length; i++) {
    baseDeDatos[i].stock > 0 ? aux += `
    <div class="col-lg-4 col-md-6 mb-4">
        <div class="card h-100">
            <img class="card-img-top" src="${baseDeDatos[i].imagen}" alt="..." />
            <div class="card-body p-4">
                <div class="text-center">
                    <h5 class="fw-bolder">${baseDeDatos[i].nombre}</h5>
                        $${baseDeDatos[i].precio}<br>
                        Stock: ${baseDeDatos[i].stock}
                </div>
            </div>
            <div class="card-footer p-4 pt-0 border-top-0 bg-transparent">
                <div class="text-center"><button  id="toastifyAgregar" onclick='agregarAlCarrito(${JSON.stringify(baseDeDatos[i])})'  class="btn btn-outline-dark mt-auto">Agregar al carrito</button></div>
            </div>
        </div>
    </div>
    ` : aux +=`
    <h5>No hay stock</h5>
    `; 
}

document.getElementById("productos").innerHTML=aux; 

//TODO Nodo Carrito 


if (localStorage.getItem('carrito') != null) {
let valorCarrito = JSON.parse(localStorage.getItem('carrito'));
carrito = valorCarrito;
let auxCarrito = `
<div class="badge bg-dark text-white ms-1 rounded-pill align-middle">Productos: ${carrito.length}</div>
`
document.getElementById("contador").innerHTML = auxCarrito; 
}

function agregarAlCarrito(producto){
   carrito.push(producto); 
   Toastify({
        text: "¡Agregado! :)",
        duration: 3000,
        destination: 'index.html',
        newWindow: false,
        close: true,
        gravity: "bottom",
        position: "right",
        stopOnFocus: true,
        style: {
        background: "linear-gradient(to right, #1b8f36, #22b544, #29db52)",
        },
    }).showToast();
    localStorage.setItem("carrito", JSON.stringify(carrito));
    let auxPrecioTotal = 0; 
    for(let i = 0; i < carrito.length; i++){
        auxPrecioTotal += carrito[i].precio;
    }
    document.getElementById("precioTotal").innerHTML="$"+parseFloat(auxPrecioTotal); 
    let auxCarrito = `
<div class="badge bg-dark text-white ms-1 rounded-pill align-middle">Productos: ${carrito.length}</div>
`
document.getElementById("contador").innerHTML = auxCarrito;
}

 //TODO Nodo Borrar carrito

 function borrarProducto(){
    const nuevoCarrito = [];
    Toastify({
        text: "Borrado del carrito : /",
        duration: 3000,
        destination: 'index.html',
        newWindow: false,
        close: true,
        gravity: "top", 
        position: "right", 
        stopOnFocus: true, 
        style: {
        background: "linear-gradient(to right, #cd0e18, #f3101c, #ff1010)",
        },
      }).showToast(); 
    for (let i = 0; i < carrito.length; i++) {
        (i != 0) && nuevoCarrito.push(carrito[i]);
    }
    localStorage.setItem("carrito", JSON.stringify(nuevoCarrito));
    carrito = nuevoCarrito; 
    let auxPrecioTotal = 0; 
    for(let i = 0; i < carrito.length; i++){
        auxPrecioTotal += carrito[i].precio;
    }
    document.getElementById("precioTotal").innerHTML="$"+0; 
    let auxCarrito = `
<div class="badge bg-dark text-white ms-1 rounded-pill align-middle">Productos: 0 </div>
`

document.getElementById("contador").innerHTML = auxCarrito;
localStorage.removeItem('carrito');
carrito = []
}

let auxBorrar = `
    <button onclick="borrarProducto()" class="btn btn-outline-dark" type="submit">
        <i class="bi bi-cart-x-fill"></i> Borrar Carrito
    </button>
`;
document.getElementById("borrarDelCarrito").innerHTML=auxBorrar;

// TODO SWAL


const sweetPresupuesto = document.querySelector("#sweetPresupuesto");

sweetPresupuesto.addEventListener("click", () => {
    Swal.fire({
        title: '¡Excelente!',
        text: 'Realizaste tu presupuesto.. ¿O no?',
        icon: 'success',
        confirmButtonText: 'Continuar :)',
        iconColor: '#4f3b94',
        iconHtml: '<i class="bi bi-cash-coin"></i>',
        allowOutsideClick: false,
    })
})


const sweetMensajeCarrito = document.querySelector("#sweetMensajeCarrito");

sweetMensajeCarrito.addEventListener("click", () => {
    Swal.fire({
        title: '¡Este es tu carrito!',
        text: '¿Está lleno?',
        icon: 'success',
        confirmButtonText: '¡Sigamos adelante!',
        iconColor: '#141619',
        iconHtml: '<i class="bi bi-cart-fill"></i>',
        allowOutsideClick: false,
    })
})

// TODO TOAST

const toastifyHome = document.querySelector("#toastifyHome")

toastifyHome.addEventListener("click", () =>{
   Toastify({
    text: "Ya estás aquí",
    duration: 3000,
    destination: 'index.html',
    newWindow: false,
    close: true,
    gravity: "top", 
    position: "center", 
    stopOnFocus: true, 
    style: {
    background: "linear-gradient(to right, #261c47, #32255f, #4e3a93)",
    },
  }).showToast(); 
})














