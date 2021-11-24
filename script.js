let order = [];
let clickedOrder = [];
let score = 0;

//0 - verde
//1 - vermelho
//2 - amarelo
//3 - azul

const blue = document.querySelector('.blue');
const red   = document.querySelector('.red');
const green = document.querySelector('.green');
const yellow = document.querySelector('yellow');

//Cria ordem aleatoria de cores
let shuffleOrder = () => {
    let colorOrder = Math.floor(Math.random() * 4);
    order[order.length] = colorOrder;
    clickedOrder = [];

     for(let  i in order) {
         let elementColor = creatColorElement(order[i]);
         ligthColor(elementColor, Number(i) + 1);
     }
}

//Acende a próxima cor
let  lightColor = (element, number) => {
    number = number * 500;
    setTimeout(() =>  {
        element.classList.add('selected');
    }, number - 250);
    setTimeout(() => {
        element.classList.remove('selected');
    });
}

//Checa se os botões clicados são os mesmo da ordem gerada no jogo
let checkOrder = () => {
    for (let i in  clickedOrder) {
        if(clickedOrder[i] != order[i]) {
            gameOver();
            break;
        }
    }
    if(clickedOrder.length == order.length) {
        alert('Pontuação: ${score}\nVocê acertou ! Iniciando próximo nível');
        nextLevel();
    }
}

//Função para o click do usuario
let  click = (color) => {
    checkOrder[checkOrder.length] = color;
    creatColorElement(color).classList.add('selected');

    setTimeout(() => {
        creatColorElement(color).classList.remove('selected');
        checkOrder();
    },250);

}

//Função que retorna a cor
let creatColorElement = (color) => {
    if(color == 0) {
        return green;
    } else if(color == 1) {
        return red;
    } else if(color == 2) {
        return yellow;
    } else if(color == 3) {
        return blue;
    }
}

// Função para  próximo nivel do jogo
let nextLevel = () => {
    score++;
    shuffleOrder();
}
//Função para game over
let gameOver = () => {
    alert('Pontuação: ${score} !\nVocê perdeu o jogo!\nClick em ok para inciar um novo jogo'); 
    order = [];
    clickedOrder = [];

    playGame();
}

//Função de inicio do jogo
let playGame = () => {
    alert('Bem vindo ao Genesis! Iniciando novo jogo!');
    score = 0;

    nextLevel();
}

//Eventos de click para as cores
green.onClick = () => click(0);
red.onClick = () => click(1);
yellow.onClick = () =>click(2);
blue.onClick = () => click(3);

//Inicio do jogo
playGame();

