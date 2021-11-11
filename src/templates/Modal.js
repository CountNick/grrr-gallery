export const Modal = (src, alt) => {
    // transform string to dom node
    const template = document.createRange().createContextualFragment(`
    <div class="modal__container">
        <div class="modal__content">
            <span class="modal__close-btn">X</span>
            <img class="modal__image"
                src="${src}"
                alt="${alt}"
            >
        </div>
    </div>
    `);
    
    return template
}