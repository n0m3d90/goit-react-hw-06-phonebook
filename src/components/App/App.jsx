import React from 'react';
import styles from './App.module.css'; // Importă stilurile din CSS Module
import ContactForm from '../ContactForm/ContactForm'; // Asigură-te că importurile sunt corecte
import Filter from '../Filter/Filter';
import ContactList from '../ContactList/ContactList';

const App = () => {
  return (
    <div className={styles.App}> {/* Folosește CSS Module pentru clasa App */}
      <h1 className={styles.title}>Phonebook</h1> {/* Folosește CSS Module pentru titlu */}
      <ContactForm />
      <Filter />
      <ContactList />
    </div>
  );
};

export default App;
