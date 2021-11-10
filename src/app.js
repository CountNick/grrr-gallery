import './scss/app.scss'
import  { API } from './helpers/api.js'
import { Card } from './templates/card.js'


const app = async () => {
    // get pictures from the pexels api
    const pictures = await API.getPictures()
    const loader = document.querySelector('.loader')
    console.log(pictures.photos)
    // select the grid container
    const pictureGrid = document.querySelector('.card-grid__container')
    // loop through pictures array
    pictures.photos.forEach(picture => {
        // select sources to be used in template
        const picturesSources = [picture.src.medium, picture.src.large, picture.src.large2x]
        // render a card template for each picture and append it to the grid
        pictureGrid.appendChild(Card(picturesSources, `Picture by ${picture.photographer}`, picture.photographer))
    })
    // remove the loader when cards are rendered
    loader.remove()
}

// init 
app()
