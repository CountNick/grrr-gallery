import './scss/app.scss'
import  { API } from './helpers/api.js'
import { Card } from './templates/card.js'


const app = async () => {
    // get pictures from the pexels api
    const pictures = await API.getPictures()
    console.log(pictures.photos)
    // render card for each picture and append to body
    const pictureGrid = document.querySelector('.card-grid__container')
    pictures.photos.forEach(picture => {
       pictureGrid.appendChild(Card(picture.src.medium, `Picture by ${picture.photographer}`, picture.photographer))
    })
}

// init 
app()
