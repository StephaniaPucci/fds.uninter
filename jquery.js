let botao = document.querySelector("#botao");
let frase = document.querySelector("#frase");

document.getElementById("botao").addEventListener('click',
    function() {
        document.getElementById('frase').style.display = 'block';
        const apagarfrase = 5000;
        const frase = document.getElementById("frase");
        setTimeout(function() {
            frase.textContent = '';
        }, apagarfrase);
    });
   
