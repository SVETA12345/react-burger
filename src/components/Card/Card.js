import React from 'react';
import styles from './Card.module.css';
import { Counter, CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components'
import PropTypes from 'prop-types';

function Card({card, handleClickOpenModal}){
    
    return(
        <div className={styles.card} onClick={(e) => handleClickOpenModal(e, null, card)}>
            <Counter count={1} size="default" />
            <img className={styles.card__img} src={card.image} alt={card.name} />
            <div className={styles.card__amount}>
                <p className='text text_type_digits-default mr-2 mb-2'>{card.price}</p>
                <CurrencyIcon />
            </div>
            <h4 className='text text_type_main-default'>{card.name}</h4>
        </div>
    )
}

Card.propTypes = {
  handleClickOpenModal: PropTypes.func.isRequired,
  card: PropTypes.object.isRequired,
}

export default Card;