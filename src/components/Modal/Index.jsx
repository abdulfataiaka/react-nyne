import React from 'react';
import { modalTypes } from '../../helpers';
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
const Modal = ({ type, props, close }) => {

  const Modal = (type == 'info')
    ? <InfoModal {...props} close={close} />
    : null

  const show = modalTypes.includes(type);
  
  return (
    <div className="modal" style={{ display: show ? 'block' : 'none'}}>
      <div className="overlay" />
      { Modal }
    </div>
  );
}

export default Modal;
