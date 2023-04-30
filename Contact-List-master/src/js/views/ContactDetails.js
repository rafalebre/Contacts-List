
import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import { Context } from '../store/appContext';

const ContactDetails = () => {
  const { contactId } = useParams();
  const { store } = useContext(Context);
  const contact = store.contacts.find((c) => c.id === parseInt(contactId));

  if (!contact) {
    return <h2>Contact not found</h2>;
  }

  return (
    <div className="container">
      <h2>Contact Details</h2>
      <p>Full Name: {contact.full_name}</p>
      <p>Email: {contact.email}</p>
      <p>Phone: {contact.phone}</p>
      <p>Address: {contact.address}</p>
    </div>
  );
};

export default ContactDetails;