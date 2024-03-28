// App.jsx
import ContactForm from "./ContactForm/ContactForm";
import SearchBox from "./SearchBox/SearchBox";
import ContactList from "./ContactList/ContactList";
import css from "./App.module.css";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchContacts } from "../redux/contactsOps";

function App() {

  const dispatch = useDispatch();
  
  useEffect(() => {
    dispatch(fetchContacts())
  }, [dispatch]);

  return (
    <div>
      <h1 className={css.title}>Phonebook</h1>
      <ContactForm />
      <SearchBox />
      <ContactList />
    </div>
  );
}

export default App;
