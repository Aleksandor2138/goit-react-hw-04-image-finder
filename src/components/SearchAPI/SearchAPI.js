import axios from 'axios';

const BASE_URL = 'https://pixabay.com/api/';
const API_KEY = '29610901-b3c9d79f36e45579ed5e9f9a6';

export default class SearchAPI {
    constructor() {
        this.name = '';
        this.page = 1;
        this.perPage = 12;
        this.total = 0;
    }
    async serverData() {
        const serverDataURL = `${BASE_URL}?key=${API_KEY}&q=${this.name}&image_type=photo&orientation=horizontal&safesearch=true&page=${this.page}&per_page=${this.perPage}`;
        try {
            const server = await axios.get(serverDataURL);
            const data = await server.data;
            this.total = await data.totalHits;
            return data;
        } catch (error) {}
    }
};