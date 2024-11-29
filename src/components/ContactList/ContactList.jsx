// src/components/ContactList/ContactList.jsx
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { removeContact } from '../../redux/contactsSlice';
import styles from './ContactList.module.css'; // Importăm fișierul CSS module

const ContactList = () => {
  const contacts = useSelector(state => state.contacts.items);
  const dispatch = useDispatch();
  const filter = useSelector(state => state.filter);

  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  const handleDelete = (id) => {
    dispatch(removeContact(id));
  };

  return (
    <ul className={styles.contactList}>
      {filteredContacts.map(contact => (
        <li key={contact.id} className={styles.contactItem}>
          <p>{contact.name}: {contact.number}</p>
          <button
            className={styles.deleteButton}
            onClick={() => handleDelete(contact.id)}
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
};

export default ContactList;
