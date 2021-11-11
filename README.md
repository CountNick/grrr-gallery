# Skateboarding responsive image gallery

### [Checkout live demo](https://skateboarding-gallery.netlify.app)

## Build features
- Responsive design
- Show images from pexels API
- Show picture in modal
- Headers
- Loading state

### Time constraints

Due to time constrants I wasn't able to fix these things: 
 - The heights of the grid rows to be set to the height of it's content.
 - Image reflow
 - Show the amount of images shown
 - Load more images from the API

## Technologies used

- Parcel JS
    - I chose to use parcel for build tooling because the time limit. Parcel works relatively well right out of the box without any major configuration.
- Sass
- [Pexels API](https://www.pexels.com/nl-nl/api/)
    - Open source API for images, I chose to use this to show I'm able to get data and represent this with vanilla js.

## Naming conventions
I chose to use features of the BEM naming conventions for classnames

## Installation

 [Checkout live demo](https://skateboarding-gallery.netlify.app)

 or

1. clone the repo:

        git clone git@github.com:CountNick/grrr-gallery.git

2. cd into grrr-gallery

        cd grrr-gallery

3. Install dependepncies

        npm install

4. Make a .env file in the project root, and add your own Pewels api key:

        API_KEY=YOUR-API-Key

5. For developers:

        npm run dev

6. Want to make a build?

        npm run build

    This will build everything into the dist folder, you can open the staically generated site from the dist folder now by opening the index.html file