
import { Contact } from "./Contact/Contact";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";


import css from '../ContactList/ContactList.module.css';
import { fetchContacts } from "redux/contacts-operations";

export const ContactList = () => {

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const contacts = useSelector(store => store.contacts.items);
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
  console.log(filteredContacts);

  return <ul className="">
    {filteredContacts.length > 0 ? filteredContacts.map((contact =>
      <Contact key={contact.id} contact={contact}/>
    )) : <p className={css.message}> no matches <span className={css.smile}>☹</span></p>}
  </ul>
}



