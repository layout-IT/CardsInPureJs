import { store } from "./store/store";
import { renderCategories, renderProducts } from "./components/ProductCard";
import { getData } from "./helpers/apiHelper";
import "./reset-styles.css"
import "./index.css"
import { Filter } from "./components/Filter";

(async () => {
    const response = await getData();
    const {products, categories} = response
    Object.assign(store, {
        products: [...products],
        categories: [...categories],
        sortedData: [...products],
        filterdData: [...products],
        rangePrice: [...products]
    });
    renderCategories(categories);
    renderProducts(products);
    Filter()
})();
