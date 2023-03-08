import ContactItem from './ContactItem/ContactItem';
import css from './ContactList.module.css';

const ContactList = () => {
  return (
    <ul className={css.list}>
      <ContactItem />
    </ul>
  );
};

export default ContactList;
