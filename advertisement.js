document.addEventListener("DOMContentLoaded", function () {
    fetch("https://dummyjson.com/products/category/groceries") // Obtiene productos de comida
        .then(response => response.json())
        .then(data => {
            if (data.products && data.products.length > 0) {
                const filteredProducts = data.products.filter((_, index) => index !== 3).slice(0, 5);
                displayAds(filteredProducts);

            } else {
                document.getElementById("ad-container").innerHTML = "<p>No food-related products found.</p>";
            }
        })
        .catch(error => {
            console.error("Error fetching ads:", error);
            document.getElementById("ad-container").innerHTML = "<p>Failed to load ads.</p>";
        });
});

function displayAds(products) {
    const adContainer = document.getElementById("ad-container");
    adContainer.innerHTML = ""; // Limpia contenido anterior

    products.forEach((product, index) => {
        const isActive = index === 0 ? "active" : ""; // Solo el primero es activo
        const adItem = `
            <div class="carousel-item ${isActive}">
                <img class="d-block w-100" src="${product.thumbnail}" alt="${product.title}">
                <div class="carousel-caption">
                    <h5>${product.title}</h5>
                    <p>${product.description}</p>
                    <p><strong>Price: $${product.price}</strong></p>
                    <a href="#" class="btn btn-warning">Buy</a>
                </div>
            </div>
        `;
        adContainer.innerHTML += adItem;
    });

    // Forzar la inicialización del carrusel después de agregar los anuncios
    new bootstrap.Carousel(document.querySelector("#carouselExampleControls"));

    //Activa el carrusel de Bootstrap manualmente
    new bootstrap.Carousel(document.getElementById("carouselExampleControls"), {
        interval: 3000, // Cambia de anuncio cada 3 segundos
        ride: "carousel"
    });
}



