import ImageGalleryItem from 'components/ImageGalleryItem/imagegalleryitem';
import PropTypes from 'prop-types';

export function ImageGallery({hits}) {
    return (
      <ul className="gallery">
        {hits.map(item => (
          <ImageGalleryItem key={item.id} item={item} />
        ))}
      </ul>
    );
}

ImageGallery.propTypes = {
  hits: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      webformatURL: PropTypes.string.isRequired,
      largeImageURL: PropTypes.string.isRequired,
    })
  ),
};
