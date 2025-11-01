import React from 'react';
import styles from './IngredientDetails.module.css'
import PropTypes from 'prop-types';

const IngredientDetails = ({card}) => {

    return (
        <section className={styles.card}>
            <img className={styles.card__img} src={card.image} alt={card.name}/>
            <h3 className='text text_type_main-medium mt-4'>{card.name}</h3>
            <ul className={styles.card__list}>
                <li>
                    <p className='text text_type_main-default text_color_inactive'>Калории,ккал</p>
                    <p className='text text_type_digits-default text_color_inactive mt-2'>{card.calories}</p>
                </li>
                <li>
                    <p className='text text_type_main-default text_color_inactive'>Белки, г</p>
                    <p className='text text_type_digits-default text_color_inactive mt-2'>{card.proteins}</p>
                </li>
                <li>
                    <p className='text text_type_main-default text_color_inactive'>Жиры, г</p>
                    <p className='text text_type_digits-default text_color_inactive mt-2'>{card.fat}</p>
                </li>
                <li>
                    <p className='text text_type_main-default text_color_inactive'>Углеводы, г</p>
                    <p className='text text_type_digits-default text_color_inactive mt-2'>{card.carbohydrates}</p>
                </li>
            </ul>
        </section>
    )
    
}

IngredientDetails.propTypes = {
  card: PropTypes.object.isRequired,
}

export default IngredientDetails;