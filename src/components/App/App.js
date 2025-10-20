import React from 'react';
import '@ya.praktikum/react-developer-burger-ui-components/dist/ui/common.css';
import '@ya.praktikum/react-developer-burger-ui-components/dist/ui/fonts/fonts.css';
import '@ya.praktikum/react-developer-burger-ui-components/dist/ui/box.css'
import './App.css';
import AppHeader from '../AppHeader/AppHeader'
import BurgerIngredients from '../BurgerIngredients/BurgerIngredients'
import BurgerConstructor from '../BurgerConstructor/BurgerConstructor'

function App() {
  return (
    <div className="App">
      <AppHeader/>
      <main className='burgers__info'>
        <h2 className="text  text_type_main-large">Соберите бургер</h2>
        <div className='burger__container mb-5 mb-5'>
            <BurgerIngredients  />
            <BurgerConstructor />
        </div>
      </main>
     
    </div>
  );
}

export default App;