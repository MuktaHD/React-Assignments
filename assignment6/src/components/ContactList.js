import React from 'react';
import './ContactList.css';

const contacts = [
  { name: 'Mukta Dapkekar', phone: '9850868214', email: 'mukta@example.com' },
  { name: 'Rohini Jori', phone: '9850868215', email: 'jrohini@example.com' }
];

function ContactList() {
  return (
    <ul className="contact-list">
      {contacts.map((contact, index) => (
        <li key={index} className="contact-item">
          <strong>{contact.name}</strong><br />
          Phone: {contact.phone}<br />
          Email: {contact.email}
        </li>
      ))}
    </ul>
  );
}

export default ContactList;
