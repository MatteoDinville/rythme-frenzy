let tab = []
let Score = 0 
let seconds = 60
let timer
const score = document.getElementById("score")
function gameloop () {
    if (Math.floor(Math.random()* 200) == 2) {
      createElement()
    }
    score.innerHTML = `Score : ${Score}`
    requestAnimationFrame(gameloop)
}

const bouton = document.querySelector('#start')
bouton.addEventListener('click', () => {
    clickTimer()
    requestAnimationFrame(gameloop)
    })

const time =  document.querySelector('#time')
function clickTimer() {
    timer = window.setInterval(function() {
        if (seconds >0 ) {
            seconds--;
            time.innerHTML = `Time : ${seconds}`
  
        }else {
            alert("Le temps est écoulé...")
        }
    }, 1000);
}

window.addEventListener('keydown', (key) => {
const dimensions = tab[0].getBoundingClientRect()
    if (key.key == "s" && tab[0].classList.contains("colonne1")) {
        if (dimensions.top >= 500) {
            tab[0].remove();
            tab.shift();
            Score++;
            new Audio('../music/son1.mp3').play();
        }
    }
    if (key.key == "d" && tab[0].classList.contains("colonne2")) {
        if (dimensions.top >= 500) {
            tab[0].remove();
            tab.shift();
            Score++;
            new Audio('../music/son2.mp3').play();
        }
    }
    if (key.key == "k" && tab[0].classList.contains("colonne3")) {
        if (dimensions.top >= 500) {
            tab[0].remove();
            tab.shift();
            Score++;
            new Audio('../music/son3.mp3').play();
        }
    }
    if (key.key == "l" && tab[0].classList.contains("colonne4")) {
        if (dimensions.top >= 500) {
            tab[0].remove();
            tab.shift();
            Score++;
            new Audio('../music/son4.mp3').play();
        }
    }
    // console.log(dimensions)
})

function createElement () {
    let newdiv = document.createElement("div");
    newdiv.classList.add("element")
    newdiv.classList.add("colonne" + String(Math.floor(Math.random() * (4 - 1 + 1)) + 1))
    document.querySelector('#game').append(newdiv);
    tab.push(newdiv)
}  