import ls from "./Main.module.css";

import { SectionTop } from "./SectionTop/SectionTop";

export const Main = ({updateBasket}) => {
  return (
    <div className={ls.inner}>
      <SectionTop updateBasket={updateBasket}/>
    </div>
  );
};
