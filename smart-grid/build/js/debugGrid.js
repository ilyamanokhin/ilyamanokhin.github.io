function divCreating(param) {
    let debugGrid = document.querySelector(param);
    let divCreate = document.createElement('div');
    debugGrid.appendChild(divCreate);

    let params = '.debugGrid div';
    let debugGridDivAll = document.querySelectorAll(params);
    if (debugGridDivAll.length <= 1) {
        divCreating(params);
    }

    if (debugGridDivAll.length >= 2 && debugGridDivAll.length <= 13) {
        let params = '.debugGrid div div';
        let debugGrid = document.querySelectorAll(params);
        if (debugGrid.length <= 12) {
            divCreating(params);
        }
    }
}

function debugGridCreate() {
    let debugGrid = document.querySelector('.debugGrid');
    let debugGridBtnCreate = document.querySelector('.debugGrid-btn__create');
    let debugGridBtnRemove = document.querySelector('.debugGrid-btn__remove');
    debugGridBtnCreate.classList.add("debugGrid-btn__hidden");
    debugGridBtnRemove.classList.remove("debugGrid-btn__hidden");
    debugGrid.classList.remove("debugGrid__z-index-negative");
    divCreating('.debugGrid');
}

function debugGridRemove() {
    let debugGrid = document.querySelector('.debugGrid');
    let debugGridBtnCreate = document.querySelector('.debugGrid-btn__create');
    let debugGridBtnRemove = document.querySelector('.debugGrid-btn__remove');
    debugGridBtnCreate.classList.remove("debugGrid-btn__hidden");
    debugGridBtnRemove.classList.add("debugGrid-btn__hidden");
    debugGrid.classList.add("debugGrid__z-index-negative");
    debugGrid.innerHTML = '';
}



//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlcyI6WyJkZWJ1Z0dyaWQuanMiXSwic291cmNlc0NvbnRlbnQiOlsiZnVuY3Rpb24gZGl2Q3JlYXRpbmcocGFyYW0pIHtcbiAgICBsZXQgZGVidWdHcmlkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihwYXJhbSk7XG4gICAgbGV0IGRpdkNyZWF0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGRlYnVnR3JpZC5hcHBlbmRDaGlsZChkaXZDcmVhdGUpO1xuXG4gICAgbGV0IHBhcmFtcyA9ICcuZGVidWdHcmlkIGRpdic7XG4gICAgbGV0IGRlYnVnR3JpZERpdkFsbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwocGFyYW1zKTtcbiAgICBpZiAoZGVidWdHcmlkRGl2QWxsLmxlbmd0aCA8PSAxKSB7XG4gICAgICAgIGRpdkNyZWF0aW5nKHBhcmFtcyk7XG4gICAgfVxuXG4gICAgaWYgKGRlYnVnR3JpZERpdkFsbC5sZW5ndGggPj0gMiAmJiBkZWJ1Z0dyaWREaXZBbGwubGVuZ3RoIDw9IDEzKSB7XG4gICAgICAgIGxldCBwYXJhbXMgPSAnLmRlYnVnR3JpZCBkaXYgZGl2JztcbiAgICAgICAgbGV0IGRlYnVnR3JpZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwocGFyYW1zKTtcbiAgICAgICAgaWYgKGRlYnVnR3JpZC5sZW5ndGggPD0gMTIpIHtcbiAgICAgICAgICAgIGRpdkNyZWF0aW5nKHBhcmFtcyk7XG4gICAgICAgIH1cbiAgICB9XG59XG5cbmZ1bmN0aW9uIGRlYnVnR3JpZENyZWF0ZSgpIHtcbiAgICBsZXQgZGVidWdHcmlkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmRlYnVnR3JpZCcpO1xuICAgIGxldCBkZWJ1Z0dyaWRCdG5DcmVhdGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZGVidWdHcmlkLWJ0bl9fY3JlYXRlJyk7XG4gICAgbGV0IGRlYnVnR3JpZEJ0blJlbW92ZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5kZWJ1Z0dyaWQtYnRuX19yZW1vdmUnKTtcbiAgICBkZWJ1Z0dyaWRCdG5DcmVhdGUuY2xhc3NMaXN0LmFkZChcImRlYnVnR3JpZC1idG5fX2hpZGRlblwiKTtcbiAgICBkZWJ1Z0dyaWRCdG5SZW1vdmUuY2xhc3NMaXN0LnJlbW92ZShcImRlYnVnR3JpZC1idG5fX2hpZGRlblwiKTtcbiAgICBkZWJ1Z0dyaWQuY2xhc3NMaXN0LnJlbW92ZShcImRlYnVnR3JpZF9fei1pbmRleC1uZWdhdGl2ZVwiKTtcbiAgICBkaXZDcmVhdGluZygnLmRlYnVnR3JpZCcpO1xufVxuXG5mdW5jdGlvbiBkZWJ1Z0dyaWRSZW1vdmUoKSB7XG4gICAgbGV0IGRlYnVnR3JpZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5kZWJ1Z0dyaWQnKTtcbiAgICBsZXQgZGVidWdHcmlkQnRuQ3JlYXRlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmRlYnVnR3JpZC1idG5fX2NyZWF0ZScpO1xuICAgIGxldCBkZWJ1Z0dyaWRCdG5SZW1vdmUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZGVidWdHcmlkLWJ0bl9fcmVtb3ZlJyk7XG4gICAgZGVidWdHcmlkQnRuQ3JlYXRlLmNsYXNzTGlzdC5yZW1vdmUoXCJkZWJ1Z0dyaWQtYnRuX19oaWRkZW5cIik7XG4gICAgZGVidWdHcmlkQnRuUmVtb3ZlLmNsYXNzTGlzdC5hZGQoXCJkZWJ1Z0dyaWQtYnRuX19oaWRkZW5cIik7XG4gICAgZGVidWdHcmlkLmNsYXNzTGlzdC5hZGQoXCJkZWJ1Z0dyaWRfX3otaW5kZXgtbmVnYXRpdmVcIik7XG4gICAgZGVidWdHcmlkLmlubmVySFRNTCA9ICcnO1xufVxuXG5cbiJdLCJmaWxlIjoiZGVidWdHcmlkLmpzIn0=
