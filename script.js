document.addEventListener("DOMContentLoaded", function () {
    const yesButton = document.getElementById("yesButton");
    const noButton = document.getElementById("noButton");
    const responseMessage = document.getElementById("responseMessage");

    // Click event for "Yes" button
    yesButton.addEventListener("click", function () {
        responseMessage.innerText = "I know we couldn’t be together on Valentine’s Day, but that just means our own special celebration is waiting for us! ❤️ I can’t wait to see you and make up for all the hugs, smiles, and moments we missed. Get ready for something special because every day with you feels like Valentine’s Day. See you soon! 💕";
    });

    // Hover event for "No" button (moves randomly but stays within the screen)
    noButton.addEventListener("mouseover", function () {
        let maxX = window.innerWidth - noButton.clientWidth - 20; // Keep within width
        let maxY = window.innerHeight - noButton.clientHeight - 20; // Keep within height

        let randomX = Math.max(10, Math.floor(Math.random() * maxX));
        let randomY = Math.max(10, Math.floor(Math.random() * maxY));

        noButton.style.position = "absolute";
        noButton.style.left = `${randomX}px`;
        noButton.style.top = `${randomY}px`;
    });
});
