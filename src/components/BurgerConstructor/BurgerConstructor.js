import React, {useEffect, useState} from "react";
import styles from "./BurgerConstructor.module.css";
import {
  Button,
  CurrencyIcon,
  ConstructorElement,
  DragIcon,
} from "@ya.praktikum/react-developer-burger-ui-components";
import PropTypes from 'prop-types';

function BurgerConstructor({handleClickOpenModal, breadsData, saucesData, toppingsData}) {
  const [breadTop, setBreadTop] = useState({
    name: '',
    price: null,
    _id: null,
    image: null
  })
  const [breadBottom, setBreadBottom] = useState({
    name: '',
    price: null,
    _id: null,
    image: null
  })

  
  useEffect(()=>{
    if (breadsData.length>1){
      setBreadTop(breadsData[0])
      setBreadBottom(breadsData.at(-1))
    }
  }, [breadsData])
  return (
    <section className={styles.burger_constructor}>
      <ul className={styles.burger_list}>
        
            <li key={breadTop._id} className={`${styles.burger_start} mb-4`}>
              <ConstructorElement
                type="top"
                isLocked={true}
                text={`${breadTop.name} (верх)`}
                price={breadTop.price}
                thumbnail={breadTop.image}
              />
            </li>
          
         </ul>
         <div className={styles.burger__scroll}>
            <ul className={styles.burger_list}>
              {
                [...saucesData, ...toppingsData ].map((ingradient, index)=>(
                  <li key={index} className={`${styles.burger_item} mb-4`}>
                    <DragIcon />
                    <ConstructorElement
                      text={ingradient.name}
                      price={ingradient.price}
                      thumbnail={ingradient.image}
                    />
                  </li>
                ))
              } 
            </ul>
         </div>
         <ul className={styles.burger_list}>
                <li key={breadBottom._id} className={`${styles.burger_start} mt-4`}>
                <ConstructorElement
                  type="bottom"
                  isLocked={true}
                  text={`${breadBottom.name} (низ)`}
                  price={breadBottom.price}
                  thumbnail={breadBottom.image}
                />
              </li>

      </ul>
      <div className={styles.burgers__basement}>
        <p className="text text_type_digits-medium mr-2">610</p>
        <CurrencyIcon
          className={`${styles.burger__icon} mr-5 mr-5`}
          type="primary"
        />
        <Button htmlType="button" type="primary" size="medium" onClick={(e)=>handleClickOpenModal(e, '42333')}>
          Оформить заказ
        </Button>
      </div>
    </section>
  );
}
BurgerConstructor.propTypes = {
  handleClickOpenModal: PropTypes.func.isRequired,
  breadsData: PropTypes.array.isRequired,
  saucesData: PropTypes.array.isRequired,
  toppingsData: PropTypes.array.isRequired
}

export default BurgerConstructor;

