import React, { useEffect} from 'react';
import styles from './ModalOverlay.module.css'
import ReactDOM from 'react-dom'
import Modal from '../Modal/Modal';
import PropTypes from 'prop-types';

const modalRoot = document.getElementById("react-modals");
const ModalOverlay = ({header, children, handleOnClose}) => {
    const handleEscape = (e) => {
        if (e.key === 'Escape'){
            handleOnClose();
            
        }
    }

    
    useEffect(()=>{
        document.addEventListener('keydown', handleEscape)
        return (()=>{
            document.removeEventListener('keydown', handleEscape)
        })
    }, [])
    
    return ReactDOM.createPortal((
        <div className={`${styles.popup} ${styles.popup_opened}`} onClick={handleOnClose}>
            <Modal handleOnClose={handleOnClose} header={header} children={children} />
        </div>
    ), modalRoot)
    
}

ModalOverlay.propTypes = {
    header: PropTypes.string,
    children: PropTypes.element,
    handleOnClose: PropTypes.func
}
export default ModalOverlay;