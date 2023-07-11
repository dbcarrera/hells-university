// Gathers all the buttons that are meant to open modals.
const openButton = document.querySelector("[data-open-modal]");
const closeButton = document.querySelector("[data-close-modal]");
const modal = document.querySelector("[data-modal]");

// Whenever user clicks on the Read More button, it opens the modal.
openButton.addEventListener("click", () => {
    modal.showModal();
    modal.style.opacity = "1"
    modal.style.transform = "translateY(0%)"
});

// Closes modal.
closeButton.addEventListener("click", () => {
    modal.close();
    modal.style.opacity = "0"
    modal.style.transform = "translateY(25%)"
});

// Whenever user clicks off the modal it will close it.
modal.addEventListener("click", e => {
    const dialogDimensions = modal.getBoundingClientRect()
    if (
        e.clientX < dialogDimensions.left ||
        e.clientX > dialogDimensions.right ||
        e.clientY < dialogDimensions.top ||
        e.clientY > dialogDimensions.bottom
    ) {
        modal.close();
        modal.style.opacity = "0"
        modal.style.transform = "translateY(25%)"
    };
});