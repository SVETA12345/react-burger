import React, { useEffect } from 'react';
import { useRef, useState } from 'react';
import styles from './BurgerIngredients.module.css';
import { Tab } from '@ya.praktikum/react-developer-burger-ui-components'
import imgBurger from '../../images/burger_simple.png'
import CardsList from '../CardsList/CardsList';

function BurgerIngredients(){
    const [currentMenu, setCurrentMenu] = useState('breads')
    const breadsRef = useRef(null)
    const saucesRef = useRef(null)
    const toppingsRef = useRef(null)
    const breadsData = [
        {
            img: imgBurger,
            amount: 20,
            name: 'Краторная булка N-200i'
        },
        {
            img: imgBurger,
            amount: 20,
            name: 'Краторная булка N-200i'
        }
    ]

    const saucesData = [
        {
            img: imgBurger,
            amount: 20,
            name: 'Краторная булка N-200i'
        },
        {
            img: imgBurger,
            amount: 20,
            name: 'Краторная булка N-200i'
        },
        {
            img: imgBurger,
            amount: 20,
            name: 'Краторная булка N-200i'
        },
        {
            img: imgBurger,
            amount: 20,
            name: 'Краторная булка N-200i'
        }
    ]
    const toppingsData= [
        {
            img: imgBurger,
            amount: 20,
            name: 'Краторная булка N-200i'
        },
        {
            img: imgBurger,
            amount: 20,
            name: 'Краторная булка N-200i'
        },
        {
            img: imgBurger,
            amount: 20,
            name: 'Краторная булка N-200i'
        },
        {
            img: imgBurger,
            amount: 20,
            name: 'Краторная булка N-200i'
        }
    ]
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
                <CardsList cards={breadsData} />
                <h3 className="text text_type_main-medium" ref={saucesRef}>Соусы</h3>
                <CardsList cards={saucesData} />
                <h3 className="text text_type_main-medium" ref={toppingsRef}>Начинки</h3>
                <CardsList cards={toppingsData} />
            </div>
        </section>
    )
}


export default BurgerIngredients;