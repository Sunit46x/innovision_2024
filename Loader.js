document.addEventListener("DOMContentLoaded", () => {
    function hideLoader() {
        const loader = document.getElementById("loader-container");
        loader.style.display = "none";
    }

    function showContent() {
        const content = document.getElementById("main-container");
        content.style.display = "block";
    }

    setTimeout(() => {
        hideLoader();
        showContent();
    }, 2500);
});