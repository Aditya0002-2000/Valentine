document.getElementById("yesButton").addEventListener("click", function() {
    document.getElementById("responseMessage").innerText = "Yay! ❤️ Can't wait to spend Valentine's Day with you!";
});

document.getElementById("noButton").addEventListener("mouseover", function() {
    let noButton = this;
    let maxX = window.innerWidth - noButton.offsetWidth - 50;
    let maxY = window.innerHeight - noButton.offsetHeight - 50;

    let randomX = Math.floor(Math.random() * maxX);
    let randomY = Math.floor(Math.random() * maxY);

    noButton.style.position = "absolute";
    noButton.style.left = `${randomX}px`;
    noButton.style.top = `${randomY}px`;
});
