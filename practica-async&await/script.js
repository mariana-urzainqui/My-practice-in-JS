/* 
Ejecutar una peticion HTTP con metodo GET a esta direccion: https://jsonplaceholder.typicode.com/posts

Una vez obtenido el JSON de esa direccion deberas renderizar todos los posts en html en un div con la sig estructura

<div>
    <h3>{post.title}</h3>
    <p>{post.body}</p>
    <button>♥</button>
</div>
*/

const postContainerHTML = document.getElementById('posts-container')

const solicitarPosts = async () =>{
    const respuesta = await fetch('https://jsonplaceholder.typicode.com/posts',{
        method: 'GET'
    })
    const resultado = await respuesta.json()

    let html = ''

    for (let i = 0; i < resultado.length; i+=1){
    const post = resultado[i]
    html += (`
    <div>
        <h3>${post.title}</h3>
        <p>${post.body}</p>
        <button>♥</button>
    </div>
    `)
    }
    postContainerHTML.innerHTML = html
}
solicitarPosts()


