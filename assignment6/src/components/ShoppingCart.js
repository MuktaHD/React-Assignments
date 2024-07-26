
import React, { useState } from 'react';
import './ShoppingCart.css';

const initialItems = [
  { name: 'Item 1', price: '$120' },
  { name: 'Item 2', price: '$200' }
];

function ShoppingCart() {
  const [items, setItems] = useState(initialItems);
  const [inputName, setInputName] = useState('');
  const [inputPrice, setInputPrice] = useState('');

  const addItem = () => {
    if (inputName.trim() && inputPrice.trim()) {
      setItems([...items, { name: inputName, price: inputPrice }]);
      setInputName('');
      setInputPrice('');
    }
  };

  const removeItem = (index) => {
    setItems(items.filter((_, i) => i !== index));
  };

  return (
    <div className="cart">
      <h2>Shopping Cart</h2>
      <div className="item-input">
        <input 
          placeholder="Item Name" 
          value={inputName} 
          onChange={(e) => setInputName(e.target.value)} 
        /><br/><br/>
        <input 
          placeholder="Item Price" 
          value={inputPrice} 
          onChange={(e) => setInputPrice(e.target.value)} 
        /><br/><br/>
        <button onClick={addItem}>Add Item</button>
      </div>
      {items.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        items.map((item, index) => (
          <div key={index} className="cart-item">
            {item.name} - {item.price}
            <button className="remove-btn" onClick={() => removeItem(index)}>Remove</button>
          </div>
        ))
      )}
    </div>
  );
}

export default ShoppingCart;
