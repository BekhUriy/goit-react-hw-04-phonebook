import React, { useState } from 'react';
import shortid from 'shortid';
import './FormStyle.css';

const ContactForm = ({ contacts, onSubmit }) => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const handleChange = e => {
    const { name, value } = e.target;
    name === 'name' ? setName(value) : setNumber(value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    const id = shortid.generate();

    const isNameExists = contacts.some(
      contact => contact.name.toLowerCase() === name.toLowerCase()
    );

    if (isNameExists) {
      alert(`${name} is already in contacts.`);
      return;
    }

    onSubmit({ name, number, id });
    setName('');
    setNumber('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="name"
        value={name}
        onChange={handleChange}
        placeholder="Enter name"
        required
      />
      <input
        type="tel"
        name="number"
        value={number}
        onChange={handleChange}
        placeholder="Enter phone number"
        required
      />
      <button type="submit">Add contact</button>
    </form>
  );
};

export default ContactForm;
