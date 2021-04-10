let pageSlider = new Swiper('.main_slider', {
    slideClass: "body_bg",
    wrapperClass: "wrapper_slider",

    direction: 'vertical',

    sliderPerView: 'auto',

    keyboard: {

        enabled: true,

        onlyInViewport: true,

        pageUpDown: true,
    },

    mousewheel: {

        sensitivity: 1,
    },

    pagination: {
        el: '.pagination',
        type: "bullets",
        clickable: true,
        bulletClass: "bullet",
        bulletActiveClass: "bulletActive",
    },

    observer: true,
    observeParents: true,
    observeSlideChildren: true,

    scrollbar: {
        el: ".scroll",
        dragClass: "drag_scroll",
        draggable: true,
    },

    speed: 900,

    hashNavigation: {
        watchState: true,
    },

});
