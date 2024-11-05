// import { useState, useEffect } from "react";

import "./App.css";
// import profiles from "../profiles.json";
import ContactList from "./ContactList/ContactList";
import SearchBox from "./SearchBox/SearchBox";
import ContactForm from "./ContactForm/ContactForm";
import { useDispatch } from "react-redux";
import { addContact, deleteContact } from "../redux/contactsSlice.js";

const App = () => {
  const dispatch = useDispatch();

  const onAddContact = (newContact) => {
    const action = addContact(newContact);
    dispatch(action);
  };

  const onDeleteContact = (profileId) => {
    const action = deleteContact(profileId);
    dispatch(action);
  };

  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm onAddContact={onAddContact} />
      <SearchBox />
      <ContactList onDeleteContact={onDeleteContact} />
    </div>
  );
};

export default App;
