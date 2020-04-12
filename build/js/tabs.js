// Start tabs.js
function tab () {

    'use strict';

    /**
     * tabs
     *
     * @description The Tabs component.
     * @param {Object} options The options hash
     */
    var tabs = function (options) {

        var el = document.querySelector(options.el);
        if(el) {
            var tabNavigationLinks = el.querySelectorAll(options.tabNavigationLinks);
            var tabContentContainers = el.querySelectorAll(options.tabContentContainers);
            var activeIndex = 0;
            var initCalled = false;
       
        /**
         * init
         *
         * @description Initializes the component by removing the no-js class from
         *   the component, and attaching event listeners to each of the nav items.
         *   Returns nothing.
         */
        var init = function () {
            if (!initCalled) {
                initCalled = true;
                el.classList.remove('no-js');

                for (var i = 0; i < tabNavigationLinks.length; i++) {
                    var link = tabNavigationLinks[i];
                    handleClick(link, i);
                }
            }
        };

        /**
         * handleClick
         *
         * @description Handles click event listeners on each of the links in the
         *   tab navigation. Returns nothing.
         * @param {HTMLElement} link The link to listen for events on
         * @param {Number} index The index of that link
         */
        var handleClick = function (link, index) {
            link.addEventListener('click', function (e) {
                e.preventDefault();
                goToTab(index);
            });
        };

        /**
         * goToTab
         *
         * @description Goes to a specific tab based on index. Returns nothing.
         * @param {Number} index The index of the tab to go to
         */
        var goToTab = function (index) {
            if (index !== activeIndex && index >= 0 && index <= tabNavigationLinks.length) {
                tabNavigationLinks[activeIndex].classList.remove('is-active');
                tabNavigationLinks[index].classList.add('is-active');
                tabContentContainers[activeIndex] ? tabContentContainers[activeIndex].classList.remove('is-active') : undefined;
                tabContentContainers[index] ? tabContentContainers[index].classList.add('is-active') : undefined;
                activeIndex = index;
            }
        };

        /**
         * Returns init and goToTab
         */
        return {
            init: init,
            goToTab: goToTab
        };
    }
    };

    /**
     * Attach to global namespace
     */
    window.tabs = tabs;

};
// End tabs.js


// Initialise at bottom of HTML in a <script> tag or within your main js bundle somewhere.

// Set 1 


// Set 2
// var myTabs2 = tabs({
//     el: '#tabs2',
//     tabNavigationLinks: '.tab-link',
//     tabContentContainers: '.tab-content'
// });

// Initialise Set 1
setTimeout(()=>{
    tab();
    var myTabs = tabs({
        el: '#tabs',
        tabNavigationLinks: '.tab-link',
        tabContentContainers: '.tab-content'
    });
    if(myTabs){
        myTabs.init();
    }
 },1000);

// // Initialise Set 2 
// myTabs2.init();
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlcyI6WyJ0YWJzLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIFN0YXJ0IHRhYnMuanNcbmZ1bmN0aW9uIHRhYiAoKSB7XG5cbiAgICAndXNlIHN0cmljdCc7XG5cbiAgICAvKipcbiAgICAgKiB0YWJzXG4gICAgICpcbiAgICAgKiBAZGVzY3JpcHRpb24gVGhlIFRhYnMgY29tcG9uZW50LlxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBvcHRpb25zIFRoZSBvcHRpb25zIGhhc2hcbiAgICAgKi9cbiAgICB2YXIgdGFicyA9IGZ1bmN0aW9uIChvcHRpb25zKSB7XG5cbiAgICAgICAgdmFyIGVsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihvcHRpb25zLmVsKTtcbiAgICAgICAgaWYoZWwpIHtcbiAgICAgICAgICAgIHZhciB0YWJOYXZpZ2F0aW9uTGlua3MgPSBlbC5xdWVyeVNlbGVjdG9yQWxsKG9wdGlvbnMudGFiTmF2aWdhdGlvbkxpbmtzKTtcbiAgICAgICAgICAgIHZhciB0YWJDb250ZW50Q29udGFpbmVycyA9IGVsLnF1ZXJ5U2VsZWN0b3JBbGwob3B0aW9ucy50YWJDb250ZW50Q29udGFpbmVycyk7XG4gICAgICAgICAgICB2YXIgYWN0aXZlSW5kZXggPSAwO1xuICAgICAgICAgICAgdmFyIGluaXRDYWxsZWQgPSBmYWxzZTtcbiAgICAgICBcbiAgICAgICAgLyoqXG4gICAgICAgICAqIGluaXRcbiAgICAgICAgICpcbiAgICAgICAgICogQGRlc2NyaXB0aW9uIEluaXRpYWxpemVzIHRoZSBjb21wb25lbnQgYnkgcmVtb3ZpbmcgdGhlIG5vLWpzIGNsYXNzIGZyb21cbiAgICAgICAgICogICB0aGUgY29tcG9uZW50LCBhbmQgYXR0YWNoaW5nIGV2ZW50IGxpc3RlbmVycyB0byBlYWNoIG9mIHRoZSBuYXYgaXRlbXMuXG4gICAgICAgICAqICAgUmV0dXJucyBub3RoaW5nLlxuICAgICAgICAgKi9cbiAgICAgICAgdmFyIGluaXQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBpZiAoIWluaXRDYWxsZWQpIHtcbiAgICAgICAgICAgICAgICBpbml0Q2FsbGVkID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICBlbC5jbGFzc0xpc3QucmVtb3ZlKCduby1qcycpO1xuXG4gICAgICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0YWJOYXZpZ2F0aW9uTGlua3MubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIGxpbmsgPSB0YWJOYXZpZ2F0aW9uTGlua3NbaV07XG4gICAgICAgICAgICAgICAgICAgIGhhbmRsZUNsaWNrKGxpbmssIGkpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcblxuICAgICAgICAvKipcbiAgICAgICAgICogaGFuZGxlQ2xpY2tcbiAgICAgICAgICpcbiAgICAgICAgICogQGRlc2NyaXB0aW9uIEhhbmRsZXMgY2xpY2sgZXZlbnQgbGlzdGVuZXJzIG9uIGVhY2ggb2YgdGhlIGxpbmtzIGluIHRoZVxuICAgICAgICAgKiAgIHRhYiBuYXZpZ2F0aW9uLiBSZXR1cm5zIG5vdGhpbmcuXG4gICAgICAgICAqIEBwYXJhbSB7SFRNTEVsZW1lbnR9IGxpbmsgVGhlIGxpbmsgdG8gbGlzdGVuIGZvciBldmVudHMgb25cbiAgICAgICAgICogQHBhcmFtIHtOdW1iZXJ9IGluZGV4IFRoZSBpbmRleCBvZiB0aGF0IGxpbmtcbiAgICAgICAgICovXG4gICAgICAgIHZhciBoYW5kbGVDbGljayA9IGZ1bmN0aW9uIChsaW5rLCBpbmRleCkge1xuICAgICAgICAgICAgbGluay5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uIChlKSB7XG4gICAgICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgICAgIGdvVG9UYWIoaW5kZXgpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH07XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIGdvVG9UYWJcbiAgICAgICAgICpcbiAgICAgICAgICogQGRlc2NyaXB0aW9uIEdvZXMgdG8gYSBzcGVjaWZpYyB0YWIgYmFzZWQgb24gaW5kZXguIFJldHVybnMgbm90aGluZy5cbiAgICAgICAgICogQHBhcmFtIHtOdW1iZXJ9IGluZGV4IFRoZSBpbmRleCBvZiB0aGUgdGFiIHRvIGdvIHRvXG4gICAgICAgICAqL1xuICAgICAgICB2YXIgZ29Ub1RhYiA9IGZ1bmN0aW9uIChpbmRleCkge1xuICAgICAgICAgICAgaWYgKGluZGV4ICE9PSBhY3RpdmVJbmRleCAmJiBpbmRleCA+PSAwICYmIGluZGV4IDw9IHRhYk5hdmlnYXRpb25MaW5rcy5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICB0YWJOYXZpZ2F0aW9uTGlua3NbYWN0aXZlSW5kZXhdLmNsYXNzTGlzdC5yZW1vdmUoJ2lzLWFjdGl2ZScpO1xuICAgICAgICAgICAgICAgIHRhYk5hdmlnYXRpb25MaW5rc1tpbmRleF0uY2xhc3NMaXN0LmFkZCgnaXMtYWN0aXZlJyk7XG4gICAgICAgICAgICAgICAgdGFiQ29udGVudENvbnRhaW5lcnNbYWN0aXZlSW5kZXhdID8gdGFiQ29udGVudENvbnRhaW5lcnNbYWN0aXZlSW5kZXhdLmNsYXNzTGlzdC5yZW1vdmUoJ2lzLWFjdGl2ZScpIDogdW5kZWZpbmVkO1xuICAgICAgICAgICAgICAgIHRhYkNvbnRlbnRDb250YWluZXJzW2luZGV4XSA/IHRhYkNvbnRlbnRDb250YWluZXJzW2luZGV4XS5jbGFzc0xpc3QuYWRkKCdpcy1hY3RpdmUnKSA6IHVuZGVmaW5lZDtcbiAgICAgICAgICAgICAgICBhY3RpdmVJbmRleCA9IGluZGV4O1xuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBSZXR1cm5zIGluaXQgYW5kIGdvVG9UYWJcbiAgICAgICAgICovXG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBpbml0OiBpbml0LFxuICAgICAgICAgICAgZ29Ub1RhYjogZ29Ub1RhYlxuICAgICAgICB9O1xuICAgIH1cbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogQXR0YWNoIHRvIGdsb2JhbCBuYW1lc3BhY2VcbiAgICAgKi9cbiAgICB3aW5kb3cudGFicyA9IHRhYnM7XG5cbn07XG4vLyBFbmQgdGFicy5qc1xuXG5cbi8vIEluaXRpYWxpc2UgYXQgYm90dG9tIG9mIEhUTUwgaW4gYSA8c2NyaXB0PiB0YWcgb3Igd2l0aGluIHlvdXIgbWFpbiBqcyBidW5kbGUgc29tZXdoZXJlLlxuXG4vLyBTZXQgMSBcblxuXG4vLyBTZXQgMlxuLy8gdmFyIG15VGFiczIgPSB0YWJzKHtcbi8vICAgICBlbDogJyN0YWJzMicsXG4vLyAgICAgdGFiTmF2aWdhdGlvbkxpbmtzOiAnLnRhYi1saW5rJyxcbi8vICAgICB0YWJDb250ZW50Q29udGFpbmVyczogJy50YWItY29udGVudCdcbi8vIH0pO1xuXG4vLyBJbml0aWFsaXNlIFNldCAxXG5zZXRUaW1lb3V0KCgpPT57XG4gICAgdGFiKCk7XG4gICAgdmFyIG15VGFicyA9IHRhYnMoe1xuICAgICAgICBlbDogJyN0YWJzJyxcbiAgICAgICAgdGFiTmF2aWdhdGlvbkxpbmtzOiAnLnRhYi1saW5rJyxcbiAgICAgICAgdGFiQ29udGVudENvbnRhaW5lcnM6ICcudGFiLWNvbnRlbnQnXG4gICAgfSk7XG4gICAgaWYobXlUYWJzKXtcbiAgICAgICAgbXlUYWJzLmluaXQoKTtcbiAgICB9XG4gfSwxMDAwKTtcblxuLy8gLy8gSW5pdGlhbGlzZSBTZXQgMiBcbi8vIG15VGFiczIuaW5pdCgpOyJdLCJmaWxlIjoidGFicy5qcyJ9
