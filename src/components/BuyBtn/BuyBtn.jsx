import ls from "./BuyBtn.module.css";

export const BuyBtn = ({updateBasket}) => {
  return (
    <button className={ls.btnInner} onClick={updateBasket}>
        <span className={ls.btnText}>BUY NOW</span>
        <span className={ls.btnPrice}>399,99 USD</span>
    </button>  
  
  );
};