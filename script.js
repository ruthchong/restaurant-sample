
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

document.getElementById("menuBtn").addEventListener("click", function() {
    document.getElementById("menuPanel").classList.toggle("show");
});

document.addEventListener("DOMContentLoaded", function() {
    let slideIndex = 0;
    const slides = document.querySelectorAll(".slide");
    
    function showSlides() {
        // 隐藏所有幻灯片
        slides.forEach(slide => {
            slide.style.opacity = "0";
        });

        // 显示当前幻灯片
        slides[slideIndex].style.opacity = "1";

        // 更新索引，循环播放
        slideIndex = (slideIndex + 1) % slides.length;
        setTimeout(showSlides, 3000); // 3秒切换一次
    }

    showSlides();
});