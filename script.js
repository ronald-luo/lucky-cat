// Make the DIV element draggable:
function dragElement(elmnt) {
  var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
  if (document.getElementById(elmnt.id + "header")) {
    // if present, the header is where you move the DIV from:
    document.getElementById(elmnt.id + "header").onmousedown = dragMouseDown;
  } else {
    // otherwise, move the DIV from anywhere inside the DIV:
    elmnt.onmousedown = dragMouseDown;
  }

  function dragMouseDown(e) {
    e = e || window.event;
    e.preventDefault();
    // get the mouse cursor position at startup:
    pos3 = e.clientX;
    pos4 = e.clientY;
    document.onmouseup = closeDragElement;
    // call a function whenever the cursor moves:
    document.onmousemove = elementDrag;
  }

  function elementDrag(e) {
    e = e || window.event;
    e.preventDefault();
    // calculate the new cursor position:
    pos1 = pos3 - e.clientX;
    pos2 = pos4 - e.clientY;
    pos3 = e.clientX;
    pos4 = e.clientY;
    // set the element's new position:
    elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
    elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
  }

  function closeDragElement() {
    // stop moving when mouse button is released:
    document.onmouseup = null;
    document.onmousemove = null;
  }
}

// overlap checker
function doTheyOverlap(el0, el1)
{
    var elY0 = (el0.offsetTop < el1.offsetTop)? el0 : el1;
    var elY1 = (el0 != elY0)? el0 : el1;
    var yInstersection = (elY0.offsetTop + elY0.clientHeight) - elY1.offsetTop > 0;

    var elX0 = (el0.offsetLeft < el1.offsetLeft)? el0 : el1;
    var elX1 = (el0 != elX0)? el0 : el1;
    var xInstersection = (elX0.offsetLeft + elX0.clientWidth) - elX1.offsetLeft > 0;

    return (yInstersection && xInstersection);
}

function meow () {
    success.volume = 0.2
    success.play()
    replace(coin)
}

// function getRandomPosition(element) {
// 	var x = document.body.offsetHeight-element.clientHeight;
// 	var y = document.body.offsetWidth-element.clientWidth;
// 	var randomX = Math.floor(Math.random()*x);
// 	var randomY = Math.floor(Math.random()*y);
// 	return [randomX,randomY];
// }

function replace (obj) {
    obj.remove()
    
// 	var temp = document.createElement('img');
// 	temp.setAttribute("style", "position:absolute; height: 150px");
// 	temp.setAttribute("src", "https://upload.wikimedia.org/wikipedia/en/e/ef/Canadian_Dollar_-_reverse.png");
// 	document.body.appendChild(temp);
//     temp.setAttribute('id', 'temp')
//     dragElement(document.getElementById("temp"))
//     eventAdder(temp)
// 	var xy = getRandomPosition(temp);
// 	temp.style.top = xy[0] + 'px';
// 	temp.style.left = xy[1] + 'px';
}

dragElement(document.getElementById("coin"));

const coin = document.getElementById("coin")
const cat = document.getElementById("cat")
var success = document.getElementById("success")

coin.addEventListener('click', function (e) {
    console.log(e)
    doTheyOverlap(coin,cat) ? meow() : console.log("false")
})