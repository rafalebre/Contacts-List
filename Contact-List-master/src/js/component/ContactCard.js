import React, { useContext } from 'react';
import { Context } from '../store/appContext';
import { Link } from 'react-router-dom';

const ContactCard = ({ contact }) => {
  const { actions } = useContext(Context);

  const handleDelete = () => {
    actions.deleteContact(contact.id);
  };

  return (
    <div>
      <Link to={`/contact/${contact.id}`} className="contact-link">
        <h3>{contact.full_name}</h3>
        <p>{contact.email}</p>
        <p>{contact.phone}</p>
        <p>{contact.address}</p>
      </Link>
      <button onClick={handleDelete}>Delete</button>
    </div>
  );
};

export default ContactCard;