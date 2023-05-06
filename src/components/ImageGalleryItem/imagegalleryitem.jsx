//
import { Modal } from 'components/Modal/modal';
import { Component } from 'react';

class ImageGalleryItem extends Component {
    state = {
        isModalOpen: false,
        largeImageURL: '',
    };
    openModal = largeURL => {
        console.log(largeURL);
        this.setState({ isModalOpen: true, largeImageURL: largeURL });
    };
    closeModal = e => {
        if (e.target.className === 'overlay') {
            this.setState({ isModalOpen: false, argeImageURL: '' });
        }
    };
    closeModalESC = () => {
        this.setState({ isModalOpen: false, argeImageURL: '' });
    }
  
  
    render() {
        const { item } = this.props;
        const { webformatURL } = item;
        const { largeImageURL } = item;
        return (
          <>
            <li className="gallery-item">
              <img
                className="item-image"
                onClick={() => this.openModal(largeImageURL)}
                src={webformatURL}
                alt=""
              />
            </li>
            {this.state.isModalOpen && (
              <Modal
                largeImageURL={this.state.largeImageURL}
                closeESC={this.closeModalESC}
                close={this.closeModal}
              />
            )}
          </>
        );
    }
    
}
export default ImageGalleryItem;
