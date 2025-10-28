import React from "react";
import styles from "./BurgerConstructor.module.css";
import {
  Button,
  CurrencyIcon,
  ConstructorElement,
  DragIcon,
} from "@ya.praktikum/react-developer-burger-ui-components";
import imgBurger from "../../images/burger_simple.png";
import sauce from '../../images/sauce.png'

function BurgerConstructor() {
  const breadTop=[
    {
      text: "Краторная булка N-200i (верх)",
      price: 200,
      thumbnail: imgBurger,
    },
  ]
  const breadBottom = [
    {
      text: "Краторная булка N-200i (низ)",
      price: 200,
      thumbnail: imgBurger,
    },
  ]
  const toppingsSauces = [
    {
      text: "Соус традиционный галактический",
      price: 20,
      thumbnail: sauce,
    },
    {
      text: "Соус традиционный галактический",
      price: 20,
      thumbnail: sauce,
    },
    {
      text: "Соус традиционный галактический",
      price: 20,
      thumbnail: sauce,
    },
    {
      text: "Соус традиционный галактический",
      price: 20,
      thumbnail: sauce,
    },
   {
      text: "Соус традиционный галактический",
      price: 20,
      thumbnail: sauce,
    },
    {
      text: "Соус традиционный галактический",
      price: 20,
      thumbnail: sauce,
    },
    {
      text: "Соус традиционный галактический",
      price: 20,
      thumbnail: sauce,
    },
    {
      text: "Соус традиционный галактический",
      price: 20,
      thumbnail: sauce,
    },
    {
      text: "Соус традиционный галактический",
      price: 20,
      thumbnail: sauce,
    },
    
  ];
  return (
    <section className={styles.burger_constructor}>
      <ul className={styles.burger_list}>
        {breadTop.map((burger, index) =>
           (
            <li key={index} className={`${styles.burger_start} mb-4`}>
              <ConstructorElement
                type="top"
                isLocked={true}
                text={burger.text}
                price={burger.price}
                thumbnail={burger.thumbnail}
              />
            </li>
          ))
         }
         </ul>
         <div className={styles.burger__scroll}>
            <ul className={styles.burger_list}>
              {
                toppingsSauces.map((ingradient, index)=>(
                  <li key={index} className={`${styles.burger_item} mb-4`}>
                    <DragIcon />
                    <ConstructorElement
                      text={ingradient.text}
                      price={ingradient.price}
                      thumbnail={ingradient.thumbnail}
                    />
                  </li>
                ))
              } 
            </ul>
         </div>
         <ul className={styles.burger_list}>
          {
            breadBottom.map((bread, index)=>(
                <li key={index} className={`${styles.burger_start} mt-4`}>
                <ConstructorElement
                  type="bottom"
                  isLocked={true}
                  text={bread.text}
                  price={bread.price}
                  thumbnail={bread.thumbnail}
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
        <Button htmlType="button" type="primary" size="medium">
          Оформить заказ
        </Button>
      </div>
    </section>
  );
}

export default BurgerConstructor;
