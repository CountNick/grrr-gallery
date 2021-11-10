export const Header = (title, subtitle, src, alt) => {
    // transform string to dom node
    const template = document.createRange().createContextualFragment(`
    <header class="header__container">
        <div class="header__content">
            <div class="header__title-container">
                <h1 class="header__title">${title}</h1>
                <p class="header__subtitle">${subtitle}</p>
            </div>
            <img class="header__image"
                loading=eager
                src="${src}"
                srcset="${src[0]} 480w,
                    ${src[1]} 750w,
                    ${src[2]} 1000w"
                alt="${alt}"
            >
        </div>
    </header>
    `);
    
    return template
}