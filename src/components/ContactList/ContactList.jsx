import styles from "./ContactList.module.css";
import Contact from "../Contact/Contact";
import { useMemo } from "react";
import { useSelector } from "react-redux";

export default function ContactList({ onDeleteContact }) {
  const items = useSelector((state) => state.contacts.items);
  const filters = useSelector((state) => state.filters.name);
  const filteredContacts = useMemo(
    () =>
      items.filter((contactItem) => {
        return contactItem.name
          .toLowerCase()
          .includes(filters.toLowerCase().trim());
      }),
    [items, filters]
  );
  return (
    <ul className={styles.listContacts}>
      {filteredContacts.map((item) => {
        return (
          <li key={item.id}>
            <Contact
              name={item.name}
              number={item.number}
              id={item.id}
              onDeleteContact={onDeleteContact}
            />
          </li>
        );
      })}
    </ul>
  );
}
