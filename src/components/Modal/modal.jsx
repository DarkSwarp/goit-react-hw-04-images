import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
// import { createPortal } from 'react-dom';

// const modalRootContainer = document.querySelector('#modal-root');

export function Modal({ closeESC, close, largeImageURL }) {
  useEffect(() => {
    window.addEventListener('keydown', ESCpress);
    return () => {
      window.removeEventListener('keydown', ESCpress);
    };
  }, []);

  const ESCpress = e => {
    if (e.code === `Escape`) {
      return closeESC();
    }
  };

  return (
    <div className="overlay" onClick={close}>
      <div className="modal">
        <img className="large-img" src={largeImageURL} alt="" />
      </div>
    </div>
  );
}

// export class oldModal extends Component {
//   componentDidMount() {
//     window.addEventListener('keydown', this.ESCpress);
//   }

//   componentWillUnmount() {
//     window.removeEventListener('keydown', this.ESCpress);
//   }

//   ESCpress = e => {
//     if (e.code === `Escape`) {
//       return this.props.closeESC();
//     }
//   };

//   // render() {
//   //   return createPortal(
//   //     <div className="overlay" onClick={this.props.close}>
//   //       <div className="modal">
//   //         <img className="large-img" src={this.props.largeImageURL} alt="" />
//   //       </div>
//   //     </div>,
//   //     modalRootContainer
//   //   );
//   // }
//   render() {
//     return (
//       <div className="overlay" onClick={this.props.close}>
//         <div className="modal">
//           <img className="large-img" src={this.props.largeImageURL} alt="" />
//         </div>
//       </div>

//     );
//   }
// }

Modal.propTypes = {
  closeESC: PropTypes.func,
  close: PropTypes.func,
};
