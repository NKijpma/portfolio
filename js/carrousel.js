const slider = document.getElementById('slider');
const slideCounter = document.querySelectorAll('.slide').length;

slider.addEventListener('scrollend', () => {
    const index = Math.round(slider.scrollLeft / slider.clientWidth);
    if (index >= slideCounter) {
        slider.style.scrollBehavior = 'auto';
        slider.scrollLeft = 0;
        slider.style.scrollBehavior = 'smooth';
    }
});