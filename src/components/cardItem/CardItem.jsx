import styles from "./carditem.module.css";
import React from "react";

const CardItem = ({ heading, imgSrc }) => {
  return (
    <div className={styles.card}>
      <h6 className={styles.heading}>{heading}</h6>
      <p>
        <img src={imgSrc} alt="img" />
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Invent modi
        minus earum id odio quam sequi aliquam aliquid iusto? Molestiae animi
        sed natus quaerat amet veritatis eius inve accusantium ea. Esse
        nulla architecto accusantium eos. Qui dolor ab at aspernatur dolorum
        earum, quas velit suscipit dolorum necessitatibus aut nam reprehenderit
        enim. Autem, nam!
      </p>
    </div>
  );
};

export default CardItem;
