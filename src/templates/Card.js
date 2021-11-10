export const Card = (src, alt, photographer) => {
    // transform string to dom node
    const template = document.createRange().createContextualFragment(`
    <section class="card__container">
        <img class="card__image"
            src="${src[0]}"
            loading=lazy
            srcset="${src[0]} 480w,
                    ${src[1]} 750w,
                    ${src[2]} 1000w"
            alt="${alt}">
        <p class="card__caption">This photo was made by ${photographer}</p>
        <a class="card__download-btn" href="${src[2]}" download>Download</a>
    </section>
    `);
    
    return template
}