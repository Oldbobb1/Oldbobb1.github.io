// Created by AI
document.addEventListener('DOMContentLoaded', function () {
    let currentLang = localStorage.getItem('selectedLang') || 'en';
    const langMenu = document.querySelector('.lang-menu');
    const langToggle = document.querySelector('.lang-menu .selected-lang');
    const langLinks = document.querySelectorAll('.lang-menu ul li a');
    function loadTranslations(lang) {
        fetch('/translate/translations.json')
            .then(response => response.json())
            .then(data => {
                if (!data[lang]) return;

                Object.keys(data[lang]).forEach(id => {
                    const element = document.getElementById(id);
                    if (element) {
                        const translatedText = data[lang][id].replace(' — ', ' ');
                        element.textContent = translatedText;
                    }
                });
                updateMaxWidth();
            })
            .catch(error => console.error('Ошибка загрузки переводов:', error));
    }
    function changeLanguage(lang) {
        currentLang = lang;
        localStorage.setItem('selectedLang', lang);
        loadTranslations(lang);
    }
    langLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const newLang = link.classList.contains('ru') ? 'ru' : 'en'; changeLanguage(newLang);
        });
    });
    loadTranslations(currentLang);
    updateMaxWidth();
});