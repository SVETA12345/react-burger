import React from "react";
import styles from "./BurgerConstructor.module.css";
import {
  Button,
  CurrencyIcon,
  ConstructorElement,
  DragIcon,
} from "@ya.praktikum/react-developer-burger-ui-components";
import PropTypes from 'prop-types';

function BurgerConstructor({handleClickOpenModal, breadsData, saucesData, toppingsData}) {
  
  return (
    <section className={styles.burger_constructor}>
      <ul className={styles.burger_list}>
        {breadsData.map((burger, index) =>
           (
            <li key={index} className={`${styles.burger_start} mb-4`}>
              <ConstructorElement
                type="top"
                isLocked={true}
                text={`${burger.name} (верх)`}
                price={burger.price}
                thumbnail={burger.image}
              />
            </li>
          ))
         }
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
          {
            breadsData.map((bread, index)=>(
                <li key={index} className={`${styles.burger_start} mt-4`}>
                <ConstructorElement
                  type="bottom"
                  isLocked={true}
                  text={`${bread.name} (низ)`}
                  price={bread.price}
                  thumbnail={bread.image}
                />
              </li>
            ))
          }
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

