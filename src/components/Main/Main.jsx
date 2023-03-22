import { Features } from "./Features/Features";
import { SectionTop } from "./SectionTop/SectionTop";
import ls from "./Main.module.css";

export const Main = ({updateBasket}) => {
  return (
    <div className={ls.inner}>
      <SectionTop updateBasket={updateBasket}/>
      <Features/>
      
    </div>
  );
};
