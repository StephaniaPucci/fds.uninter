let botao = document.querySelector("#botao");
let frase = document.querySelector("#frase");

document.getElementById("botao").addEventListener('click',
    function() {
        document.getElementById('frase').style.display = 'block';
    });