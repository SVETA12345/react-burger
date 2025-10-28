import React from 'react';
import Card from '../Card/Card'
import styles from './CardsList.module.css'

function CardsList({cards}){
    return(
        <div className={styles.cards}>
            {cards.map(card => <Card img={card.img} amount={card.amount} name={card.text}/>)}
        </div>
    )
}

export default CardsList;
