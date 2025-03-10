console.log("JavaScript Loaded!"); // Check if JS is working

document.addEventListener("DOMContentLoaded", function () {
    let text = "Welcome to GlobalXpose!";
    let index = 0;
    let speed = 100; // Typing speed in milliseconds

    function typeEffect() {
        if (index < text.length) {
            document.getElementById("typing-text").innerHTML += text.charAt(index);
            index++;
            setTimeout(typeEffect, speed);
        }
    }

    typeEffect(); // Start typing
});
