const scrollbar = document.getElementById("scrollbar");

function updateScrollbar() {
    const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrolled = (winScroll / height) * 100;

    scrollbar.style.width = scrolled + '%';

    if (scrolled > 99.5) {
        scrollbar.style.borderRadius = "0";
    } else {
        scrollbar.style.borderRadius = "5rem";
    }
}

window.addEventListener("scroll", updateScrollbar, {passive: true});
updateScrollbar();