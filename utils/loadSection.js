// Created by AI
function loadSection(sectionId, filePath) {
    fetch(filePath)
        .then(response => {
            if (!response.ok) {
                throw new Error(`downloads error ${filePath}: ${response.statusText}`);
            }
            return response.text();
        })
        .then(html => {
            document.getElementById(sectionId).innerHTML = html;
        })
        .catch(error => console.error(error));
}
//sections from the file about-us.html
loadSection("about-us-section", "/about-us/section/about-us-section.html");
loadSection("experience-section", "/about-us/section/experience-section.html");
loadSection("goals-section", "/about-us/section/goals-section.html");
loadSection("topic-section", "/about-us/section/topic-section.html");
loadSection("footer", "/footers/footer.html");
//sections from the file index.html 
loadSection("hero", "/index-section/hero.html");
loadSection("latest-posts", "/index-section/latest-posts.html");
loadSection("topics-posts", "/index-section/topics-posts.html");
loadSection("main-footer", "/footers/main-footer.html");