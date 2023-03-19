import "./App.css";
import { useState } from "react";
import { Header } from "./components/Header/Header";
import { Main } from "./components/Main/Main";
import { Footer } from "./components/Footer/Footer";

const App = () => {
  const [counter, setCounter] = useState(0);
  const updateBasket=()=>{
    setCounter(counter+1);
  }
  return (
    <div className="wrapper">
      <header className="header">
        <Header counter={counter}/>
      </header>
      <main className="main">
        <Main updateBasket={updateBasket}/>
      </main>
      <footer className="footer">
        <Footer />
      </footer>
    </div>
  );
};

export default App;
