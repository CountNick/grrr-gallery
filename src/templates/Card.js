export const Card = (src, alt, photographer) => {
    // transform string to dom node
    const template = document.createRange().createContextualFragment(`
    <section class="card__container">
        <img class="card__image" src="${src}" alt="${alt}">
        <p class="card__caption">This photo was made by${photographer}</p>
        <a href="${src}" target="_blank" download>Download</a>
    </section>
    `);
    
    return template
}