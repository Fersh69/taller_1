// Selecciona los elementos de la lista
const seriesItems = document.querySelectorAll(".series-list li");
const serieImage = document.getElementById("serieImage");

// Cuando se hace clic en una serie
seriesItems.forEach(item => {
    item.addEventListener("click", () => {
        const imgUrl = item.getAttribute("data-img");
        serieImage.src = imgUrl;
        serieImage.style.display = "block";
    });
});
