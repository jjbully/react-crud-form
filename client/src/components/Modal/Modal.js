import React from 'react';
import ReactDOM from 'react-dom';

import './Modal.scss';

const Modal = props => {
  return ReactDOM.createPortal(
    <div
      className="modal"
      onClick={props.onDismiss}
    >
      <div 
        className="modal__inner"
        onClick={(e) => e.stopPropagation()}
      >
        <h2 className="modal__inner__header header">{props.title}</h2>
        <p className="modal__inner__content">{props.content}</p>
        <div className="modal__inner__action">{props.actions}</div>
      </div>
    </div>,
    document.querySelector('#modal')
  );
}

export default Modal