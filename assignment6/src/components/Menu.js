import React from 'react';
import './Menu.css';

const menuItems = [
  { name: 'Home', link: '/' },
  { name: 'ToDoApp', link: '/todo' },
  { name: 'Contact', link: '/contact' },
  {name :'Gallary' , link: '/gallery'},
  {name : 'Shopping Cart', link : '/shopping-cart'}
];

function Menu() {
  return (
    <ul className="menu">
      {menuItems.map((item, index) => (
        <li key={index} className="menu-item">
          <a href={item.link}>{item.name}</a>
        </li>
      ))}
    </ul>
  );
}

export default Menu;
