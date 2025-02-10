document.addEventListener("DOMContentLoaded", function () {
    const yesButton = document.getElementById("yesButton");
    const noButton = document.getElementById("noButton");
    const responseMessage = document.getElementById("responseMessage");

    // Click event for "Yes" button (adds animation & message)
    yesButton.addEventListener("click", function () {
        responseMessage.innerText = "I know we couldn’t be together on Valentine’s Day, but that just means our own special celebration is waiting for us! ❤️ I can’t wait to see you and make up for all the hugs, smiles, and moments we missed. Get ready for something special because every day with you feels like Valentine’s Day. See you soon! 💕";
        
        responseMessage.style.opacity = "1";  // Make message appear smoothly
        
        // Cute heart animation
        let heart = document.createElement("div");
        heart.innerHTML = "❤️";
        heart.classList.add("floating-heart");
        document.body.appendChild(heart);

        let randomX = Math.random() * window.innerWidth;
        heart.style.left = `${randomX}px`;

        setTimeout(() => {
            heart.remove();
        }, 3000); // Remove after 3 seconds
    });

    // "No" button hover event (moves randomly but stays on screen)
    noButton.addEventListener("mouseover", function () {
        let maxX = window.innerWidth - noButton.clientWidth - 20;
        let maxY = window.innerHeight - noButton.clientHeight - 20;

        let randomX = Math.max(10, Math.floor(Math.random() * maxX));
        let randomY = Math.max(10, Math.floor(Math.random() * maxY));

        noButton.style.position = "absolute";
        noButton.style.left = `${randomX}px`;
        noButton.style.top = `${randomY}px`;
    });
});
