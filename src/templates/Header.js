export const Header = (title, subtitle, src, className, alt) => {
    // variable to store the value of the image src array
    let image;
    // check if image source was passed to function
    if(src !== null) {
        image = `<img class="${className}-header__image"
                        loading=eager
                        src="${src}"
                        srcset="${src[0]} 480w,
                                ${src[2]} 750w,
                                ${src[2]} 1000w"
                        alt="${alt}"
                    >`;
    } else {
        image = ''
    }
    // transform string to dom node
    const template = document.createRange().createContextualFragment(`
    <header class="${className}-header__container">
        <div class="${className}-header__content">
            <div class="${className}-header__title-container">
                <h1 class="${className}-header__title">${title}</h1>
                <p class="${className}-header__subtitle">${subtitle}</p>
            </div>
            ${image}
        </div>
    </header>
    `);
    
    return template
}