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



function remove(el) {
    let element = el
    let endzone = document.getElementById('endzone');
    let position = endzone.getBoundingClientRect();

 
    if (element.style.top >= "232px" && element.style.top <= "450px"){
        el.remove();
        newTile();
    }
      
}

 var element = document.getElementsByClassName('element')[0];
 element.setAttribute("style", 
                      "background: blue; position: absolute; width: 50px; height: 100px; top: 50px;");


function step(timestamp) {
  let rect = document.querySelectorAll('element')
  if (!start || progress > 600) start = timestamp;
  progress = (timestamp - start) / 10 + 50;
  element.style.top = progress + 'px';

  for(let i = 0; i < elements.length; i++){
    elements[i].style.top = progress - i *30 + 'px';
  }

  
  var x = null;
  var y = null;

document.addEventListener('mousemove', onMouseUpdate, false);
document.addEventListener('mouseenter', onMouseUpdate, false);

function onMouseUpdate(e) {
  x = e.pageX;
  y = e.pageY;
 
}

function getMouseX() {
  return x;
}

function getMouseY() {
  return y;
}
tempx=getMouseX()
tempy=getMouseY()

  let positionrectangle = progress; 
  if (positionrectangle >= 300) {
      if (positionrectangle <= 420) {

      }

           }

  stopId = window.requestAnimationFrame(step);
}

function newTile () {

  var newDiv = document.createElement("div");

  newDiv.className = "element";

  newDiv.setAttribute("onclick", "remove(this)");



  var endZone = document.getElementById('endzone');
  document.body.insertBefore(newDiv, endZone);

 
    const random_limit = Math.floor(Math.random() * 95) + 1;
  
    newDiv.setAttribute("style", 
    "background: blue; position: absolute; width: 50px; height: 100px; top: 50px; left:"+ random_limit+ "%");
}


function toggleAnimation() {
  if (!toggle) {
    toggle = true;
    window.requestAnimationFrame(step);

    document.getElementById('music').play();
  } else {
    toggle = false;
    cancelAnimationFrame(stopId);

    document.getElementById('music').pause();
  }
}