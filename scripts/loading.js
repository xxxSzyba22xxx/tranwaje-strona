document.addEventListener('DOMContentLoaded', function() {
    function updateLoader() {
        var main = document.querySelector(".main");
        var loading = document.querySelector(".loader-container");

        if (!main || !loading) {
            console.error("Failed to retrieve one or both elements.");
            return;
        }

        setTimeout(() => {
            main.style.display = "block"; // Pokaż główną treść
            loading.style.display = "none"; // Usuń loader
        }, 3000);
    }

    updateLoader();
});
