import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addContact } from 'redux/contacts/contacts-slice';
import { getContacts } from 'redux/contacts/contacts-selectors';

import css from './ContactForm.module.css';

const ContactForm = () => {
  const [state, setState] = useState({ name: '', number: '' });
  const { name, number } = state;

  const contacts = useSelector(getContacts);
  const dispatch = useDispatch();

  const handleChange = event => {
    const name = event.target.name;
    const value = event.target.value;
    setState(prevState => {
      return { ...prevState, [name]: value };
    });
  };

  const handleSubmit = event => {
    event.preventDefault();
    const initialData = { ...state };
    const isDublicate = contacts.find(
      item => item.name.toLowerCase() === initialData.name.toLowerCase()
    );
    if (isDublicate) {
      return alert(`${initialData.name} is already in contacts`);
    }
    dispatch(addContact(initialData));
    setState({ name: '', number: '' });
  };

  return (
    <form onSubmit={handleSubmit} className={css.form}>
      <div className={css.formBox}>
        <label>Name</label>
        <input
          onChange={handleChange}
          className={css.formText}
          value={name}
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
      </div>
      <div className={css.formBox}>
        <label>Number</label>
        <input
          onChange={handleChange}
          className={css.formText}
          value={number}
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
      </div>
      <button type="submit">Add contact</button>
    </form>
  );
};

export default ContactForm;
