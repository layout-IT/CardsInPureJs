import { showModal } from "./Modal";
import { store } from "../store/store";
import { getImageUrlByScreenSize } from "../helpers/utils";

export function renderProducts(products) {
    const productList = document.querySelector(".product-list");
    productList.innerHTML = "";

    if (products.length) {
        products.forEach(({ name, price, rating, category, image: { desktop, tablet, mobile } }) => {
            const image = getImageUrlByScreenSize(desktop, tablet, mobile);

            const card = document.createElement("div");
            card.classList.add("card");
            card.innerHTML = `
                <img data-src="${image}" alt="${name}" class="lazy-load" loading="lazy">
                <h2>${name}</h2>
                <p>Price: ${price}₽</p>
                <p>Rating: ${rating}</p>
                <p>Category: ${category}</p>
            `;
            productList.appendChild(card);
        });

        lazyLoadImages();
    } else {
        showModal();
    }
}

function lazyLoadImages() {
    const images = document.querySelectorAll('img.lazy-load');

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const image = entry.target;
                image.src = image.dataset.src;
                image.classList.remove("lazy-load");
                observer.unobserve(image);
            }
        });
    }, {
        rootMargin: "100px",
    });

    images.forEach(image => {
        observer.observe(image);
    });
}
export function resetFilters() {
    document.querySelector(".filters__select--category").value = "default";
    document.querySelector(".filters__select--sort").value = "default";
    renderProducts(store.products);
}

export function resetRangePrice() {
    document.querySelector(".filters__input--min-price").value = "";
    document.querySelector(".filters__input--max-price").value = "";
}

export function renderCategories(categories) {

    const containerorFilters = document.querySelector(".filters__select-container");
    const categoryFilter = document.querySelector(".filters__select--category");

    categories.forEach((category) => {
        const option = document.createElement("option");
        option.textContent = category;
        option.value = category; 
        categoryFilter.appendChild(option);
    });

    containerorFilters.appendChild(categoryFilter);
}
