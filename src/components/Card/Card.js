import React from 'react';
import styles from './Card.module.css';
import { Counter, CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components'


function Card({img, amount, name}){
    
    return(
        <div className={styles.card}>
            <Counter count={1} size="default" />
            <img className={styles.card__img} src={img} alt={name} />
            <div className={styles.card__amount}>
                <p className='text text_type_digits-default mr-2 mb-2'>{amount}</p>
                <CurrencyIcon />
            </div>
            <h4 className='text text_type_main-default'>{name}</h4>
        </div>
    )
}


export default Card;