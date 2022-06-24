const altura = document.getElementById('altura');
const peso = document.getElementById('peso');
const mensagem = document.getElementById('mensagem');
const input = document.getElementsByTagName('input');
const button = document.getElementById('button');
const resultado = document.getElementById('resultado');
const limpar = document.getElementById('limpar');
let nivel;
let imc;



    altura.addEventListener('keyup', (event) => {
    
    if (isNaN(Number(altura.value))) {
        peso.classList.remove('focus');
        altura.classList.add('focus');
        peso.classList.add('erro');
        altura.classList.add('erro');
        mensagem.classList.add('erroFont');
        mensagem.innerHTML = `Digite apenas números separados por ponto!`;
    } else {
        peso.classList.remove('erro');
        altura.classList.remove('erro');
        mensagem.innerHTML = ``;
        mensagem.classList.remove('erroFont');
    }
});

peso.addEventListener('keyup', (event) => {
    if(isNaN(Number(peso.value))){
        peso.classList.remove('focus');
        altura.classList.add('focus');
        peso.classList.add('erro');
        altura.classList.add('erro');
        mensagem.classList.add('erroFont');
        mensagem.innerHTML = `Digite apenas números separados por ponto!`;
 } else {
        peso.classList.remove('erro');
        altura.classList.remove('erro');
        mensagem.innerHTML = ``;
        mensagem.classList.remove('erroFont');
    }
});



button.addEventListener('click', (event) => {
    event.preventDefault();
    let valorAltura = altura.value;
    let valorPeso = peso.value;
    imc = valorPeso/Math.pow(valorAltura,2);
    nivelImc();
    resultado.innerHTML = `<p>Seu IMC é: ${imc.toFixed(2)}<p></br>${nivel}`
});

limpar.addEventListener('click', () => {
    altura.value.innerHTML = "";
    peso.value.innerHTML = "";
    resultado.innerHTML = "";
});

function nivelImc() {
        
    if(imc < 16){
        nivel = "Peso deficitário."
    }

    else if(imc <= 18.5){
        nivel = "Abaixo do peso.";
    }

    else if(imc <= 24){ 
        nivel = "Peso ideal (normal).";
    }

    else if(imc <= 30){ 
        nivel = "Acima do peso.";
    }

    else if(imc <= 35){
        nivel = "Obesidade nível 1.";
    }

    else if(imc <= 40){
        nivel = "Obesidade nível 2.";
    }

    else if(imc > 40){
        nivel = "Obesidade nível 3.";
    }
}