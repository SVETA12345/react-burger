import React, { useEffect } from 'react';
import { useRef, useState } from 'react';
import './BurgerIngredients.css';
import { Tab } from '@ya.praktikum/react-developer-burger-ui-components'
import Card from '../Card/Card'
import imgBurger from '../../images/burger_simple.png'

function BurgerIngredients(){
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
        <section className='burger__ingredients mt-5'>
            <nav style={{ display: 'flex' }}>
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
            <div className='ingredients__container mt-5 mt-5'>
                <h3 className="text text_type_main-medium" ref={breadsRef}>Булки</h3>
                <div className='cards'>
                    <Card img={imgBurger} amount={20} name={'Краторная булка N-200i'}/>
                    <Card img={imgBurger} amount={20} name={'Краторная булка N-200i'}/>
                </div>
                <h3 className="text text_type_main-medium" ref={saucesRef}>Соусы</h3>
                <div className='cards'>
                    <Card img={imgBurger} amount={20} name={'Краторная булка N-200i'}/>
                    <Card img={imgBurger} amount={20} name={'Краторная булка N-200i'}/>
                    <Card img={imgBurger} amount={20} name={'Краторная булка N-200i'}/>
                    <Card img={imgBurger} amount={20} name={'Краторная булка N-200i'}/>
                </div>
                <h3 className="text text_type_main-medium" ref={toppingsRef}>Начинки</h3>
                <div className='cards'>
                    <Card img={imgBurger} amount={20} name={'Краторная булка N-200i'}/>
                    <Card img={imgBurger} amount={20} name={'Краторная булка N-200i'}/>
                    <Card img={imgBurger} amount={20} name={'Краторная булка N-200i'}/>
                    <Card img={imgBurger} amount={20} name={'Краторная булка N-200i'}/>
                </div>
            </div>
        </section>
    )
}


export default BurgerIngredients;