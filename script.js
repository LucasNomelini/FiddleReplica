function vermais(){
    let mais = document.getElementById("mais");
    let vermais = document.getElementById("vermais");

if(mais.style.display == "none"){
    mais.style.display = "inline";
    vermais.style.display = "none";
}else{
    mais.style.display = "none";
    vermais.style.display = "inline";
}
}

function passive(){
    document.getElementById("pas").innerHTML = "Passiva";
    document.getElementById("nomehab").innerHTML = "UM ESPANTALHO INOFENSIVO";
    document.getElementById("descpas").innerHTML = "O amuleto de Fiddlesticks é substituído por efígies do espantalho.";
    var video = document.getElementById("video");
    video.src = "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0009/ability_0009_P1.webm";
    video.load();
}

function habQ(){
    document.getElementById("pas").innerHTML = "Q";
    document.getElementById("nomehab").innerHTML = "ATERRORIZAR";
    document.getElementById("descpas").innerHTML = "O causar dano a inimigos com habilidades enquanto não estiver sendo visto ou alvejar um inimigo com Aterrorizar, Fiddlesticks inflige medo em uma unidade-alvo inimiga, fazendo com que fuja aterrorizada por um curto período.";
    var video = document.getElementById("video");
    video.src = "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0009/ability_0009_Q1.webm";
    video.load();
}

function habW(){
    document.getElementById("pas").innerHTML = "W";
    document.getElementById("nomehab").innerHTML = "COLHEITA FARTA";
    document.getElementById("descpas").innerHTML = "Fiddlesticks drena a Vida dos inimigos próximos, causando dano de execução adicional no fim da duração.";
    var video = document.getElementById("video");
    video.src = "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0009/ability_0009_W1.webm";
    video.load();
}
function habE(){
    document.getElementById("pas").innerHTML = "E";
    document.getElementById("nomehab").innerHTML = "CEIFAR";
    document.getElementById("descpas").innerHTML = "Fiddlesticks ceifa uma área com sua foice, reduzindo a velocidade de movimento de todos os inimigos atingidos e silenciando os atingidos no centro do corte.";
    var video = document.getElementById("video");
    video.src = "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0009/ability_0009_E1.webm";
    video.load();
}   

function habR(){
    document.getElementById("pas").innerHTML = "R";
    document.getElementById("nomehab").innerHTML = "TEMPESTADE DE CORVOS";
    document.getElementById("descpas").innerHTML = "Uma revoada de corvos assassinos voa em volta de Fiddlesticks, causando dano por segundo a todas as unidades inimigas próximas.";
    var video = document.getElementById("video");
    video.src = "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0009/ability_0009_R1.webm";
    video.load();
}

function ampliarBotao(element) {
    var skinsF = document.querySelectorAll('.skinsF');
    skinsF.forEach(function(item) {
        item.classList.remove('clicked');
    });

    element.classList.add('clicked');
}

function padrao(){
    var novaImagem = "Imagens/FiddlesticksPadrão.jpg";
    document.getElementById("trocaskin").src = novaImagem;
}

function espectral(){
    var novaImagem = "Imagens/FiddlesticksEspectral.jpg";
    document.getElementById("trocaskin").src = novaImagem;
}

function union(){
    var novaImagem = "Imagens/FiddlesticksUnionJack.jpg";
    document.getElementById("trocaskin").src = novaImagem;
}

function velho(){
    var novaImagem = "Imagens/FiddlesticksVelhoOeste.jpg";
    document.getElementById("trocaskin").src = novaImagem;
}

function cabeca(){
    var novaImagem = "Imagens/FiddlesticksCabeçaDeAbobora.jpg";
    document.getElementById("trocaskin").src = novaImagem;
}

function perna(){
    var novaImagem = "Imagens/FiddlesticksPernaDePau.jpg";
    document.getElementById("trocaskin").src = novaImagem;
}

function festa(){
    var novaImagem = "Imagens/FiddlesticksFestaSurpresa.jpg";
    document.getElementById("trocaskin").src = novaImagem;
}

function doces(){
    var novaImagem = "Imagens/FiddlesticksDocesTrevosos.jpg";
    document.getElementById("trocaskin").src = novaImagem;
}

function ascendente(){
    var novaImagem = "Imagens/FiddlesticksAscendente.jpg";
    document.getElementById("trocaskin").src = novaImagem;
}

function pretoriano(){
    var novaImagem = "Imagens/FiddlesticksPretoriano.jpg";
    document.getElementById("trocaskin").src = novaImagem;
}

function nemesis(){
    var novaImagem = "Imagens/FiddleSticksNemesesEstelar.jpg";
    document.getElementById("trocaskin").src = novaImagem;
}       
/*
window.alert("Ooi, amor");
window.alert("Veja meu projeto pronto");*/
