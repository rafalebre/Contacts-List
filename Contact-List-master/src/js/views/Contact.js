import React, { useContext, useEffect } from 'react';
import { Context } from '../store/appContext';
import ContactCard from '../component/ContactCard';

const Contact = () => {
  const { store, actions } = useContext(Context);

  useEffect(() => {
    actions.loadContacts();
  }, []);

  return (
    <div>
      <h1>Contacts</h1>
      {store.contacts.map(contact => (
        <ContactCard key={contact.id} contact={contact} />
      ))}
    </div>
  );
};

export default Contact;