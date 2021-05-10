let start;
let stopId;
let progress;
let toggle = false;

atStart();

var elements = document.getElementsByClassName('element');


function atStart(){

  for(let i = 0; i < 10; i++){
    newTile();
  }

}


//sert a detruire l element
function remove(el) {
    let element = el
    let endzone = document.getElementById('endzone');
    let position = endzone.getBoundingClientRect();

    // correspond au top et au bot de la endzone 
    if (element.style.top >= "232px" && element.style.top <= "450px"){
        el.remove();
        newTile();
    }
   // console.log (position)


      // rajout d'un element
    //  window.requestAnimationFrame(step);
      
}


// 
// for(let i = 0; i < elements.length; i++){
//   const random_limit = Math.floor(Math.random() * 95) + 1;

//   elements[i].setAttribute("style", 
//   "background: blue; position: absolute; width: 50px; height: 100px; top: 50px; left:"+ random_limit+ "%");
// }


//correspond au rectangle bleu
 const element = document.getElementsByClassName('element')[0];
//  element.setAttribute("style", 
//                       "background: blue; position: absolute; width: 50px; height: 100px; top: 50px;");
//pour que le rectangle puisse bouger de haute en bas

function step(timestamp) {
  let rect = document.querySelectorAll('element')
  if (!start || progress > 600) start = timestamp;
  progress = (timestamp - start) / 10 + 50;
  element.style.top = progress + 'px';

  for(let i = 0; i < elements.length; i++){
    elements[i].style.top = progress - i *30 + 'px';
  }

  // récuperer la position de la souris
  const x = null;
  const y = null;

document.addEventListener('mousemove', onMouseUpdate, false);
document.addEventListener('mouseenter', onMouseUpdate, false);

function onMouseUpdate(e) {
  x = e.pageX;
  y = e.pageY;
 // console.log(x, y);
}

function getMouseX() {
  return x;
}

function getMouseY() {
  return y;
}
tempx=getMouseX()
tempy=getMouseY()
//console.log("mousex=",tempx,"mousey",tempy)
  let positionrectangle = progress; 
  if (positionrectangle >= 300) {
      if (positionrectangle <= 420) {
        //console.log("positionrectangle=", positionrectangle, "sourisx=", tempx)
      }

           }

  stopId = window.requestAnimationFrame(step);
}

function newTile () {
  // crée un nouvel élément div
  var newDiv = document.createElement("div");
  // ajout de la classe element
  newDiv.className = "element";

  // ajout du onclick
  newDiv.setAttribute("onclick", "remove(this)");


  // ajoute le nouvel élément créé et son contenu dans le DOM
  var endZone = document.getElementById('endzone');
  document.body.insertBefore(newDiv, endZone);

  // permet de récupérer un nombre entre 1 et 95 
    const random_limit = Math.floor(Math.random() * 95) + 1;
  
    // random_limit est utilisé pour mettre left en % et non px. le % correspond à la taille de
    // l'écran de l'utilisateur (ça évite par exemple que la tuile aille hors des limites de la barre endzone )
    newDiv.setAttribute("style", 
    "background: blue; position: absolute; width: 50px; height: 100px; top: 50px; border-radius:30%; left:"+ random_limit+ "%");
}

//c est pour start et stop l element
function toggleAnimation() {
  if (!toggle) {
    toggle = true;
    window.requestAnimationFrame(step);
    // musique on
    document.getElementById('music').play();
  } else {
    toggle = false;
    cancelAnimationFrame(stopId);
        // musique off
    document.getElementById('music').pause();
  }
}