document.getElementsByTagName('button')[0].addEventListener('click', logar)

let login = document.getElementsByTagName('input')[0];
let senha = document.getElementsByTagName('input')[1];

let nomeUsuario;
let imagemUsuario;

document.addEventListener('DOMContentLoaded', function() {

    localStorage.setItem('usuarioCarrinho', null);

});

function logar(){
    let url1 = 'https://dummyjson.com/auth/login';


    
    fetch(url1, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            username: login.value, //emilys
            password: senha.value, //emilyspass
        })
    })
    .then(res => res.json())
    .then(res => {

        if (res.firstName && res.lastName && res.image){
            let container = document.getElementById('pessoa');

            nomeUsuario = document.createElement('p');
            nomeUsuario.innerHTML = res.firstName + ' ' + res.lastName;

            imagemUsuario = document.createElement('img');
            imagemUsuario.src = res.image;


            container.appendChild(nomeUsuario);
            container.appendChild(imagemUsuario);

            window.location.href = './produtos.html';
            localStorage.setItem('nomeUsuario', nomeUsuario);
            localStorage.setItem('imagemUsuario', res.image);

        }
        else{
            alert('Usuario não encontrado');
        }
        


    })

    

}