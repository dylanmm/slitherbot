console.log(snake);
console.log(snake_count);

// ZOOM FUNCTIONALITY
function zoom(e) {
   if (!window.gsc) { return; }
   //if (!options.zoom) { window.gsc = 0.9; return; }
   window.gsc *= Math.pow(0.9, e.wheelDelta / -120 || e.detail / 2 || 0);
   window.gsc > 2 ? window.gsc = 2 : window.gsc < 0.1 ? window.gsc = 0.1 : null;
}

if (/firefox/i.test(navigator.userAgent)) {
   document.addEventListener("DOMMouseScroll", zoom, false);
} else {
   document.body.onmousewheel = zoom;
}

// KEY PRESSES
document.addEventListener("keydown", keydownhandl, false);

function keydownhandl(e) {
   if (e.keyCode==70) {// f key
   // Reset Zoom
      if (!window.gsc) { return; }
      window.gsc = 0.9; // Default zoom level
   }
}
