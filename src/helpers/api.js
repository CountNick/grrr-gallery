export const API = {
    getPictures: async () => {
        // get skateboarding pictures from pexels
        const endpoint = `https://api.pexels.com/v1/search?query=skateboarding`;
        // add neccessary authorization with api key
        const config = {
            headers: {
                Authorization: process.env.API_KEY
            }
        };
        // fetch data from pexels
        const res = await fetch(endpoint, config);
        // transform response to json
        const pictures = await res.json();
        // return the json data
        return pictures
    }
};