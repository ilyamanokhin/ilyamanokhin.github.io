const body = document.querySelector('body');
const modal = document.querySelector('.modal');
const btnCreate = document.querySelector('.js__create-modal');
const btnClose = document.querySelector('.page__btn_close');


function toggleModal() {
    modal.classList.toggle('page_hidden');
    body.classList.toggle('page_overflow-hidden');
}
if (btnCreate) {
    btnCreate.addEventListener("click", () => {
        toggleModal();
    });
}
if (btnClose) {
    btnClose.addEventListener("click", () => {
        toggleModal();
    });
}

const debounce = (fn) => {
    let frame;
    return (...params) => {

        if (frame) {
            cancelAnimationFrame(frame);
        }

        frame = requestAnimationFrame(() => {
            fn(...params);
        });
    }
};

const storeScroll = () => {
    document.documentElement.dataset.scroll = window.scrollY;
}

document.addEventListener('scroll', debounce(storeScroll), { passive: true });

storeScroll();