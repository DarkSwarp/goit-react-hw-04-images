import React, { Component } from 'react';
import PropTypes from 'prop-types';
// import { createPortal } from 'react-dom';

// const modalRootContainer = document.querySelector('#modal-root');

export class Modal extends Component {
  componentDidMount() {
    window.addEventListener('keydown', this.ESCpress);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.ESCpress);
  }

  ESCpress = e => {
    if (e.code === `Escape`) {
      return this.props.closeESC();
    }
  };

  // render() {
  //   return createPortal(
  //     <div className="overlay" onClick={this.props.close}>
  //       <div className="modal">
  //         <img className="large-img" src={this.props.largeImageURL} alt="" />
  //       </div>
  //     </div>,
  //     modalRootContainer
  //   );
  // }
  render() {
    return (
      <div className="overlay" onClick={this.props.close}>
        <div className="modal">
          <img className="large-img" src={this.props.largeImageURL} alt="" />
        </div>
      </div>
      
    );
  }
}

Modal.propTypes = {
  closeESC: PropTypes.func,
  close: PropTypes.func,
};
