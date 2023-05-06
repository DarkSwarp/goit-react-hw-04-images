import { useState } from 'react';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import Searchbar from './Searchbar/searchbar';
import { ImageGallery } from './ImageGallery/imagegallery';
import { fetchPhoto } from 'api';
import { Loader } from './Loader/loader';
import { Button } from './Button/button';

let page = 1;

export default function App() {
  const [text, setText] = useState('');
  const [totalHits, setTotalHits] = useState();
  const [item, setItem] = useState([]);
  const [loading, setLoading] = useState(false);

  const handlSubmit = async inputText => {
    if (inputText.trim() === '') {
      Notify.info('Enter request text');
    } else {
      try {
        setLoading(true);
        page = 1;
        const { allHits, hits } = await fetchPhoto(inputText, 1);
        if (hits < 1) {
          Notify.failure('Sorry, but no images were found for your search.');
        } else {
          setText(inputText);
          setTotalHits(allHits);
          setItem(hits);
        }
      } catch (error) {
        Notify.failure('Something went wrong! Reboot Please!');
      } finally {
        setLoading(false);
      }
    }
  };
  const onLoadMore = async () => {
    try {
      setLoading(true);

      page += 1;
      const { hits } = await fetchPhoto(text, page);
      setItem(state => ({
        item: [...state, ...hits],
      }));
    } catch (error) {
      Notify.failure('Something went wrong! Reboot Please!');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <Searchbar onSubmit={handlSubmit} />
      {item.length > 0 && <ImageGallery hits={item} />}
      {loading && <Loader />}
      {item.length > 0 && item.length < totalHits && (
        <Button onClick={onLoadMore} />
      )}
    </div>
  );
}

// class oldApp extends Component {
//   state = {
//     text: '',
//     totalHits: 0,
//     item: [],
//     loading: false,
//   };

//   handlSubmit = async inputText => {
//     if (inputText.trim() === '') {
//       Notify.info('Enter request text');
//     } else {
//       try {
//         this.setState({
//           loading: true,
//         });
//         page = 1;
//         const { totalHits, hits } = await fetchPhoto(inputText, 1);
//         if (hits < 1) {
//           Notify.failure('Sorry, but no images were found for your search.');
//         } else {
//           this.setState({
//             item: hits,
//             text: inputText,
//             totalHits: totalHits,
//           });
//         }
//       } catch (error) {
//         Notify.failure('Something went wrong! Reboot Please!');
//       } finally {
//         this.setState({
//           loading: false,
//         });
//       }
//     }
//   };
//   onLoadMore = async () => {
//     try {
//       this.setState({
//         loading: true,
//       });
//       page += 1;
//       const { hits } = await fetchPhoto(this.state.text, page);
//       this.setState(prevState => ({
//         item: [...prevState.item, ...hits],
//       }));
//     } catch (error) {
//       Notify.failure('Something went wrong! Reboot Please!');
//     } finally {
//       this.setState({
//         loading: false,
//       });
//     }
//   };

//   openModal = e => {};
//   render() {
//     return (
//       <div>
//         <Searchbar onSubmit={this.handlSubmit} />
//         {this.state.item.length > 0 && <ImageGallery hits={this.state.item} />}
//         {this.state.loading && <Loader />}
//         {this.state.item.length > 0 &&
//           this.state.item.length < this.state.totalHits && (
//             <Button onClick={this.onLoadMore} />
//           )}
//       </div>
//     );
//   }
// }

// export default oldApp;
