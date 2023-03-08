import ContactList from './ContactList/ContactList';
import ContactFrom from './ContactForm/ContactForm';
import Filter from './Filter/Filter';

import css from './App.module.css';

export const App = () => {
  return (
    <div className={css.App}>
      <h1 className={css.phonebook}>Phonebook</h1>
      <ContactFrom />
      <h2 className={css.contacts}>Contacts</h2>
      <p className={css.text}>Find contacts by name</p>
      <Filter/>
      <ContactList/>
    </div>
  );
};
