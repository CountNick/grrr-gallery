export const Modal = (src, alt) => {
    // transform string to dom node
    const template = document.createRange().createContextualFragment(`
    <div class="modal__container">
        <span>close</span>
        <img class="modal__image"
            src="${src}
            alt="${alt}">
    </div>
    `);
    
    return template
}