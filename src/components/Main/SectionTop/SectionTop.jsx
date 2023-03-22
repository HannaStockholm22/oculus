import { BuyBtn } from "../../BuyBtn/BuyBtn";
import ls from "./SectionTop.module.css";

export const SectionTop = ({updateBasket}) => {
  return (
    <section className={ls.top}>
      <div className="container">
        <div className={ls.inner}>
          <h1 className={ls.title}> Meta Quest 2 </h1>
          <p className={ls.subtitle}> Get an Elite Strap free</p>
          <p className={ls.text}>
            For a limited time only, save $59.99 USD. Offer ends 1/19/23
          </p>
          <div className={ls.btn}>
            <BuyBtn updateBasket={updateBasket}/>
          </div>
          <p className={ls.info}>Meta Quest 2 is for ages 13+</p>
        </div>
      </div>
    </section>
  );
};
