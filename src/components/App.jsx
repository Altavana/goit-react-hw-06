// import { useState, useEffect } from "react";

import "./App.css";
// import profiles from "../profiles.json";
import ContactList from "./ContactList/ContactList";
import SearchBox from "./SearchBox/SearchBox";
import ContactForm from "./ContactForm/ContactForm";
import { useDispatch } from "react-redux";
import { addContact, deleteContact } from "../redux/contactsSlice.js";

import { changeFilter } from "../redux/filtersSlice.js";

const App = () => {
  const dispatch = useDispatch();
  // const [contactsTel, setContactsTel] = useState(() => {
  //   const contactsInLS = localStorage.getItem("contactsTel");
  //   return contactsInLS ? JSON.parse(contactsInLS) : profiles;
  // });

  // useEffect(() => {
  //   localStorage.setItem("contactsTel", JSON.stringify(contactsTel));
  // }, [contactsTel]);

  // const onAddContact = (newContact) => {
  //   setContactsTel((lastContacts) => [...lastContacts, newContact]);
  // };

  const onAddContact = (newContact) => {
    const action = addContact(newContact);
    dispatch(action);
  };
  // const onDeleteContact = (profileId) => {
  //   const updatedContacts = contactsTel.filter(
  //     (contactItem) => contactItem.id !== profileId
  //   );
  //   setContactsTel(updatedContacts);
  // };
  const onDeleteContact = (profileId) => {
    const action = deleteContact(profileId);
    dispatch(action);
  };

  // const [filter, setFilter] = useState("");

  // const filteredContacts = useMemo(
  //   () =>
  //     items.filter((contactItem) => {
  //       return contactItem.name
  //         .toLowerCase()
  //         .includes(filters.toLowerCase().trim());
  //     }),
  //   [items, filters]
  // );

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
