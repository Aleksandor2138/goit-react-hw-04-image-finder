import axios from 'axios';

const BASE_URL = 'https://pixabay.com/api/';
const API_KEY = '29610901-b3c9d79f36e45579ed5e9f9a6';

export default class SearchAPI {
    constructor() {
        this.name = '';
        this.page = 1;
        this.total = 0;
        this.images = [];
    }
    async serverData() {
        const serverDataURL = `${BASE_URL}?key=${API_KEY}&q=${this.name}&image_type=photo&orientation=horizontal&safesearch=true&page=${this.page}&per_page=12`;
        try {
            const server = await axios.get(serverDataURL);
            const data = await server.data;
            this.total = await data.totalHits;
            return data;
        } catch (error) {}
    }
}


// async componentDidUpdate(prevProps, prevState) {
//     if (
//       prevState.request !== this.state.request ||
//       prevState.page !== this.state.page
//     ) {
//       try {
//         const response = await axios.get(
//           `?q=${this.state.request}&page=${this.state.page}&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=12`
//         );
//         this.setState({
//           images: this.state.images.concat(response.data.hits),
//           isLoadind: false,
//         });
//         // Notiflix.Notify.success(`Hooray! We found ${response.data.hits.length} images.`);
//       } catch (e) {
//         console.log(e);
//       }
//     }
//   }