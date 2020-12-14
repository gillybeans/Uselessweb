let theFish = document.querySelector("#fish");
let container = document.querySelector("#contentContainer");
 
container.addEventListener("click", getClickPosition, false);
 
function getClickPosition(e) {
    let parentPosition = getPosition(e.currentTarget);
    let xPosition = e.clientX - parentPosition.x - (theFish.clientWidth / 2);
    let yPosition = e.clientY - parentPosition.y - (theFish.clientHeight / 2);
     
    theFish.style.left = xPosition + "px";
    theFish.style.top = yPosition + "px";
}
 
// function to get the element's exact position
function getPosition(el) {
  let xPos = 0;
  let yPos = 0;
 
  while (el) {
    if (el.tagName == "BODY") {
      // browser quirks with body/window/document and page scroll
      let xScroll = el.scrollLeft || document.documentElement.scrollLeft;
      let yScroll = el.scrollTop || document.documentElement.scrollTop;
 
      xPos += (el.offsetLeft - xScroll + el.clientLeft);
      yPos += (el.offsetTop - yScroll + el.clientTop);
    } else {
      // for all other non-BODY elements
      xPos += (el.offsetLeft - el.scrollLeft + el.clientLeft);
      yPos += (el.offsetTop - el.scrollTop + el.clientTop);
    }
 
    el = el.offsetParent;
  }
  return {
    x: xPos,
    y: yPos
  };
}



/****** ZOOM ZOOM ********/
function zoom(event) {
    event.preventDefault();
  
    scale += event.deltaY * -0.01;
  
    // Restrict scale
    scale = Math.min(Math.max(.125, scale), 4);
  
    // Apply scale transform
    el.style.transform = `scale(${scale})`;
  }
  
  let scale = 1;
  const el = document.querySelector("#fish");
  el.onwheel = zoom;




