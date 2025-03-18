export const showModal = () => {
    const productList = document.querySelector(".product-list");
    const modal = document.createElement("div");
    modal.classList.add("modal");
    productList.appendChild(modal);
};
