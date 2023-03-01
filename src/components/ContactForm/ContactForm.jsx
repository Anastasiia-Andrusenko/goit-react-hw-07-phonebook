
import css from "../ContactForm/ContactForm.module.css";
import classNames from "classnames";
import { useSelector, useDispatch } from "react-redux";

import { addContact } from "../../redux/slices/contactSlice";

const ContactForm = () => {

  const contacts = useSelector(store => store.contacts);
  const dispatch = useDispatch();
  
  const toggleForm = (evt) => {
    // console.log(evt.target);
    const btnRef = evt.target;
    const formRef = btnRef.nextSibling;
    // console.log(formRef);

    if (btnRef.textContent === "+") {
      btnRef.textContent = "x";
      formRef.classList.remove(`${css.visually_hidden}`)
    } else if (btnRef.textContent === "x") {
      btnRef.textContent = "+";
      formRef.classList.add(`${css.visually_hidden}`)
    }
  }


  const onAddContact = (evt) => {
    evt.preventDefault();
    const input = evt.target;
    const name = input.name.value;
    const number = input.number.value;
    // console.log(name);


    const equalName = contacts.find(
      element => element.name.toLowerCase() === name.toLowerCase());

    if (equalName) return alert(`${equalName.name} is already in contacts.`);

    const action = addContact({ name, number });
    dispatch(action);
    
    input.name.value = "";
    input.number.value = "";
  }

  return <div className={css.container}>
      <button type="button" className={css.btn} onClick={toggleForm}>+</button>
       <form
        className={classNames(css.visually_hidden, css.form)}
        onSubmit={onAddContact}> 
        <label className={css.label}>
          Name
          <input className={css.input}
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          ></input>
        </label>
        <label className={css.label}>
          Number
          <input className={css.input}
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          ></input>
        </label>
        <button type="submit" className={classNames(css.btn, css.add)}>Add contact</button>
      </form>
      </div>

}

export default ContactForm;
