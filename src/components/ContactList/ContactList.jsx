// ContactList.jsx

import { useSelector } from "react-redux";
import { selectFilteredContacts } from "../../redux/contactsSlice";

import Contact from "../Contact/Contact";
import css from "../ContactList/ContactList.module.css";



const ContactList = () => {
  const filteredContacts = useSelector(selectFilteredContacts);

  return (
    <ul>
      {filteredContacts.map(contact => (
        <li key={contact.id} className={css.item}>
          <Contact
            contact={contact}
          />
        </li>
      ))}
    </ul>
  );
};

export default ContactList;
