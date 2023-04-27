const box = document.querySelector('.box');
const mensagem = document.querySelector('.mensagem');
const mensagemvalidacao = document.querySelector('.mensagem-validacao');

function validacaoDados(vozCaptada){
    parseInt(vozCaptada);
    if(isNaN(vozCaptada)){
        mensagemvalidacao.textContent = 'Palavra dita não é um número!!!'
        mensagemvalidacao.style.cssText = 'visibility: visible';
    }
    else if (vozCaptada < menor || vozCaptada > maior){
        console.log()
        mensagemvalidacao.textContent = `Fale um número entre ${menor} e ${maior}`
        mensagemvalidacao.style.cssText = 'visibility: visible';
    }
    else if (vozCaptada > menor && vozCaptada < maior){
        maiorOuMenor(vozCaptada);
    }
    displayCaptura(vozCaptada);
};

function displayCaptura(vozCaptada){
    box.textContent = vozCaptada;
    mensagem.style.cssText = 'visibility: visible';
};

function maiorOuMenor(vozCaptada){
    console.log(numeroAleatorio);
    if(vozCaptada < numeroAleatorio){
        mensagemvalidacao.innerHTML = `O número secreto é maior
         <i class="fa-sharp fa-solid fa-arrow-up"></i>`;
        mensagemvalidacao.style.cssText = 'visibility: visible; color: blue';
    }
    else if(vozCaptada > numeroAleatorio){
        mensagemvalidacao.innerHTML = `O número secreto é menor
        <i class="fa-sharp fa-solid fa-arrow-down"></i>`;
        mensagemvalidacao.style.cssText = 'visibility: visible; color: blue';
    }
    else if(vozCaptada === numeroAleatorio){
        mensagemvalidacao.innerHTML = `VOCÊ ACERTOU O NÚMERO SECRETO
        <div>
        <button id="btn-restart">Descobrir Novamente</button>
        </div>`;
        mensagemvalidacao.style.cssText = 'visibility: visible; color: green';
    }
}   
