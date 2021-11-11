import './scss/app.scss'
import  { API } from './helpers/api.js'
import { Card } from './templates/Card.js'
import { Modal } from './templates/Modal.js'
import { Header } from './templates/Header.js'


const app = async () => {
    // get pictures from the pexels api
    const pictures = await API.getPictures()
    // selects the main element
    const main = document.querySelector('.main__container')
    // selects the loading element
    const loader = document.querySelector('.loader')
    // select the grid container
    const pictureGrid = document.querySelector('.card-grid__container')
    // select the first picture
    const headerImg = [pictures.photos[9].src.large, pictures.photos[9].src.original, pictures.photos[9].src.large2x]
    // render the header
    main.insertBefore(Header(
        'The art of skateboarding',
        'I think everybody has a passion they think the rest of the world is missing out on. For me this passion is skateboarding. When I skate the only thing going through my mind is having fun and not to think about things that stress me out. This image gallery is a loveletter to skateboarding.',
        headerImg
    ), pictureGrid)
    console.log(pictures.photos)
    // loop through pictures array
    pictures.photos.forEach(picture => {
        // select sources to be used in template
        const picturesSources = [picture.src.medium, picture.src.large, picture.src.large2x]
        // render a card template for each picture and append it to the grid
        pictureGrid.appendChild(Card(picturesSources, `Picture by ${picture.photographer}`, picture.photographer, picture.id))
    })
    // remove the loader when cards are rendered
    loader.remove()
    // select all cards
    const allCards = document.querySelectorAll('.card__container')
    // add click event to each card
    allCards.forEach(card => card.addEventListener('click', (e) => {
        // find the clicked picture in pictures array based on id
        const clickedPictue = pictures.photos.find(picture => e.target.id == picture.id)
        // render the popup modal with picture to the body of the document
        document.body.appendChild(Modal(clickedPictue.src.original, `Picture by ${clickedPictue.photographer}`))
        // select the close button of the modal
        const modalCloseButton = document.querySelector('.modal__close-btn')

        modalCloseButton.addEventListener('click', (e) => e.target.parentNode.parentNode.remove())
    }))
}

// init 
app()
