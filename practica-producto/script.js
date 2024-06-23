/* 
Crear una funcion llamada registrarProducto
La funcion solicitara al usuario:
-Titulo: Debe ser un string con mas de 4 caracteres
-Precio: Debe ser un numero positivo mayor a 1
-Descripcion: Debe ser un string con almenos 10 caracteres
-Categoria: Debe ser un string que este dentro de las sig opciones ['tecnologia', 'hogar', 'otros']
-Marca: Debe ser un string con almenos 3 caracteres

Se solicitara siempre mediante uso de prompts

Se mostrara al usuario la sig plantilla/texto por prompt (para que pueda contestar):
Confirmar producto:
-Titulo: 'Mesa de trabajo de madera'
-Precio: '300'
-Descripcion: 'Mesa de trabajo ideal para astillarse'
-Categoria: 'hogar'
-Marca: 'Jorge el carpintero'
Si el usuario elige cancelar (con el button) o escribe 'CANCELAR' o 'NO' se volvera a comenzar
Si el usuario presiona aceptar o escribe 'SI' entonces la funcion creara un objeto del producto y lo mostrara por consola
*/

const categorias = ['tecnologia', 'hogar', 'otros']

const validarString = (string, caracteres) => string && isNaN(string) && string.length >= caracteres
const validarTitulo = (titulo) => validarString(titulo, 4)
const validarDescripcion = (descripcion) => validarString(descripcion,10)
const validarMarca = (marca) => validarString(marca, 3)
const validarCategoria = (categoria) => categoria && isNaN(categoria) && categorias.includes(categoria.toLowerCase())
const validarPrecio = (precio) => precio && !isNaN(precio) && precio >= 1

const registrarProducto = () =>{
    const producto = {}

    let titulo = prompt('Ingrese el titulo del producto')
    while(!validarTitulo(titulo)){
        titulo = prompt('Error: el titulo debe tener mas de 4 caracteres')
    }
    producto.titulo = titulo

    let precio = prompt('Ingrese el precio(numero positivo mayor a 1)')
    while(!validarPrecio(precio)){
        precio = prompt('Error: ingrese un precio valido')
    }
    producto.precio = precio

    let descripcion = prompt('Ingrese la descripcion del producto')
    while(!validarDescripcion(descripcion)){
        descripcion = prompt('Error: la descripcion debe tener al menos 10 caracteres')
    }
    producto.descripcion = descripcion

    let categoria = prompt('Ingrese la categoria del producto. Categorias validas: tecnologia, hogar u otros')
    while(!validarCategoria(categoria)){
        categoria = prompt('Error: Categorias validas: tecnologia, hogar u otros')
    }
    producto.categoria = categoria

    let marca = prompt('Ingrese la marca del producto')
    while(!validarMarca(marca)){
        marca = prompt('Error: la marca debe tener al menos 3 caracteres')
    }
    producto.marca = marca
    let confirmacion = prompt(`
        Confirmar producto:
        - Titulo: ${producto.titulo}
        - Precio: ${producto.precio}
        - Descripción: ${producto.descripcion}
        - Categoría: ${producto.categoria}
        - Marca: ${producto.marca}
        Para cancelar escriba 'CANCELAR' o 'NO' o presione cancelar
        Para confirmar escriba 'SI' o presione aceptar`
    )
    
    if(confirmacion === null || confirmacion.toLowerCase() === 'cancelar' || confirmacion.toLowerCase() === 'no'){
        registrarProducto()
    }
    else if (!confirmacion || confirmacion.toLowerCase() === 'si'){
        console.log(producto)
    }
    return producto
}

registrarProducto()


