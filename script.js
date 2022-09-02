//           Variaveis das cores

const colorPreto = document.getElementsByClassName('color')[0];
const colorAmarelo = document.getElementsByClassName('color')[1];
const colorRoxo = document.getElementsByClassName('color')[2];
const colorAzul = document.getElementsByClassName('color')[3];

//          Colorindo Background

colorPreto.style.backgroundColor = 'black';
colorAmarelo.style.backgroundColor = 'yellow';
colorRoxo.style.backgroundColor = 'purple';
colorAzul.style.backgroundColor = 'blue';

//           Criando Pixel Board

// Variavel da div Pixel Board

const pixelBoard = document.getElementById('pixel-board');

// Função que determina tamanho e cria os pixels

function quantidadeDeLinhasPixelBoard(numeroDeLinhas) {
  for (let i = 0; i < numeroDeLinhas; i += 1) {
    const linhas = document.createElement('div');
    linhas.className = 'line';

    for (let i2 = 0; i2 < numeroDeLinhas; i2 += 1) {
      const pixelBlock = document.createElement('div');
      // Atributos pixels
      pixelBlock.className = 'pixel';
      // Adicionando ao html
      linhas.appendChild(pixelBlock);
    }
    pixelBoard.appendChild(linhas);
  }
}
quantidadeDeLinhasPixelBoard(5);

//                          Evento para click que adiciona classe selected

const cores = document.getElementsByClassName('color');

// Adiciona evento

function colorDivSelector(color) {
  cores[color].addEventListener('click', (evento) => {
    for (let i = 0; i < cores.length; i += 1) {
      if (cores[i].className.includes('selected')) {
        cores[i].classList.remove('selected');
      }
    }
    evento.target.classList.add('selected');
  });
}
colorDivSelector(0);
colorDivSelector(1);
colorDivSelector(2);
colorDivSelector(3);

//           Pintando os pixels

const pixels = document.getElementsByClassName('pixel');

function pintar(evento2) {
  const colorSelected = document.querySelector('.selected').style.backgroundColor;
  evento2.target.style.backgroundColor = colorSelected;
}

pixelBoard.addEventListener('click', pintar);

//          Botão para limpar os pixels pintados

function limpar() {
  for (const i4 of pixels) {
    i4.style.backgroundColor = 'white';
  }
}
const btnLimpar = document.getElementById('clear-board');

btnLimpar.addEventListener('click', limpar);
