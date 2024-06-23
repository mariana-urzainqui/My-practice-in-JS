/*
Renderizar un carrito:
Un array de items llamado carrito
Cada item tiene el sig formato
object:
    nombre: string
    id: numero positivo distinto de 0
    precio: numero positivo distinto de 0
    cantidad: numero positivo distinto de 0
    img: string con la direccion de alguna imagen EJ: https://images.samsung.com/is/image/samsung/p6pim/ar/feature/164555231/ar-feature-experience-the-wow-ofneo-qled-536472255?$FB_TYPE_K_JPG$
Cada item mostrado en HTML va a tener este formato
Div
    h3: {nombre} id:#{id}
    img: el src tendra el valor {img} y el ancho en 100px
    span: Precio unitario: ${precio} x {cantidad} unidades
    span: Total: ${precio * cantidad}
*/

const carrito = [
    {
        nombre: 'Remera azul',
        id: 1,
        precio: 1000,
        cantidad: 2,
        img: 'https://dcdn.mitiendanube.com/stores/001/205/102/products/remera-lisa-fr-rj-11-ef4b6ca4b08c3f434315906905869409-640-0.jpg'
    },
    {
        nombre:'Remera negra',
        id: 2,
        precio: 1500,
        cantidad: 1,
        img: 'https://acdn.mitiendanube.com/stores/943/997/products/basica-negra1-9ede7dca77d434160616676898161690-1024-1024.jpg'
    },
    {
        nombre: 'Remera verde',
        id: 3,
        precio: 1800,
        cantidad: 4,
        img: 'https://dcdn.mitiendanube.com/stores/001/205/102/products/remera-lisa-vi-rj1-122009f0e7fe0bfa3715906956218434-480-0.jpg'
    }
]



const renderizarCarrito = (carrito) =>{
    const carritoHTML = document.getElementById('carrito')
    const totalHTML = document.getElementById('total')

    let listaProducto = ''
    let totalCarrito = 0

    for(let producto of carrito){
        listaProducto = listaProducto + `
        <h3>${producto.nombre} id: #${producto.id}</h3>
        <img width="100px" src="${producto.img}">
        <span>Precio unitario: $${producto.precio} x ${producto.cantidad}unidad(es)</span>
        <span>Total: ${producto.precio * producto.cantidad}</span>
        `
        totalCarrito = totalCarrito + (producto.precio * producto.cantidad)
    }

    carritoHTML.innerHTML = listaProducto
    totalHTML.innerText = 'El total es: $' + totalCarrito
}

renderizarCarrito(carrito)

const eliminarItemPorId = (id) =>{
    const productoBuscado = carrito.find((producto) => {
        return producto.id === id
    })
    if(productoBuscado){
        if(productoBuscado.cantidad === 1){
            const posicionProducto = carrito.findIndex((producto) => {
                return producto.id === id
            })
            carrito.splice(posicionProducto,1)
        }
        else{
            productoBuscado.cantidad = productoBuscado.cantidad - 1
        }
        renderizarCarrito(carrito)
    }
    else{
        console.error('Error: producto con ID inexistente')
    }
    console.log(productoBuscado)
}

/* eliminarItemPorId(2) */

/* Crear la funcion llamada agregarItemAlCarrito(item)
Item es un objeto con 
{
        nombre: 'Toyota GR86',
        id: 2,
        precio: 25000,
        thumbnail: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWAApjDiM2t4OqVSjXoJWwNFl4k32NArjLSQ&s"
}
Buscar si en carrito ya existe un elemento con ese id
SI existe unicamente incrementaran su cantidad en 1

SI no existe van a agregarlo al carrito y van a crear una propiedad para ese item llamada cantidad y con el valor 1

EJEMPLO DE USO:

agregarItemAlCarrito({
        nombre: 'Toyota GR86',
        id: 2,
        precio: 25000,
        thumbnail: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWAApjDiM2t4OqVSjXoJWwNFl4k32NArjLSQ&s"
})
Va a incrementar la cantidad de toyota en 1 en el carrito PORQUE YA EXISTE

agregarItemAlCarrito({
        nombre: 'Honda Civic',
        id: 20,
        precio: 25000,
        thumbnail: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWAApjDiM2t4OqVSjXoJWwNFl4k32NArjLSQ&s"
})
Se agrega al array carrito pero con la propiedad cantidad en 1
*/ 

const agregarProductoAlCarrito = (item) =>{
    const productoBuscado = carrito.find((producto) => {
        return producto.id === item.id
    })
    if (productoBuscado){
        productoBuscado.cantidad = productoBuscado.cantidad + 1
    }
    else{
        item.cantidad = 1
        carrito.push(item)
    }
    renderizarCarrito(carrito)
}
/* 
agregarProductoAlCarrito({
    nombre: 'Honda Civic',
    id: 20,
    precio: 25000,
    thumbnail: "https://sublitextil.com.ar/wp-content/uploads/2019/01/Remera-sublimar-hombre-.jpg"
}) */