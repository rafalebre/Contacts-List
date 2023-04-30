import React, { useContext } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Context } from '../store/appContext';
import "./ContactDetails.css";

const ContactDetails = () => {
  const { contactId } = useParams();
  const { store } = useContext(Context);
  const contact = store.contacts.find((c) => c.id === contactId);
  const navigate = useNavigate();

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
      <button className='back-to-agenda-btn' onClick={() => navigate('/')}>Back to Agenda</button>
    </div>
  );
};

export default ContactDetails;