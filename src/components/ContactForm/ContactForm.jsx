
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addContact } from '../../redux/contactsSlice';
import { nanoid } from 'nanoid'; 
import styles from './ContactForm.module.css';

const ContactForm = () => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    const newContact = {
      id: nanoid(),  
      name,
      number,
    };

    dispatch(addContact(newContact));  
    setName('');
    setNumber('');
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <label className={styles.formLabel}>
        Name
        <input
          type="text"
          name="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className={styles.formInput}
          required
        />
      </label>
      <label className={styles.formLabel}>
        Number
        <input
          type="tel"
          name="number"
          value={number}
          onChange={(e) => setNumber(e.target.value)}
          className={styles.formInput}
          required
        />
      </label>
      <button type="submit" className={styles.addContactBtn}>
        Add contact
      </button>
    </form>
  );
};

export default ContactForm;
