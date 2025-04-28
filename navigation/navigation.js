// Created by Ai
document.addEventListener('DOMContentLoaded', function () {
    const isMainPage = window.location.pathname === '/' || window.location.pathname === 'index.html';
    const navigation = `
    <header>
        <nav>
            <div class="image">
                <img src="${isMainPage ? 'images' : '../images'}/logo.JPG" alt="DarkSyntax Logo" width="50" height="50"> 
                <!-- <span>DarkSyntax</span> --> 
                <span>X-bitRow</span>
            </div>
            <ul class="nav-links">
                <li>
                    <a id="home" href="${isMainPage ? '#Home' : '../index.html#Home'}"></a>
                </li>
                <li>
                    <a id="about-us" href="${isMainPage ? '/about-us/about-us.html' : '../about-us/about-us.html'}"></a>
                </li>
            <!--    <li>
                    <a id="contact" href="${isMainPage ? '#Contact' : '../index.html#Contact'}"></a>
                </li>  -->
                <li>
                    <button id="theme-toggle" class="theme-toggle">
                        <i class="fas fa-sun"></i>
                        <i class="fas fa-moon"></i>
                    </button>
                </li>
                <li>
                    <div class="lang-menu">
                        <div class="selected-lang">
                            <i class="fa-solid fa-language"></i>
                        </div>
                        <ul>
                            <li>
                                <a href="#" class="en">en</a>
                            </li>
                             <li>
                                <a href="#" class="ru">ru</a>
                            </li>
                        </ul>
                    </div>
                </li>
            </ul>
        </nav>
    </header>
    `;
    document.body.insertAdjacentHTML('afterbegin', navigation);
    function initTheme() {
        const savedTheme = localStorage.getItem('theme') || 'dark';
        document.documentElement.setAttribute('data-theme', savedTheme);
    }
    function toggleTheme() {
        const currentTheme = document.documentElement.getAttribute('data-theme'); const newTheme = currentTheme === 'light' ? 'dark' : 'light';
        document.documentElement.setAttribute('data-theme', newTheme);
        localStorage.setItem('theme', newTheme);
    }
    initTheme();
    const themeToggle = document.getElementById('theme-toggle');
    themeToggle.addEventListener('click', () => {
        toggleTheme();
    });
    window.addEventListener('storage', (e) => {
        if (e.key === 'theme') {
            initTheme();
        }
    });
    window.addEventListener('message', (e) => {
        if (e.data.type === 'theme-change') {
            initTheme();
        }
    });
}); 