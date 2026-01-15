const btnListen = document.querySelector('#btn-listen');
const modalCerrar = document.querySelectorAll('.modal-close-btn');
const modalListen = document.querySelector('#modal-listen');
const iframe = document.querySelector('#hypedditFrame');

function openModal(){
    if(!iframe.src){
        iframe.src = "https://hypeddit.com/sbl5rn";
    }
    modalListen.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeModal(){
    modalListen.classList.remove('active');
    document.body.style.overflow = 'auto';
}

btnListen.addEventListener('click', openModal);