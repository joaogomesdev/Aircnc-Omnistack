import React  from 'react';
import logo from './assets/logo.svg';
import './App.css';

function App() {
  return (
    <div className="container">
        <img src={logo} alt="logo"/>
        <div className="content">
          <p>
            Ofereça <strong>spots</strong> pata programadores e encontre <strong>talentos</strong> para a sua empresa
          </p>
          <form>
            <label htmlFor="email">E-Mail *</label>
            <input 
              type="email" 
              id="mail" 
              placeholder="Insira o seu melhor email" 
            />

            <button type="submit" className="btn">Entrar</button>
          </form>
        </div>
    </div>
  );
}

export default App;
