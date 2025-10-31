import React, {useEffect, useState} from 'react';
import {GET_BURGERS_URL} from '../../utils/constants'
import '@ya.praktikum/react-developer-burger-ui-components/dist/ui/common.css';
import '@ya.praktikum/react-developer-burger-ui-components/dist/ui/fonts/fonts.css';
import '@ya.praktikum/react-developer-burger-ui-components/dist/ui/box.css'
import styles from './App.module.css';
import AppHeader from '../AppHeader/AppHeader'
import BurgerIngredients from '../BurgerIngredients/BurgerIngredients'
import BurgerConstructor from '../BurgerConstructor/BurgerConstructor'
import ModalOverlay from '../ModalOverlay/ModalOverlay'
import OrderDetails from '../OrderDetails/OrderDetails';
import IngredientDetails from '../IngredientDetails/IngredientDetails';

function App() {
  const [breadsData, setBreadsData] = useState([])
  const [saucesData, setSaucesData] = useState([])
  const [toppingsData, setToppingsData] = useState([])
  const [isOpenModal, setIsOpenModal] = useState(false)
  const [numOrder, setNumOrder] = useState(null)
  const [cardDataModal, setCardDataModal] = useState({})

  const handleClickOpenModal = (e, numOrder=null, cardDataModal={}) => {
    if (numOrder){
      setNumOrder(numOrder)
    }
    else{
      setCardDataModal(cardDataModal)
    }
    setIsOpenModal(true)
  }

  const handleOnClose = (e) => {
        setIsOpenModal(false)
        setCardDataModal(null)
  }


  useEffect(()=>{
    fetch(GET_BURGERS_URL)
    .then(res => res.json())
    .then((data) => {
      const burgersData = data.data
      const breadsDataNew = burgersData.filter((ingradient) => ingradient.type === 'bun')
      const suecesDataNew = burgersData.filter((ingradient) => ingradient.type === 'sauce')
      const toppingsDataNew = burgersData.filter((ingradient) => ingradient.type === 'main')
      setBreadsData(breadsDataNew)
      setSaucesData(suecesDataNew)
      setToppingsData(toppingsDataNew)
    })
    .catch((err)=> console.error(err))
  }, [])
  
  

  return (
    <div className={styles.App}>
      {isOpenModal ? (
        <div style={{overflow: 'hidden'}}>
          <ModalOverlay handleOnClose={handleOnClose}  header={numOrder ? '' : "Детали ингредиента"} >
            {cardDataModal ? (<IngredientDetails card={cardDataModal}/>)
            : (<OrderDetails numOrder={numOrder} />)
            }
            
          </ModalOverlay>
        </div>
      ): (
        <>
        <AppHeader/>
        <main className={styles.burgers__info}>
          <h2 className="text  text_type_main-large">Соберите бургер</h2>
          <div className={styles.burger__container}>
              <BurgerIngredients  handleClickOpenModal={handleClickOpenModal} breadsData={breadsData} saucesData={saucesData} toppingsData={toppingsData}/>
              <BurgerConstructor handleClickOpenModal={handleClickOpenModal} setIsOpenModal={setIsOpenModal} breadsData={breadsData} saucesData={saucesData} toppingsData={toppingsData} />
          </div>
        </main>
      </>
      )}
     
    </div>
  );
}

export default App;