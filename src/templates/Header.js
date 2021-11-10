export const Header = (title, src, alt) => {
    // transform string to dom node
    const template = document.createRange().createContextualFragment(`
    <header class="modal__container">
        <div class="header__content">
            <h1 class="header__title">${title}</h1>
            <p class="header__subtitle">${subtitle}</p>
            <img class="header__image"
                loading=eager
                src="${src}"
                alt="${alt}"
            >
        </div>
    </header>
    `);
    
    return template
}