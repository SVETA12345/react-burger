import React from 'react';
import './BurgerConstructor.css';
import { Button, CurrencyIcon, ConstructorElement, DragIcon  } from '@ya.praktikum/react-developer-burger-ui-components'
import imgBurger from '../../images/burger_simple.png'

function BurgerConstructor(){
    
    return(
        <section className='burger_constructor'>
            <ul className='burger_list'>
                <li className='burger_start mb-4'>
                    <ConstructorElement
                        type="top"
                        isLocked={true}
                        text="Краторная булка N-200i (верх)"
                        price={200}
                        thumbnail={imgBurger}
                    />
                </li>
                <li className='burger_item mb-4'>
                    <DragIcon />
                    <ConstructorElement
                        text="Краторная булка N-200i (верх)"
                        price={50}
                        thumbnail={imgBurger}
                    />
                </li>
                <li className='burger_item mb-4'>
                    <DragIcon />
                    <ConstructorElement
                        text="Краторная булка N-200i (верх)"
                        price={50}
                        thumbnail={imgBurger}
                    />
                </li>
                <li className='burger_item mb-4'>
                    <DragIcon />
                    <ConstructorElement
                        text="Краторная булка N-200i (верх)"
                        price={50}
                        thumbnail={imgBurger}
                    />
                </li>
                <li className='burger_item mb-4'>
                    <DragIcon />
                    <ConstructorElement
                        text="Краторная булка N-200i (верх)"
                        price={50}
                        thumbnail={imgBurger}
                    />
                </li>
                <li className='burger_item mb-4'>
                    <DragIcon />
                    <ConstructorElement
                        text="Краторная булка N-200i (верх)"
                        price={50}
                        thumbnail={imgBurger}
                    />
                </li>
                <li className='burger_item mb-4'>
                    <DragIcon />
                    <ConstructorElement
                        text="Краторная булка N-200i (верх)"
                        price={50}
                        thumbnail={imgBurger}
                    />
                </li>
                <li className='burger_item mb-4'>
                    <DragIcon />
                    <ConstructorElement
                        text="Краторная булка N-200i (верх)"
                        price={50}
                        thumbnail={imgBurger}
                    />
                </li>
                <li className='burger_item mb-4'>
                    <DragIcon />
                    <ConstructorElement
                        text="Краторная булка N-200i (верх)"
                        price={50}
                        thumbnail={imgBurger}
                    />
                </li>
                <li className='burger_item mb-4'>
                    <DragIcon />
                    <ConstructorElement
                        text="Краторная булка N-200i (верх)"
                        price={50}
                        thumbnail={imgBurger}
                    />
                </li>
                <li className='burger_start mb-4'>
                    <ConstructorElement
                        type="bottom"
                        isLocked={true}
                        text="Краторная булка N-200i (низ)"
                        price={200}
                        thumbnail={imgBurger}
                    />
                </li>
            </ul>
            <div className='burgers__basement'>
                <p className='text text_type_digits-medium mr-2'>610</p>
                <CurrencyIcon className='burger__icon mr-5 mr-5' type="primary" />
                <Button htmlType="button" type="primary" size="medium">
                    Оформить заказ
                </Button>
            </div>
        </section>
    )
}


export default BurgerConstructor;