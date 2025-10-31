import React from 'react';
import Card from '../Card/Card'
import styles from './CardsList.module.css'
import PropTypes from 'prop-types';
function CardsList({cards, handleClickOpenModal}){
    return(
        <div className={styles.cards}>
            {cards.map(card => <Card key={card._id} handleClickOpenModal={handleClickOpenModal} card={card}/>)}
        </div>
    )
}

CardsList.propTypes = {
  handleClickOpenModal: PropTypes.func.isRequired,
  card: PropTypes.object.isRequired,
}
export default CardsList;
