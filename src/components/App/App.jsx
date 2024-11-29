import React from 'react';
import styles from './App.module.css'; // Import CSS Modules
import ContactForm from '../ContactForm/ContactForm'; // Corectăm importurile componentelor
import Filter from '../Filter/Filter';
import ContactList from '../ContactList/ContactList';

const App = () => {
  return (
    <div>
      <h1 className={styles.phonebookTitle}>Phonebook</h1> {/* Aplicați clasa din CSS Module */}
      <ContactForm />
      <h2 className={styles.contactsTitle}>Contacts</h2> {/* Aplicați clasa din CSS Module */}
      <Filter />
      <ContactList />
    </div>
  );
};

export default App;
