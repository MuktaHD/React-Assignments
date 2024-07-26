import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import TotoApp from './components/TotoApp';
import Menu from './components/Menu';
import Gallary from './components/Gallary';
import ContactList from './components/ContactList';
import ShoppingCart from './components/ShoppingCart';
import './App.css'; 


function App() {
  return (
    <Router>
      <div>
        <Menu />
        <main className="app-main">
          <Routes>
            <Route path="/contact" element={<ContactList />} />
            <Route path="/todo" element={<TotoApp />} />
            <Route path="/gallery" element={<Gallary />} />
            <Route path="/shopping-cart" element={<ShoppingCart />} />
            <Route path="/" element={
              <section className="app-section">
                <h1>Welcome To Home-Page</h1>
                <p>Select a section from the menu.</p>
                <img src="images/home.png" alt="" />
              </section>
            } />
          </Routes>
        </main>
      </div>
    </Router>
  );
}


export default App;
