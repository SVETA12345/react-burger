import React from 'react';
import styles from './ModalOverlay.module.css'
import PropTypes from 'prop-types';


const ModalOverlay = ({isOpenModal, handleOnClose}) => {   
    return (
        <div className={`${styles.popup} ${isOpenModal && styles.popup_opened}`} onClick={handleOnClose}>
                 
        </div>
    )
    
}

ModalOverlay.propTypes = {
    isOpenModal: PropTypes.bool,
    handleOnClose: PropTypes.func
}
export default ModalOverlay;