const slides = document.querySelectorAll(".slide");
let currentIndex = 0;

function showSlide(index) {
    slides.forEach((slide, i) => {
        if (i === index) {
            slide.style.display = "block";
        } else {
            slide.style.display = "none";
        }
    });
}

showSlide(currentIndex);

document.getElementById("anterior").addEventListener("click", () => {
    if (currentIndex > 0) {
        currentIndex--;
        showSlide(currentIndex);
    }
});

document.getElementById("siguiente").addEventListener("click", () => {
    if (currentIndex < slides.length - 1) {
        currentIndex++;
        showSlide(currentIndex);
    }
});
