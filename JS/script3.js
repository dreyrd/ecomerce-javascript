let url2 = 'https://dummyjson.com/products';

let nomeUser = localStorage.getItem('nomeUsuario');
let fotoUser = localStorage.getItem('imagemUsuario');

let carrinhoJson = localStorage.getItem('usuarioCarrinho');
let carinho = JSON.parse(carrinhoJson);

let carrinhoVisual = document.getElementById('compras');
let campoFoto = document.getElementById('foto-perfil');



document.addEventListener('DOMContentLoaded', function() {

    carregarPerfil();
    mostrarCarrinho();

});

function carregarPerfil(){

    if (fotoUser){
        campoFoto.src = fotoUser;
    }
    else{
        campoFoto.src = './img/cachorro.jpg'
    }

}

function voltarProdutos(){
    window.location.href = './produtos.html';
}

function mostrarCarrinho(){

    for (const item of Object.keys(carinho)){
        console.log(item);
        fetch(url2 + '/' + item)
        .then(res => res.json())
        .then(res => {

            console.log()
            let produto = document.createElement('p')
            produto.innerHTML = res.title + ' ' + '  X' + carinho[item][0] + ' ' + ' Preço: R$' + carinho[item][0] * carinho[item][1];

            carrinhoVisual.appendChild(produto)


        })


    }
    
}