import React from "react";
import styles from "./mainside.module.css";
import CardItem from "../cardItem/CardItem";
import Footer from "../footer/Footer";
const MainSide = () => {
  const items = [
    {
      imgSrc: "css.png",
    },
    {
      imgSrc: "dw.png",
    },
    {
      imgSrc: "url.png",
    },
  ];
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        alignItems: "center",
        flex: 1,
      }}
    >
      <div className={styles.mainside}>
        <img src="/ncc.png" style={{ width: "310px", height: "122px" }} />
        <div
          style={{
            backgroundColor: "#EFEFEF",
            justifyContent: "center",
            alignItems: "center",
            padding: "40px",
            gap: "20px",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <span
            style={{
              display: "block",
              width: "fit-content",
              fontSize: "18px",
              fontWeight: "700",
            }}
          >
            Lorem ipsum dolor sit amet
          </span>
          <p
            style={{ fontSize: "16px", fontWeight: "400", textAlign: "center" }}
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem
            natus temporibus rem amet dignissimos maiores repudiandae quia nisi
            quasi ullam ea ipsum porro consequuntur nostrum, dolorum ducimus
            magni doloremque debitis. Lorem ipsum dolor, sit amet consectetur
            adipisicing elit. Provident ab, cumque repellat quis dolor, maiores
            beatae earum fugit explicabo distinctio sed maxime, suscipit nostrum
            enim sequi natus? Architecto, eveniet rem.
          </p>
        </div>
        <div
          className={styles.layoutCard}
        >
          {items.map((item) => (
            <CardItem
              imgSrc={item.imgSrc}
              key={item.imgSrc}
              heading={"Lorem ipsum dolor sit amet"}
            />
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default MainSide;
