import React from 'react';
import './Card.css';
import { Counter, CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components'


function Card({img, amount, name}){
    
    return(
        <div className='card'>
            <Counter count={1} size="default" />
            <img className='card__img' src={img} alt={name} />
            <div className='card__amount'>
                <p className='text text_type_digits-default mr-2 mb-2'>{amount}</p>
                <CurrencyIcon />
            </div>
            <h4 className='text text_type_main-default'>{name}</h4>
        </div>
    )
}


export default Card;