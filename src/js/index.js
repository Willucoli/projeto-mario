/* 
OBJETIVO 1 - QUANDO O USUARIO CLICAR NO BOTAO DE VEJA O TRAILER DEVEMOS ABRIR A MODAL COM O VIDEO DO TRAILER

OBRJETIVO 2 - QUANDO O USUARIO CLICAR NO X DEVEMOS FECHAR A MODAL

OBJETIVO 1 - QUANDO O USUARIO CLICAR NO BOTAO DE VEJA O TRAILER DEVEMOS ABRIR A MODAL COM O VIDEO DO TRAILER
    PASSO 1 - DAR UM JEITO DE PEGAR O ELEMENTE QUE REPRESENTA O BOTÃO NA TELA USANDO JS
    PASSO 2 - DAR U JEITO DE INDENTIFICAR QUANDO O USUARIO CLICAR NO BOTÃO
    PASSO 3 - DAR UM JEITO DE PEGAR O ELEMENTO DA MODAL NO JS
    PASSO 4 - ABRIR A MODAL NA TELA

OBRJETIVO 2 - QUANDO O USUARIO CLICAR NO X DEVEMOS FECHAR A MODAL
    PASSO 1 = DAR UM JEITO DE PEGAR O ELEMENTEO DE FECHAR MODAL USANDO JS
    PASSO 2 - DAR UM JEITO DE IDENTIFICAR QUANDO O USUARIO CLICAR NO X
    PASSO 3 - FECHAR A MODAL

*/


const botaoTrailer = document.querySelector(".botao-trailer");
const botaoFecharModal = document.querySelector(".fechar-modal");
const modal = document.querySelector(".modal");
const video = document.getElementById("video");
const linkDoVideo = video.src ;

function alternarModal(){
    modal.classList.toggle("aberto");

};

botaoTrailer.addEventListener("click",() => {
    alternarModal();
    video.setAttribute("src", linkDoVideo);
});


botaoFecharModal.addEventListener("click", () => {
    alternarModal();
    video.setAttribute("src", "");
});








