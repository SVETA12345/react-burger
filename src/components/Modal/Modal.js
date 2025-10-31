import React from 'react';
import ModalHeader from '../ModalHeader/ModalHeader';
import styles from './Modal.module.css'
import PropTypes from 'prop-types';

const Modal = ({header, children, handleOnClose }) => {
    return (
        <div className={styles.modal}>
             <ModalHeader handleOnClose={handleOnClose}  header={header}/>
             {children}       
        </div>
        );
  }

  Modal.propTypes = {
    header: PropTypes.string,
    children: PropTypes.element,
    handleOnClose: PropTypes.func
  }

export default Modal;