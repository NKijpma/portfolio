const sliderContainer = document.getElementById('slider');
const slides = Array.from(sliderContainer.querySelectorAll('.slide'));
const slideCounter = slides.length;
const firstSlide = slides[slideCounter + 1];

const firstClone = slides[0].cloneNode();
firstClone.classList.add('slide-loop');
firstClone.setAttribute('aria-hidden', 'true');
firstClone.removeAttribute('id');

const lastClone = slides[slideCounter - 1].cloneNode();
lastClone.classList.add('slide-loop');
lastClone.setAttribute('aria-hidden', 'true');
lastClone.removeAttribute('id');

sliderContainer.insertBefore(lastClone, slides[0]);
sliderContainer.appendChild(firstClone);

// jumps to start slide
sliderContainer.style.scrollBehavior = 'auto';
sliderContainer.scrollLeft = sliderContainer.clientWidth;
sliderContainer.style.scrollBehavior = 'smooth';

// looping
sliderContainer.addEventListener('scrollend', () => {
    const index = Math.round(sliderContainer.scrollLeft / sliderContainer.clientWidth);
    if (index >= slideCounter + 1) {
        sliderContainer.style.scrollBehavior = 'auto';
        sliderContainer.scrollLeft = sliderContainer.clientWidth;
        sliderContainer.style.scrollBehavior = 'smooth';
    } else if (index <= 0) {
        sliderContainer.style.scrollBehavior = 'auto';
        sliderContainer.scrollLeft = sliderContainer.clientWidth * slideCounter;
        sliderContainer.style.scrollBehavior = 'smooth';
    }
});
