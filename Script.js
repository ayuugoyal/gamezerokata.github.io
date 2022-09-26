
let music = new Audio("music.mp3")
let audioturn = new Audio("ting.mp3")
let gameover = new Audio("gameover.mp3")

let turn = "X";
let gameoverr = false;

const chaneturn = () => {
    return turn === "X" ? "O" : "X"
}

const checkwin = () => {
    let boxtexts = document.getElementsByClassName('boxtext');
    let wins = [
        [0, 1, 2, 0, 3, 0],
        [3, 4, 5, 0, 9, 0],
        [6, 7, 8, 0, 15, 0],
        [0, 3, 6, -6, 9, 90],
        [1, 4, 7, 0, 9, 90],
        [2, 5, 8, 6, 9, 90],
        [0, 4, 8, 0.5, 9.4, 45],
        [2, 4, 6, 0, 9, 135],
    ]
    wins.forEach(e=>{
        if((boxtexts[e[0]].innerText === boxtexts[e[1]].innerText) && (boxtexts[e[2]].innerText === boxtexts[e[1]].innerText) && (boxtexts[e[0]].innerText !== "")){
            document.querySelector('.maininfo').innerText = boxtexts[e[0]].innerText + " JEET GYA";
            gameoverr = true;
            document.querySelector('.image').getElementsByTagName('img')[0].style.width = '200px';
            document.querySelector('.gameline').style.transform = `translate(${e[3]}vw,${e[4]}vw) rotate(${e[5]}deg)`;
            document.querySelector('.gameline').style.display = `flex`;
        }
    })
}

// music.play();
let boxes = document.getElementsByClassName("box");
Array.from(boxes).forEach(element => {
    let boxtext = element.querySelector('.boxtext');
    element.addEventListener('click', () => {
        if (boxtext.innerText === '') {
            boxtext.innerText = turn;
            turn = chaneturn();
            audioturn.play();
            checkwin();
            if(gameoverr==false){
                document.getElementsByClassName("maininfo")[0].innerText = turn + " KI BAARI HAI";
            }
        }
    })
})


reset.addEventListener('click',() => {
    let boxtextss = document.querySelectorAll('.boxtext');
    Array.from(boxtextss).forEach(element => {
        element.innerText = "";
    })
    turn= 'X';
    gameoverr=false
    document.getElementsByClassName("maininfo")[0].innerText = turn + " KI BAARI HAI";
    document.querySelector('.image').getElementsByTagName('img')[0].style.width = '0px';
    document.querySelector('.gameline').style.transform = `translate(0vw, 0vw) rotate(0deg)`;
    document.querySelector('.gameline').style.display = `none`;
})

back.addEventListener('click', ()=>{
    let boxte = document.querySelectorAll('.boxtext');
})

