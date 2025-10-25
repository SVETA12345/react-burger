import React from 'react';
import '@ya.praktikum/react-developer-burger-ui-components/dist/ui/common.css';
import '@ya.praktikum/react-developer-burger-ui-components/dist/ui/fonts/fonts.css';
import '@ya.praktikum/react-developer-burger-ui-components/dist/ui/box.css'
import styles from './App.module.css';
import AppHeader from '../AppHeader/AppHeader'
import BurgerIngredients from '../BurgerIngredients/BurgerIngredients'
import BurgerConstructor from '../BurgerConstructor/BurgerConstructor'

function App() {
  return (
    <div className={styles.App}>
      <AppHeader/>
      <main className={styles.burgers__info}>
        <h2 className="text  text_type_main-large">Соберите бургер</h2>
        <div className={styles.burger__container}>
            <BurgerIngredients  />
            <BurgerConstructor />
        </div>
      </main>
     
    </div>
  );
}

export default App;