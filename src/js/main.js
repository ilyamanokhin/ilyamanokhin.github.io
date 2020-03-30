let btnCreate = document.querySelector('.js__create-modal');
let modal = document.querySelector('.modal');
let btnClose = document.querySelector('.page__btn_close');
btnCreate.addEventListener("click", ()=>{
    modal.classList.remove('page_hidden')
});
btnClose.addEventListener("click", ()=>{
    modal.classList.add('page_hidden')
});