import React, { useEffect } from 'react';
import { useRef, useState } from 'react';
import styles from './BurgerIngredients.module.css';
import { Tab } from '@ya.praktikum/react-developer-burger-ui-components'
import CardsList from '../CardsList/CardsList';
import PropTypes from 'prop-types';

function BurgerIngredients({handleClickOpenModal, breadsData, saucesData, toppingsData}){
    const [currentMenu, setCurrentMenu] = useState('breads')
    const breadsRef = useRef(null)
    const saucesRef = useRef(null)
    const toppingsRef = useRef(null)

    useEffect(()=>{
        let currentRef = null
        if (currentMenu === 'breads'){
            currentRef = breadsRef
        }
        else if (currentMenu === 'sauces'){
            currentRef = saucesRef
        }
        else{
            currentRef = toppingsRef
        }
        currentRef.current.scrollIntoView({
            behavior: 'smooth' 
        });
    }, [currentMenu])
    return(
        <section className={`${styles.burger__ingredients} mt-5`}>
            <nav className={styles.burger__nav}>
                <Tab value="breads" active={currentMenu === 'breads'} onClick={setCurrentMenu}>
                    Булки
                </Tab>
                <Tab value="sauces" active={currentMenu === 'sauces'} onClick={setCurrentMenu}>
                    Соусы
                </Tab>
                <Tab value="toppings" active={currentMenu === 'toppings'} onClick={setCurrentMenu}>
                    Начинки
                </Tab>
            </nav>
            <div className={`${styles.ingredients__container} mt-5 mt-5`}>
                <h3 className="text text_type_main-medium" ref={breadsRef}>Булки</h3>
                <CardsList handleClickOpenModal={handleClickOpenModal} cards={breadsData} />
                <h3 className="text text_type_main-medium" ref={saucesRef}>Соусы</h3>
                <CardsList handleClickOpenModal={handleClickOpenModal} cards={saucesData} />
                <h3 className="text text_type_main-medium" ref={toppingsRef}>Начинки</h3>
                <CardsList handleClickOpenModal={handleClickOpenModal} cards={toppingsData} />
            </div>
        </section>
    )
}

BurgerIngredients.propTypes = {
  handleClickOpenModal: PropTypes.func.isRequired,
  breadsData: PropTypes.array.isRequired,
  saucesData: PropTypes.array.isRequired,
  toppingsData: PropTypes.array.isRequired
}

export default BurgerIngredients;