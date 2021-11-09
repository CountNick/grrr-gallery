import './scss/app.scss'
import  { API } from './helpers/api.js'

const app = async () => {
    const pictures = await API.getPictures()

    
}

// init 
app()
