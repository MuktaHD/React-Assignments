
import React from 'react';
import './Gallery.css';

const imageUrls = [
  'images/1.png',
  'images/2.png',
  'images/3.png',
  'images/4.png',
  'images/5.png'
  
 
];

function Gallary() {
  return (
    <div className="gallery">
       {imageUrls.map((url, index) => (
        // <img  key={index}  src={url}   />
        <img src={url} alt="" />
      ))}
    </div>
  );
}

export default Gallary;
