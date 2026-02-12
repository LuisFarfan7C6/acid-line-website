/*-- DOM ELEMENTS --*/
const modalListen = document.querySelector('#modal-listen');
const iframe = document.querySelector('#hypedditFrame');
const btnOpenListen = document.querySelector('#btn-listen');
const btnCloseListen = document.querySelector('#btn-close-modal');


/*--EVENT LISTENERS --*/
btnOpenListen.addEventListener('click', openModal);

btnCloseListen.addEventListener('click', closeModal);

document.addEventListener('keydown', (e) => {
    if(e.key === "Escape" && modalListen.classList.contains('active')){
        closeModal();
    }
});

modalListen.addEventListener('click', (e) => {
    if(e.target === modalListen){
        closeModal();
    }
});


/*-- FUNCTIONS --*/
function openModal(){
    if(!iframe.src){
        iframe.src = "https://hypeddit.com/sbl5rn";
    }
    modalListen.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeModal(){
    if (iframe)
        iframe.src = iframe.src;
    modalListen.classList.remove('active');

    if (window.lastFocusedElement)
        window.lastFocusedElement.focus();
}
