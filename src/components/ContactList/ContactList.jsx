import styles from "./ContactList.module.css";
import Contact from "../Contact/Contact";
import { useSelector } from "react-redux";

export default function ContactList() {
  const selectContacts = useSelector((state) => state.contacts.items);
  const selectNameFilter = useSelector((state) => state.filters.name);
  const filteredContacts = selectContacts.filter((contactItem) => {
    return contactItem.name
      .toLowerCase()
      .includes(selectNameFilter.toLowerCase().trim());
  });
  return (
    <ul className={styles.listContacts}>
      {filteredContacts.map((item) => {
        return (
          <li key={item.id}>
            <Contact name={item.name} number={item.number} id={item.id} />
          </li>
        );
      })}
    </ul>
  );
}
