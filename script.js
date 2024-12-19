document.addEventListener("DOMContentLoaded", () => {
    const boxes = document.querySelectorAll(".clickable");
    const winningBox = "box2"; // Randomize this for more fun!

    boxes.forEach(box => {
        box.addEventListener("click", () => {
            if (box.id === winningBox) {
                alert("You found the treasure!");
            } else {
                alert("Try again!");
            }
        });
    });
});