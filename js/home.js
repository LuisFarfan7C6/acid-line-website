// const instagramContainer = document.querySelector('behold-popover-gallery >div.slide__caption');



// window.addEventListener('DOMContentLoaded', () => {
//     console.log(instagramContainer);
// });

let loaded = false;
const btn = document.querySelector("#bandcamp-toggle");
const btnClose = document.querySelector("#bandcamp-close");

document.addEventListener('DOMContentLoaded', () => {
    btn.addEventListener('click', togglePlayer);
    btnClose.addEventListener('click', togglePlayer);
});

function togglePlayer() {
    const panel = document.querySelector('#bandcamp-panel');    
    const isOpen = panel.classList.toggle('open');

    btn.style.display = isOpen ? 'none' : 'flex';

    if (isOpen && !loaded) {
        const iframe = document.querySelector('#bandcamp-iframe');
        iframe.src = iframe.dataset.src;
        loaded = true;
    }
}


/*-- TERMINAL --*/
const lines = [
  "Acid Line es un proyecto que nace de la fusión creativa entre Josué Valles y Luis Farfán, dos músicos peruanos que tienen el eclecticismo como su estandarte. Formado en 2012, la idea central siempre fue experimentar, tomando influencias de diversos géneros y buscando romper los paradigmas de la industria. En consecuencia, el proyecto ha buscado no ser encasillado en un solo género, sino convertir ese eclecticismo en propuesta musical.",
  "",
  "En 2013 grabaron un demo con influencias de la música psicodélica, el jazz, el rock progresivo, el folk, entre otros. Y este año lanzarán el segundo single de lo que será su primer EP. Este material estará principalmente influenciado por géneros como el trip hop, shoegaze, electrónica y la música cinematográfica, con un concepto emocional y disruptivo cuya temática abordará las conexiones humanas en un futuro distópico."
];
let lineIdx = 0, charIdx = 0;
const el = document.getElementById('typed-text');

function type() {
  if (lineIdx >= lines.length) return;
  const line = lines[lineIdx];
  if (charIdx < line.length) {
    el.textContent += line[charIdx++];
    timeout = setTimeout(type, 38 + Math.random() * 30);
  } else {
    lineIdx++; charIdx = 0;
    // Añade el \n al INICIO de la siguiente línea, no al final de la actual
    if (lineIdx < lines.length) el.textContent += '\n';
    timeout = setTimeout(type, 820);
  }
}

setTimeout(type, 7000); // iniciar al cargar la página