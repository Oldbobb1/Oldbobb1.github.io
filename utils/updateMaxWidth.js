// Created by AI
function updateMaxWidth() {
    const typingText = document.querySelector('.typing-text');
    if (typingText) {
        let textContent = typingText.textContent.trim();
        let textLength = textContent.length;
        let duration = textLength * 0.1;
        let animationSteps = `steps(${textLength}, end)`;
        typingText.style.setProperty('--text-length', `${textLength}ch`);
        typingText.style.animation = `typing ${duration}s ${animationSteps} forwards, blink-caret 0.6s step-end infinite`;
    }
}