import { useSelector, useDispatch } from 'react-redux';
import { getContacts } from 'redux/contacts/contacts-selectors';
import { getFilter } from 'redux/filter/filter-selectors';
import { deleteContact } from 'redux/contacts/contacts-slice';

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

  const element = filteredContacts.map(({ id, name, number }) => (
    <li key={id} className={css.item}>
      <p>
        {name} : {number}
      </p>
      <button onClick={() => deleteContactHandler(id)}>Delete</button>
    </li>
  ));

  return element;
};

export default ContactItem;
