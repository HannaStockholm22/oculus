import { useState } from "react";
import { FeatContent } from "./FeatContent/FeatContent";
import ls from "./Features.module.css";

export const Features = () => {
  const [activeTab, setActiveTab] = useState(0);
 
  const selectBtn = (id) => {
    setActiveTab(id);
  };

  let tabsElements = [
    { id: 0, num: "01", name: "Graphics" },
    { id: 1, num: "02", name: "Controls" },
    { id: 2, num: "03", name: "Processor" },
    { id: 3, num: "04", name: "Set up your play area" },
    { id: 4, num: "05", name: "Gardian activity" },
    { id: 5, num: "06", name: "Headset casting" },
  ];

  const eachTab = tabsElements.map((e) => {
    return (
      <button className={`${ls.tabsBtn} ${(activeTab===e.id)? ls.active: ""}`} onClick={()=>{selectBtn(e.id)}}>
        <p className={ls.tabsNum}>
          {e.num}
          <span className={ls.tabsName}>{e.name}</span>
        </p>
      </button>
    );
  });

  return (
    <div className={ls.features}>
      <div className="container">
            <div className={ls.titles}>
                <div className={ls.firstTitle}>
                   <h2 className="sectionTitle">PRODUCT FEATURES</h2>
                </div>
                <div className={ls.secondTitle}>
                   <p className="topTitle">Easy to set up and safe to use</p>
                </div>
            </div>
            <div className={ls.inner}>
                 <div className={ls.tabs}>
                    {eachTab}
                 </div>
                 <div className={ls.content}>
                     <FeatContent activeTab={activeTab}/>
                 </div>
            </div>
      </div>
    </div>
 
  );
};
