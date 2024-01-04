import React from 'react';
import './ContactList.css';

const ContactList = ({ contacts, onDelete }) => (
  <ul className="list">
    {contacts.map(contact => (
      <li key={contact.id} className="list-item">
        <span>{contact.name}:</span>
        <span>{contact.number}</span>
        <button
          type="button"
          className="delete-btn"
          onClick={() => onDelete(contact.id)}
        >
          Delete
        </button>
      </li>
    ))}
  </ul>
);

export default ContactList;
