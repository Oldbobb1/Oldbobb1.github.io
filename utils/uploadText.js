// Created by AI
function updateAboutText(text) {
    const maxLength = 53;
    let truncatedText = text;
    if (text.length > maxLength) {
        truncatedText = text.substring(0, maxLength) + '...';
    }
    document.getElementById('about-us-text').textContent = truncatedText;
}
window.onload = function () {
    const aboutText = document.getElementById('.about-us-text').textContent
    updateAboutText(aboutText);
};
document.getElementById('about-us-text').addEventListener('DOMSubtreeModified', function () {
    const updatedText = document.getElementById('about-us-text').textContent;
    updateAboutText(updatedText);
});