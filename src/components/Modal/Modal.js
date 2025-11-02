import React, {useEffect} from 'react';
import styles from './Modal.module.css'
import PropTypes from 'prop-types';
import ReactDOM from 'react-dom'
import { CloseIcon } from '@ya.praktikum/react-developer-burger-ui-components'

const modalRoot = document.getElementById("react-modals");

const Modal = ({header, children, handleOnClose }) => {
    useEffect(()=>{
      const handleEscape = (e) => {
          if (e.key === 'Escape'){
              handleOnClose();
              
          }
      }
      document.addEventListener('keydown', handleEscape)
      return (()=>{
          document.removeEventListener('keydown', handleEscape)
      })
    }, [])

    return ReactDOM.createPortal((
        <div className={styles.modal}>
          <header className={styles.modal__header}>
            <h2 className='text text_type_main-large'>{header}</h2>
            <CloseIcon type="primary" onClick={handleOnClose}/>
          </header>
          {children}       
        </div>
        ), modalRoot);
  }

  Modal.propTypes = {
    header: PropTypes.string,
    children: PropTypes.element,
    handleOnClose: PropTypes.func
  }

export default Modal;