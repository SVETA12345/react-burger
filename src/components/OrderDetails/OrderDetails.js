import React from 'react';
import styles from './OrderDetails.module.css'
import circle from '../../images/done.png'
import PropTypes from 'prop-types';

const OrderDetails = ({numOrder}) => {
    return (
        <section className={styles.order}>
            <h2 className='text text_type_digits-large mt-4'>{numOrder}</h2>
            <p className='text text_type_main-medium mt-4 mt-4'>идентификатор заказа</p>
            <img className='mt-15' alt={"Иконка"} src={circle}></img>
            <p className='text text_type_main-default mt-15'>Ваш заказ начали готовить</p>
            <p className={`text text_type_main-default text_color_inactive mt-2 ${styles.paragraph}`}>Дождитесь готовности на орбитальной станции</p>
        </section>
    )
    
}

OrderDetails.propTypes = {
    numOrder: PropTypes.string,
}

export default OrderDetails;