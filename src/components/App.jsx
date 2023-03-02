
import '../../src/index.css';
import { ContactList } from "./ContactList/ContactList";
import ContactForm from "./ContactForm/ContactForm";
import Filter from "./Filter/Filter";


import { Provider } from "react-redux";
import store from "../redux/store";


const App = () => {
  return <Provider store={store}>
      <div className="container">
        <div className="in_container">
          <div>
            <h2 className="title">Phonebook</h2>
            <Filter/>
            <ContactForm/>
          </div>
          <div>
            <h2 className="title">Contacts</h2>
            <ContactList/>
          </div>
        </div>
        <div className="circle"></div>
      </div>
  </Provider>
}

export default App;

