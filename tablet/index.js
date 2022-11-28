let scrollValue = 0;
section1 = document.querySelector(".section1").offsetTop;
console.log(section1);

window.addEventListener("scroll", () => {
    scrollValue =
        ((window.scrollY + window.innerHeight) / document.body.offsetHeight) *
        100;
    console.log(window.scrollY);
    if (scrollValue > 55) {
        Element.scrollTo(500, 500);
    }
});
