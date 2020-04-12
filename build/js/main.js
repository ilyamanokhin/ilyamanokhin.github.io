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
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlcyI6WyJtYWluLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImZ1bmN0aW9uICQoZWxlbWVudCkge1xuICAgIGlmIChlbGVtZW50KSB7XG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoZWxlbWVudCk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxufVxuXG5jb25zdCBib2R5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignYm9keScpO1xuY29uc3QgbW9kYWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubW9kYWwnKTtcbmNvbnN0IGJ0bkNyZWF0ZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5qc19fY3JlYXRlLW1vZGFsJyk7XG5jb25zdCBidG5DbG9zZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wYWdlX19idG5fY2xvc2UnKTtcbmNvbnN0IHByb2plY3RQYWdlID0gJy9wcm9qZWN0LXBhZ2UvcHJvamVjdC1wYWdlLmh0bWwnO1xuXG5mdW5jdGlvbiB0b2dnbGVNb2RhbCgpIHtcbiAgICBtb2RhbC5jbGFzc0xpc3QudG9nZ2xlKCdwYWdlX2hpZGRlbicpO1xuICAgIGJvZHkuY2xhc3NMaXN0LnRvZ2dsZSgncGFnZV9vdmVyZmxvdy1oaWRkZW4nKTtcbn1cbmlmIChidG5DcmVhdGUpIHtcbiAgICBidG5DcmVhdGUuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgICAgdG9nZ2xlTW9kYWwoKTtcbiAgICB9KTtcbn1cbmlmIChidG5DbG9zZSkge1xuICAgIGJ0bkNsb3NlLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICAgIHRvZ2dsZU1vZGFsKCk7XG4gICAgfSk7XG59XG5cbmNvbnN0IHByb2plY3RzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByb2plY3RzJyk7XG5pZiAocHJvamVjdHMpIHtcbiAgICBwcm9qZWN0cy5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgICAgIGxldCBlbCA9IGUudGFyZ2V0O1xuICAgICAgICBpZiAoZWwuY2xhc3NMaXN0LmNvbnRhaW5zKFwicGFnZV9fYnRuXCIpKSB7XG4gICAgICAgICAgICBsZXQgY29kZSA9IGVsLnBhcmVudEVsZW1lbnQuZGF0YXNldC5jb2RlO1xuICAgICAgICAgICAgd2luZG93Lm9wZW4oYCR7d2luZG93LmxvY2F0aW9uLm9yaWdpbn0ke3Byb2plY3RQYWdlfSMke2NvZGV9YCwgJ19zZWxmJyk7XG4gICAgICAgIH1cbiAgICB9KTtcbn0iXSwiZmlsZSI6Im1haW4uanMifQ==
