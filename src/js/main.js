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

const projects = document.querySelector('.projects');
if (projects) {
    projects.addEventListener('click', (e) => {
        let el = e.target;
        if (el.classList.contains("page__btn")) {
            let code = el.parentElement.dataset.code;
            setCookie('data-code', code);
        }
    });
}
function getCookie(name) {
    let matches = document.cookie.match(new RegExp(
        "(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"
    ));
    return matches ? decodeURIComponent(matches[1]) : undefined;
}

function setCookie(name, value, options = {}) {

    options = {
        path: '/',
        // при необходимости добавьте другие значения по умолчанию
        ...options
    };

    if (options.expires instanceof Date) {
        options.expires = options.expires.toUTCString();
    }

    let updatedCookie = encodeURIComponent(name) + "=" + encodeURIComponent(value);

    for (let optionKey in options) {
        updatedCookie += "; " + optionKey;
        let optionValue = options[optionKey];
        if (optionValue !== true) {
            updatedCookie += "=" + optionValue;
        }
    }

    document.cookie = updatedCookie;
}



deleteCookie('user');
function deleteCookie(name) {
    setCookie(name, "", {
        'max-age': -1
    })
}