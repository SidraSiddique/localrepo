// random code
function displayWelcomeMessage() {
    const message = "Welcome to Creative Mind - Data Science Project!";
    console.log(message);
    document.getElementById("welcome").innerText = message;
}
function changeBackgroundColor(color) {
    document.body.style.backgroundColor = color;
}
function toggleSectionVisibility(sectionId) {
    const section = document.getElementById(sectionId);
    if (section.style.display === "none") {
        section.style.display = "block";
    } else {
        section.style.display = "none";
    }
}
document.getElementById("toggleButton").addEventListener("click", function() {
    toggleSectionVisibility("contentSection");
});
document.getElementById("colorButton").addEventListener("click", function() {
    const color = prompt("Enter a color to change the background:");
    changeBackgroundColor(color);
});
window.onload = displayWelcomeMessage;
