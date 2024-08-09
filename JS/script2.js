let url2 = 'https://dummyjson.com/products';
let produtos = document.getElementById('produtos');
let nomeUser = localStorage.getItem('nomeUsuario');
let fotoUser = localStorage.getItem('imagemUsuario');
let campoFoto = document.getElementById('foto-perfil');
let meuCarrinho = {};

document.addEventListener('DOMContentLoaded', function() {

    recuperarCarrinho();
    showProducts();

});

function showProducts(){
    

    if (fotoUser){
        campoFoto.src = fotoUser;
    }
    else{
        campoFoto.src = './img/cachorro.jpg'
    }
    


    for (let i = 1; i < 60; i++){
        fetch(url2 + '/' + i.toString())
        .then(res => res.json())
        .then(res => {


            let cartao = document.createElement('div')
            cartao.style.display = 'flex'
            cartao.style.flexDirection = 'column'
            cartao.style.backgroundColor = "#94c5cc"
            cartao.style.width = "230px";
            cartao.style.height = "380px";
            cartao.style.paddingBottom = "15px"
            cartao.style.paddingLeft = '20px'
            cartao.style.paddingRight = '20px'
            cartao.style.alignItems = 'center'
            cartao.style.justifyContent = 'center'
            cartao.style.borderRadius = '1em'
            cartao.style.margin = '30px 50px'

            let imagemDiv = document.createElement('div')
            imagemDiv.style.height = '80%'
            imagemDiv.style.display = 'flex'
            imagemDiv.style.overflow = "hidden"
            imagemDiv.style.alignItems = 'center'
            imagemDiv.style.justifyContent = 'center'
            

            let produto = document.createElement('p')
            produto.innerHTML = res.title
            produto.style.marginBottom = '0px'

            let preco = document.createElement('p')
            preco.innerHTML = res.price
            preco.style.marginTop = '10px'

            let imagem = document.createElement('img')
            imagem.style.width = '100%';
            imagem.src = res.images[0];
            imagem.style.marginLeft = 'auto';

            let comprar = document.createElement('button')
            comprar.style.backgroundColor = '#F8F8F8'
            comprar.textContent = 'Comprar agora'
            comprar.style.width = '94%'
            comprar.style.height = '10%'
            comprar.style.border = 'none'
            comprar.style.borderRadius = '0.5em'
            comprar.style.cursor = 'pointer'

            comprar.addEventListener('click', function(){
                adicionarCarrinho(i.toString(), res.price);
            })

            imagemDiv.appendChild(imagem)
            
            
            cartao.appendChild(imagemDiv)
            cartao.appendChild(produto)
            cartao.appendChild(preco)
            cartao.appendChild(comprar)

            produtos.appendChild(cartao)


        })
    }
}

function irCarrinho(){
    let carrinhoJson = JSON.stringify(meuCarrinho);
    localStorage.setItem('usuarioCarrinho', carrinhoJson);

    window.location.href = './carrinho.html';
}

function adicionarCarrinho(item_num, preco){

    

    if (item_num in meuCarrinho){
        meuCarrinho[item_num][0] += 1
    }
    else{
        meuCarrinho[item_num] = [1, preco]
    }
    console.log(meuCarrinho);
}

function recuperarCarrinho(){


    let carrinhoJson = localStorage.getItem('usuarioCarrinho');
    meuCarrinho = JSON.parse(carrinhoJson);
    
    
    if (meuCarrinho === null){
        meuCarrinho = {};
    }

}