//codigo do carro

let xCarro = 600;
let yCarro = 40;

function mostraCarro(){
  image(imagemDoCarro, xCarro, yCarro, 50, 40)
}

function movimentaCarro(){
  xCarro -= 2;
}