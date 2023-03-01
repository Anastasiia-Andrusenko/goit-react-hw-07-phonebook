
import { Contact } from "./Contact/Contact";
import { useSelector } from "react-redux";


import css from '../ContactList/ContactList.module.css';

export const ContactList = () => {
  const contacts = useSelector(store => store.contacts);
  const filter = useSelector(store => store.filter);

  const filterContacts = () => {
    if (!filter) {
      return contacts;
    }

    const normalizedValue = filter.toLowerCase();
    const filteredContactsArray = contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedValue));
  
    return filteredContactsArray;
  }

  const filteredContacts = filterContacts();



  return <ul className="">
    {filteredContacts.length > 0 ? filteredContacts.map((contact =>
      <Contact key={contact.id} contact={contact}/>
    )) : <p className={css.message}> no matches <span className={css.smile}>☹</span></p>}
  </ul>
}



