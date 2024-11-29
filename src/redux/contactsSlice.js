// src/redux/contactsSlice.js
import { createSlice } from '@reduxjs/toolkit';

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: {
    items: [], // Contactele sunt stocate aici
  },
  reducers: {
    addContact: (state, action) => {
      state.items.push(action.payload); // Adaugă contact în `items`
    },
    removeContact: (state, action) => {
      state.items = state.items.filter(contact => contact.id !== action.payload); // Filtrează contactele
    },
  },
});

export const { addContact, removeContact } = contactsSlice.actions;
export default contactsSlice.reducer;
