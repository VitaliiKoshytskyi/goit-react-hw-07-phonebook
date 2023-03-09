import { useSelector, useDispatch } from 'react-redux';
import { getContacts } from 'redux/contacts/contacts-selectors';
import { getFilter } from 'redux/filter/filter-selectors';
import { deleteContact } from 'redux/contacts/contacts-operations';

import css from './ContactItem.module.css';

const ContactItem = () => {
  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilter);
  const dispatch = useDispatch();

  const getFilteredContacts = () => {
    if (filter === '') {
      return contacts;
    }
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter(item =>
      item.name.toLowerCase().includes(normalizedFilter)
    );
  };

  const filteredContacts = getFilteredContacts();
  
  const deleteContactHandler = id => {
    const action = deleteContact(id);
    dispatch(action);
  };

const months = [
  'January', 'February', 'March', 'April',
  'May', 'June', 'July', 'August',
  'September', 'October', 'November', 'December'
];

 const element = filteredContacts.map(({ id, name, phone, createdAt }) => {
  const date = new Date(createdAt);
  const day = date.getDate();
  const monthName = months[date.getMonth()]
  const year = date.getFullYear();
  const formattedDate = `${day} ${monthName} ${year}`;

  return (
    <li key={id} className={css.item}>
      <p className={css.name}>
       {name} 
      </p>
      <p className={css.phone}>{phone}</p>
      <span className={css.created}>{formattedDate}</span>
      <div className={css.button}><button onClick={() => deleteContactHandler(id)}>Delete</button></div>
    </li>
  );
});

return element;
};

export default ContactItem;
