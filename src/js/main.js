const btnCreate = document.querySelector('.js__create-modal');
const modal = document.querySelector('.modal');
const btnClose = document.querySelector('.page__btn_close');
const body = document.querySelector('body');


btnCreate.addEventListener("click", ()=>{
    modal.classList.remove('page_hidden');
    body.classList.toggle('page_overflow-hidden');
});
btnClose.addEventListener("click", ()=>{
    modal.classList.add('page_hidden');
    body.classList.toggle('page_overflow-hidden');
});