function updateList() {
    const titles = [...document.querySelectorAll('section')].sort((a, b) => {
        return Math.abs(a.getBoundingClientRect().top) - Math.abs(b.getBoundingClientRect().top);
    });

    document.querySelectorAll(".selected").forEach(c => c.classList.remove("selected"));

    document.querySelectorAll(".circle")[[...document.querySelectorAll('section')].indexOf(titles[0])].classList.add("selected");
}

updateList();
window.addEventListener('scroll', () => {
    updateList();
})

