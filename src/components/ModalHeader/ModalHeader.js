import React from 'react';
import styles from './ModalHeader.module.css'
import { CloseIcon } from '@ya.praktikum/react-developer-burger-ui-components'
import PropTypes from 'prop-types';

const ModalHeader = ({header, handleOnClose}) => {
    return (<header className={styles.modal__header}>
        <h2 className='text text_type_main-large'>{header}</h2>
        <CloseIcon type="primary" onClick={handleOnClose}/>
        </header>)
    
}

ModalHeader.propTypes = {
    header: PropTypes.string,
    handleOnClose: PropTypes.func
  }

export default ModalHeader;