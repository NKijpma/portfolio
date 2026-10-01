const cursor = document.getElementById("cursor");
cursor.classList.add("custom-cursor");
document.documentElement.classList.add('js-cursor');

window.addEventListener("mousedown", (event) => {
    if (!cursor.classList.contains("click")) {
        cursor.classList.add("click");

        setTimeout(() => {
            cursor.classList.remove("click");

        }, 800)
    }
});

window.addEventListener("mousemove", (event) => {
    let x = event.clientX - cursor.offsetWidth / 2;
    let y = event.clientY - cursor.offsetHeight / 2;

    cursor.style.left = `${x}px`;
    cursor.style.top = `${y}px`;

});

document.addEventListener("mouseout", (event) => {
    if (event.relatedTarget !== null) return;
    cursor.classList.remove("enter");
    cursor.classList.add("leave");
});

document.addEventListener("mouseover", (event) => {
    cursor.classList.remove("leave");
    cursor.classList.add("enter");
});