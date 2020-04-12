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
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlcyI6WyJzdG9yZS1zY3JvbGwuanMiXSwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgZGVib3VuY2UgPSAoZm4pID0+IHtcbiAgICBsZXQgZnJhbWU7XG4gICAgcmV0dXJuICguLi5wYXJhbXMpID0+IHtcblxuICAgICAgICBpZiAoZnJhbWUpIHtcbiAgICAgICAgICAgIGNhbmNlbEFuaW1hdGlvbkZyYW1lKGZyYW1lKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGZyYW1lID0gcmVxdWVzdEFuaW1hdGlvbkZyYW1lKCgpID0+IHtcbiAgICAgICAgICAgIGZuKC4uLnBhcmFtcyk7XG4gICAgICAgIH0pO1xuICAgIH1cbn07XG5cbmNvbnN0IHN0b3JlU2Nyb2xsID0gKCkgPT4ge1xuICAgIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5kYXRhc2V0LnNjcm9sbCA9IHdpbmRvdy5zY3JvbGxZO1xufVxuXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdzY3JvbGwnLCBkZWJvdW5jZShzdG9yZVNjcm9sbCksIHsgcGFzc2l2ZTogdHJ1ZSB9KTtcblxuc3RvcmVTY3JvbGwoKTsiXSwiZmlsZSI6InN0b3JlLXNjcm9sbC5qcyJ9
