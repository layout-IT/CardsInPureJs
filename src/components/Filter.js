import { store } from "../store/store";
import { getDelay } from "../helpers/apiHelper";
import { renderProducts, resetFilters, resetRangePrice } from "./ProductCard"; 
import { showModal } from "./Modal";

export const Filter = () => {
    document.querySelector(".filters__select--sort").addEventListener("change", async (event) => {
        resetRangePrice();
        const sortType = event.target.value;
        await getDelay();
        const { products, filterdData } = store;
        
        if (sortType === "default") {
            resetFilters();
            return;
        } else if (sortType === "min-price") {
            store.sortedData = [...filterdData].sort((a, b) => a.price - b.price);
        } else if (sortType === "max-price") {
            store.sortedData = [...filterdData].sort((a, b) => b.price - a.price);
        } else if (sortType === "rating") {
            store.sortedData = [...filterdData].sort((a, b) => b.rating - a.rating);
        } else if (sortType === "name") {
            store.sortedData = [...filterdData].sort((a, b) => {
                const nameA = a.name.toLowerCase();
                const nameB = b.name.toLowerCase();
                if (nameA < nameB) return -1;
                if (nameA > nameB) return 1;
                return 0;
            });
        }

        renderProducts(store.sortedData);
    });

    document.querySelector(".filters__select--category").addEventListener("change", async (event) => {
        resetRangePrice();
        const sortType = event.target.value;
        await getDelay();
        const { products } = store;

        if (sortType === "default") {
            resetFilters();
            return;
        }else if (sortType === "Smartphones") {
            store.filterdData = store.sortedData.filter(({category}) => category === "Smartphones");
        }else if (sortType === "Electronics") {
            store.filterdData = store.sortedData.filter(({category}) => category === "Electronics");
        }else if (sortType === "Footwear") {
            store.filterdData = store.sortedData.filter(({category}) => category === "Footwear");
        }else if (sortType === "Laptops") {
            store.filterdData = store.sortedData.filter(({category}) => category === "Laptops");
        }else if (sortType === "Audio") {
            store.filterdData = store.sortedData.filter(({category}) => category === "Audio");
        }else if (sortType === "Wearables") {
            store.filterdData = store.sortedData.filter(({category}) => category === "Wearables");
        }else if (sortType === "Cameras") {
            store.filterdData = store.sortedData.filter(({category}) => category === "Cameras");
        }
        renderProducts(store.filterdData);
})
    document.querySelector(".filters__button").addEventListener("click", async () => {
        try {
            console.log('clo=ick');
            
            resetFilters();
            await getDelay();
            const minPrice = parseFloat(document.querySelector(".filters__input--min-price").value) || 0;
            const maxPrice = parseFloat(document.querySelector(".filters__input--max-price").value) || Infinity;

            store.rangePrice = store.products.filter(product =>
                product.price >= minPrice && product.price <= maxPrice
            );

            minPrice !== 0 ?  renderProducts(store.rangePrice) : showModal()
        } catch (error) {
            console.error("Ошибка загрузки данных:", error);
        }
    });
}