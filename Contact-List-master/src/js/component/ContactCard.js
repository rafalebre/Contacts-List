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
      <h3>{contact.full_name}</h3>
      <p>{contact.email}</p>
      <p>{contact.phone}</p>
      <p>{contact.address}</p>
      <button onClick={handleDelete}>Delete</button>
      <Link to={`/contact/${contact.id}`}>
        <button>View Details</button>
      </Link>
    </div>
  );
};

export default ContactCard;