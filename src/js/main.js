function $(element) {
    if (element) {
        document.querySelector(element);
    } else {
        return false;
    }

}

const body = document.querySelector('body');
const modal = document.querySelector('.modal');
const btnCreate = document.querySelector('.js__create-modal');
const btnClose = document.querySelector('.page__btn_close');
const projectPage = '/project-page/project-page.html';

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

const projects = document.querySelector('.projects');
if (projects) {
    projects.addEventListener('click', (e) => {
        let el = e.target;
        if (el.classList.contains("page__btn")) {
            let code = el.parentElement.dataset.code;
            window.open(`${window.location.origin}${projectPage}#${code}`, '_self');
        }
    });
}