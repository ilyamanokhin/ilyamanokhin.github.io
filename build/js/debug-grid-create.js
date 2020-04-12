function divCreating(param) {
    var debugGrid = document.querySelector(param);
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
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlcyI6WyJkZWJ1Zy1ncmlkLWNyZWF0ZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJmdW5jdGlvbiBkaXZDcmVhdGluZyhwYXJhbSkge1xuICAgIHZhciBkZWJ1Z0dyaWQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHBhcmFtKTtcbiAgICBsZXQgZGl2Q3JlYXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgZGVidWdHcmlkLmFwcGVuZENoaWxkKGRpdkNyZWF0ZSk7XG5cbiAgICBsZXQgcGFyYW1zID0gJy5kZWJ1Z0dyaWQgZGl2JztcbiAgICBsZXQgZGVidWdHcmlkRGl2QWxsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChwYXJhbXMpO1xuICAgIGlmIChkZWJ1Z0dyaWREaXZBbGwubGVuZ3RoIDw9IDEpIHtcbiAgICAgICAgZGl2Q3JlYXRpbmcocGFyYW1zKTtcbiAgICB9XG5cbiAgICBpZiAoZGVidWdHcmlkRGl2QWxsLmxlbmd0aCA+PSAyICYmIGRlYnVnR3JpZERpdkFsbC5sZW5ndGggPD0gMTMpIHtcbiAgICAgICAgbGV0IHBhcmFtcyA9ICcuZGVidWdHcmlkIGRpdiBkaXYnO1xuICAgICAgICBsZXQgZGVidWdHcmlkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChwYXJhbXMpO1xuICAgICAgICBpZiAoZGVidWdHcmlkLmxlbmd0aCA8PSAxMikge1xuICAgICAgICAgICAgZGl2Q3JlYXRpbmcocGFyYW1zKTtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuZnVuY3Rpb24gZGVidWdHcmlkQ3JlYXRlKCkge1xuICAgIGxldCBkZWJ1Z0dyaWQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZGVidWdHcmlkJyk7XG4gICAgbGV0IGRlYnVnR3JpZEJ0bkNyZWF0ZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5kZWJ1Z0dyaWQtYnRuX19jcmVhdGUnKTtcbiAgICBsZXQgZGVidWdHcmlkQnRuUmVtb3ZlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmRlYnVnR3JpZC1idG5fX3JlbW92ZScpO1xuICAgIGRlYnVnR3JpZEJ0bkNyZWF0ZS5jbGFzc0xpc3QuYWRkKFwiZGVidWdHcmlkLWJ0bl9faGlkZGVuXCIpO1xuICAgIGRlYnVnR3JpZEJ0blJlbW92ZS5jbGFzc0xpc3QucmVtb3ZlKFwiZGVidWdHcmlkLWJ0bl9faGlkZGVuXCIpO1xuICAgIGRlYnVnR3JpZC5jbGFzc0xpc3QucmVtb3ZlKFwiZGVidWdHcmlkX196LWluZGV4LW5lZ2F0aXZlXCIpO1xuICAgIGRpdkNyZWF0aW5nKCcuZGVidWdHcmlkJyk7XG59XG5cbmZ1bmN0aW9uIGRlYnVnR3JpZFJlbW92ZSgpIHtcbiAgICBsZXQgZGVidWdHcmlkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmRlYnVnR3JpZCcpO1xuICAgIGxldCBkZWJ1Z0dyaWRCdG5DcmVhdGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZGVidWdHcmlkLWJ0bl9fY3JlYXRlJyk7XG4gICAgbGV0IGRlYnVnR3JpZEJ0blJlbW92ZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5kZWJ1Z0dyaWQtYnRuX19yZW1vdmUnKTtcbiAgICBkZWJ1Z0dyaWRCdG5DcmVhdGUuY2xhc3NMaXN0LnJlbW92ZShcImRlYnVnR3JpZC1idG5fX2hpZGRlblwiKTtcbiAgICBkZWJ1Z0dyaWRCdG5SZW1vdmUuY2xhc3NMaXN0LmFkZChcImRlYnVnR3JpZC1idG5fX2hpZGRlblwiKTtcbiAgICBkZWJ1Z0dyaWQuY2xhc3NMaXN0LmFkZChcImRlYnVnR3JpZF9fei1pbmRleC1uZWdhdGl2ZVwiKTtcbiAgICBkZWJ1Z0dyaWQuaW5uZXJIVE1MID0gJyc7XG59Il0sImZpbGUiOiJkZWJ1Zy1ncmlkLWNyZWF0ZS5qcyJ9
