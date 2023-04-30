import React, { useContext, useEffect } from 'react';
import { Context } from '../store/appContext';
import './Contact.css';
import { Link } from 'react-router-dom';
import ContactDetails from './ContactDetails';


const Contact = () => {
  const { store, actions } = useContext(Context);

  useEffect(() => {
    actions.loadContacts();
  }, []);

  return (
    <div className="container">
    
      {store.contacts.map((contact) => (
        <div className="contact-card" key={contact.id}>
          <div className="contact-image-wrapper">
            <img src={`https://avatars.dicebear.com/api/avataaars/${contact.email}.svg`} alt="Avatar" className="contact-image" />
          </div>
          <div className="contact-details">
            <h5>{contact.full_name}</h5>
            <div className="contact-info">
              <i className="icon fas fa-map-marker-alt" />
              {contact.address}
            </div>
            <div className="contact-info">
              <i className="icon fas fa-phone" />
              {contact.phone}
            </div>
            <div className="contact-info">
              <i className="icon fas fa-envelope" />
              {contact.email}
            </div>
          </div>
          <div className="contact-actions">
            <Link to={`/contact/${contact.id}`} className="edit-btn">
              <i className="fas fa-edit" />
            </Link>
            
            <button className="delete-btn" onClick={() => actions.deleteContact(contact.id)}>
              <i className="fas fa-trash" />
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Contact;