import React from 'react';
import InfoModal from './InfoModal';

/**
 * 
 * 
 * @description Modal Component
 * 
 * @name Modal
 * 
 * @returns { JSX }
 */
const Modal = ({ type, props, show, close }) => {

  const Modal = (type == 'info')
    ? <InfoModal {...props} close={close} />
    : null

  return (
    <div className="modal" style={{ display: show ? 'block' : 'none'}}>
      <div className="overlay" />
      { Modal }
    </div>
  );
}

export default Modal;
