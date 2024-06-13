import axios from 'axios';

const KEY = 'AIzaSyD7fcNzla4w6dyHejHaZoc9yPHL_m64i_I';

const youtube = axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        maxResults: 10,
        key: KEY
    }
});

export default youtube;