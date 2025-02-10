document.getElementById("yesButton").addEventListener("click", function() {
    document.getElementById("responseMessage").innerText = "❤️ Can't wait to have the time of our lives with you! My LOVE";
});

document.getElementById("noButton").addEventListener("mouseover", function() {
    let randomX = Math.floor(Math.random() * (window.innerWidth - 100));
    let randomY = Math.floor(Math.random() * (window.innerHeight - 100));
    this.style.left = `${randomX}px`;
    this.style.top = `${randomY}px`;
});
