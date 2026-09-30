const sliderContainer = document.getElementById('slider');
const slideCounter = document.querySelectorAll('.slide').length;

// looping left
sliderContainer.addEventListener('scrollend', () => {
    const index = Math.round(sliderContainer.scrollLeft / sliderContainer.clientWidth);
    if (index >= slideCounter) {
        sliderContainer.style.scrollBehavior = 'auto';
        sliderContainer.scrollLeft = 0;
        sliderContainer.style.scrollBehavior = 'smooth';
        sliderContainer.classList.remove('dragging');
    }
});

//
// // draggable
// let pressed = false;
// let startX;
// let scrollStart;
//
// sliderContainer.addEventListener('mousedown', (e) => {
//     pressed = true;
//     startX = e.pageX;
//     scrollStart = sliderContainer.scrollLeft;
//     sliderContainer.classList.add('dragging');
//     sliderContainer.style.scrollBehavior = 'auto';
// });
//
// sliderContainer.addEventListener('mouseup', () => {
//     pressed = false;
//     sliderContainer.classList.remove('dragging');
//     sliderContainer.style.scrollBehavior = 'smooth';
// });
//
// sliderContainer.addEventListener('mouseleave', () => {
//     pressed = false;
//     sliderContainer.classList.remove('dragging');
// });
//
// sliderContainer.addEventListener('mousemove', (e) => {
//     if (!pressed) return;
//     e.preventDefault();
//     const X = e.pageX - startX;
//     sliderContainer.scrollLeft = scrollStart - X;
// });
