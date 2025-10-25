import React from 'react';
import styles from './AppHeader.module.css';
import {Logo, BurgerIcon, ListIcon, ProfileIcon  } from '@ya.praktikum/react-developer-burger-ui-components'


function AppHeader(){
    
    return(
        <header className={`${styles.header} pb-4 pt-4`}>
            <button className={`${styles.header__button} pl-5 pr-5 pb-4 pt-4 mr-2`}> 
                <BurgerIcon className="mr-2" />
                <h3 className={`text text_type_main-default ${styles.text_active}`}>Конструктор</h3>   
            </button>
            <button className={`${styles.header__button} pl-5 pr-5 pb-4 pt-4`}>
                <ListIcon type="secondary" className="mr-2"/>
                <h3 className="text text_type_main-default" >Лента заказов</h3>
            </button>
            <Logo className={styles.header__logo} />
            <button className={`${styles.header__button} pl-5 pr-5 pb-4 pt-4`}>
                <ProfileIcon className="mr-2" type="secondary" />
                <h3 className="text text_type_main-default" >Личный кабинет</h3>
            </button>
            
            
            
        </header>
    )
}


export default AppHeader;