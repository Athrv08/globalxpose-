// Toggle Menu
function toggleMenu() {
    var menu = document.getElementById("menu");
    menu.style.display = menu.style.display === "block" ? "none" : "block";
}

// Countdown Timer
function updateCountdown() {
    const targetDate = new Date("June 14, 2026 00:00:00").getTime();
    const now = new Date().getTime();
    const difference = targetDate - now;

    const days = Math.floor(difference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((difference % (1000 * 60)) / 1000);

    document.getElementById("days").innerText = days;
    document.getElementById("hours").innerText = hours;
    document.getElementById("minutes").innerText = minutes;
    document.getElementById("seconds").innerText = seconds;
}
setInterval(updateCountdown, 1000);
updateCountdown();

// Typewriter Effect
const text = "GlobalXpose is Coming Soon";
let index = 0;
function typeEffect() {
    if (index < text.length) {
        document.getElementById("typewriter").innerHTML += text.charAt(index);
        index++;
        setTimeout(typeEffect, 100);
    }
}
typeEffect();

// Contact Form (Send Data to Gmail)
document.getElementById("contact-form").addEventListener("submit", function (event) {
    event.preventDefault();
    alert("Message Sent! We will get back to you soon.");
});

<script>
  alert("JS is working!");
</script>
