var jogador, vencedor = null;

var jogadorSelecionado = document.getElementById(elementId = 'Jogador-selecionado');
var vencedorSelecionado = document.getElementById(elementId = 'Vencedor-selecionado');

var quadrados = document.getElementsByClassName(classname = 'quadrado');

mudarjogador( valor = 'X');

function escolherquadrado(id){

    if (vencedor !== null) {
        return;
    }
    
    var quadrado = document.getElementById(id);
    if(quadrado.innerHTML !== '-') {
        return;
    }

    quadrado.innerHTML = jogador;
    quadrado.style.color = '#000';

    if(jogador === 'X') {
        jogador = 'O';
    }else {
        jogador = 'X';
    }

    mudarjogador(jogador);
    checavencedor();
}

function mudarjogador(valor){
   jogador = valor;
   jogadorSelecionado.innerHTML = jogador;
}

function checavencedor() {
    var quadrado1 = document.getElementById(elementId = 1);
    var quadrado2 = document.getElementById(elementId = 2);
    var quadrado3 = document.getElementById(elementId = 3);
    var quadrado4 = document.getElementById(elementId = 4);
    var quadrado5 = document.getElementById(elementId = 5);
    var quadrado6 = document.getElementById(elementId = 6);
    var quadrado7 = document.getElementById(elementId = 7);
    var quadrado8 = document.getElementById(elementId = 8);
    var quadrado9 = document.getElementById(elementId = 9);

    if (checasequencia(quadrado1, quadrado2, quadrado3)){
        mudacorQuadrado(quadrado1, quadrado2, quadrado3);
        mudarvencedor(quadrado1);
        return;
    }

    if (checasequencia(quadrado4, quadrado5, quadrado6)){
        mudacorQuadrado(quadrado4, quadrado5, quadrado6);
        mudarvencedor(quadrado4);
        return;
    }

    if (checasequencia(quadrado7, quadrado8, quadrado9)){
        mudacorQuadrado(quadrado7, quadrado8, quadrado9);
        mudarvencedor(quadrado7);
        return;
    }

    if (checasequencia(quadrado1, quadrado4, quadrado7)){
        mudacorQuadrado(quadrado1, quadrado4, quadrado7);
        mudarvencedor(quadrado1);
        return;
    }

    if (checasequencia(quadrado2, quadrado5, quadrado8)){
        mudacorQuadrado(quadrado2, quadrado5, quadrado8);
        mudarvencedor(quadrado2);
        return;
    }

    if (checasequencia(quadrado3, quadrado6, quadrado9)){
        mudacorQuadrado(quadrado3, quadrado6, quadrado9);
        mudarvencedor(quadrado3);
        return;
    }

    if (checasequencia(quadrado1, quadrado5, quadrado9)){
        mudacorQuadrado(quadrado1, quadrado5, quadrado9);
        mudarvencedor(quadrado1);
        return;
    }

    if (checasequencia(quadrado3, quadrado5, quadrado7)){
        mudacorQuadrado(quadrado3, quadrado5, quadrado7);
        mudarvencedor(quadrado3);
        return;
    }
}

function mudarvencedor(quadrado){
   vencedor = quadrado.innerHTML;
   vencedorSelecionado.innerHTML = vencedor;


}

function mudacorQuadrado(quadrado1,quadrado2,quadrado3){
      quadrado1.style.background = '#0f0';
      quadrado2.style.background = '#0f0';
      quadrado3.style.background = '#0f0';

}

function checasequencia(quadrado1, quadrado2, quadrado3){
   var eigual = false;

   if(quadrado1.innerHTML != '-' && quadrado1.innerHTML === quadrado2.innerHTML && quadrado2.innerHTML === quadrado3.innerHTML){
     eigual = true;
   }

   return eigual;
}

function reiniciar()
{
    vencedor = null;
    vencedorSelecionado.innerHTML = ' ';

    for (var i = 1; i <= 9; i++){
        var quadrado = document.getElementById(i);
        quadrado.style.background = '#eee';
        quadrado.style.color = '#eee';
        quadrado.innerHTML = '-';
    }

    mudarjogador(valor = 'X');
}