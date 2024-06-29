/* Por cada producto muestren un mensaje de alerta con el siguiente formato
El producto {nombreProducto} cuesta $ {precioProducto} y tiene el id {idProducto}*/

const productos = [
    {
        titulo: 'tv samsung 42"',
        precio: 5000,
        id: 1,
    },
    {
        titulo: 'tv samsung 52"',
        precio: 10000,
        id: 2,
    },
    {
        titulo: 'tv samsung 72"',
        precio: 100000,
        id: 3,
    }
]

for (const producto of productos){
    if(producto.id === 1){
        producto.titulo = 'tv noblex'
    }
    alert(`El producto ${producto.titulo} cuesta $${producto.precio} y tiene el id ${producto.id}`)
}