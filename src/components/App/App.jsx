
import React from 'react';
import ContactForm from '../ContactForm/ContactForm';
import ContactList from '../ContactList/ContactList';
import Filter from '../Filter/Filter';
import './App.module.css';

const App = () => {
  return (
    <div className="App">
      <h1 className="title">Phonebook</h1>
      <ContactForm />
      <Filter />
      <ContactList />
    </div>
  );
};

export default App;
