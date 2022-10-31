import { useState, useEffect } from 'react';
import Notiflix from 'notiflix';
import SearchAPI from './SearchAPI/SearchAPI';
import Searchbar from './Searchbar/Searchbar';
import { ImagesGallery } from './Gallery/ImageGallery';
import { Loader } from './Loader/Loader';
import { LoadMore } from './Button/Button';
import Modal from './Modal/Modal';
// import Top from './Top/Top';

const API = new SearchAPI();

const App = () => {
  const [images, setImages] = useState([]);
  const [request, setRequest] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [button, setButton] = useState(false);
  const [page, setPage] = useState(0);
  const [alt, setAlt] = useState('');
  const [modal, setModal] = useState('');


  useEffect(() => {
  if (page === 0) {
      return
  }
  serverAPI();
  }, [page, request])

  const serverAPI = async () => {
    try {
      // setButton(false);
      setIsLoading(true);
      API.page = page;
      API.name = request;
      const data = await API.serverData();
      const hits = await data.hits;
      setImages(prev=>[...prev, ...hits]);
      setIsLoading(false);
      setButton(true);
      return (notiflix());
    } catch (error) {
      setIsLoading(false);
      setButton(false);
    }
  };

  const notiflix = () => {
    const total = API.total;
    const page = API.page;
    const perPage = API.perPage;
    if (total > 0 && page === 1) {
      if (perPage >= total) {
        setButton(false);
      }
      return notiflixSuccess(total);
    }
    if (total === 0) {
      setButton(false);
      return notiflixWarning();
    }

    if (Math.ceil(total / 12) === page) {
      setButton(false);
      return notiflixInfo();
    }
  };
  const notiflixSuccess = total => {
    Notiflix.Notify.success(`Hooray! We found ${total} images.`);
  };
  const notiflixWarning = () => {
    Notiflix.Notify.warning(
      `Sorry, there are no images matching your search query. Please try again.`
    );
  };
  const notiflixInfo = () => {
    Notiflix.Notify.info(
      `We're sorry, but you've reached the end of search results.`
    );
  };

  const onSearchPhoto = searchPhotoValue => {
    setImages([]);
    setPage(1)
    setRequest (searchPhotoValue);
    console.log(searchPhotoValue);
  };

  const loadMore = () => {
    setPage(prev => prev + 1);
    console.log(request);
  };

  const toggleModal = event => {
    if (event.target.nodeName !== 'IMG') {
      return;
    }
    setModal(event.target.dataset.src);
    setAlt(event.target.getAttribute('alt'));
  };

  const resetModal = () => {
      setModal('');
      setAlt('');
  };
  // const buttonСondition = () => {
  //   const total = API.total;
  //   const page = API.page;
  //   if (total > 0 && Math.ceil(total / 12) !== page && !isLoading) {
  //     setButton(false);
  //   }
  //   setButton(true);
  // }
  return (
    <>
      <Searchbar submitSearch={onSearchPhoto} />
      {images.length !== 0 && (
        <ImagesGallery images={images} showModal={toggleModal} />
      )}
      {isLoading && <Loader />}
      {button> 0 && <LoadMore loadMore={loadMore} />}
      {modal !== '' && (
        <Modal src={modal} alt={alt} popap={resetModal} />
      )}
    </>
  );
}
export default App;