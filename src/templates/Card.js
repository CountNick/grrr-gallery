export const Card = (src, alt, photographer, id) => {
    // transform string to dom node
    const template = document.createRange().createContextualFragment(`
    <section class="card__container" id="${id}">
        <div class="card__image-overlay" id="${id}">
            <img class="card__image" id="${id}"
                src="${src[0]}"
                loading=lazy
                srcset="${src[0]} 480w,
                        ${src[1]} 750w,
                        ${src[2]} 1000w"
                alt="${alt}">
        </div>
        <p class="card__caption" id="${id}">This photo was made by ${photographer}</p>
        <a class="card__download-btn" target="_blank" id=${id}" href="${src[2]}" download>Download</a>
    </section>
    `);
    
    return template
}