
import './App.css';

import { Header } from './components/Header/Header';
import {Main } from './components/Main/Main';
import {Footer } from './components/Footer/Footer';


const  App =()=> {
  return (
    <div className='wrapper' >
      <header className='header'>
         <Header />
      </header>
      <main className='main'>
          <Main/>    
      </main>
      <footer className='footer'>
          <Footer />
      </footer>
    </div>
  );
}

export default App;
