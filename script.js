
let slideIndex = 0;
function showSlides() {
    let slides = document.getElementsByClassName("slide");
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.length) {slideIndex = 1}
    slides[slideIndex-1].style.display = "block";
    setTimeout(showSlides, 3000);
}
showSlides();

document.getElementById("locationBtn").onclick = function() {
    document.getElementById("locationPopup").style.display = "block";
};
document.querySelector(".close").onclick = function() {
    document.getElementById("locationPopup").style.display = "none";
};
document.getElementById("reservationBtn").onclick = function() {
    window.location.href = "https://docs.google.com/forms";
};