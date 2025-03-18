export function renderPreloader(isShow) {
    const productList = document.querySelector(".product-list");
    let preloader = document.querySelector(".preloader");
    if (isShow && !preloader) {
        preloader = document.createElement("div");
        preloader.classList.add("preloader");
        productList.appendChild(preloader);
    } else {
        if (preloader) {
            preloader.remove();
        }
    }
}