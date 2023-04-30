import React, { useState, useEffect, useContext } from 'react';
import { Context } from '../store/appContext';
import { useParams } from 'react-router-dom';

const ContactDetails = () => {
  const { store, actions } = useContext(Context);
  const history = useHistory();
  const { id } = useParams();

  const [contact, setContact] = useState({
    full_name: '',
    email: '',
    address: '',
    phone: ''
  });

  useEffect(() => {
    const selectedContact = store.contacts.find((contact) => contact.id === parseInt(id));
    if (selectedContact) {
      setContact(selectedContact);
    }
  }, [id, store.contacts]);

  const handleChange = (e) => {
    setContact({
      ...contact,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    actions.updateContact(contact);
    history.push('/');
  };

  const handleDelete = () => {
    actions.deleteContact(contact.id);
    history.push('/');
  };

  return (
    <div className="container">
      <div className="contact-card">
        <div className="contact-image-wrapper">
          <img
            src={`https://avatars.dicebear.com/api/avataaars/${store.selectedContact.email}.svg`}
            alt="Avatar"
            className="contact-image"
          />
        </div>
        <div className="contact-details">
          <div className="contact-info">
            <h5>Full Name</h5>
            <p>{store.selectedContact.full_name}</p>
          </div>
          <div className="contact-info">
            <h5>Address</h5>
            <p>{store.selectedContact.address}</p>
          </div>
          <div className="contact-info">
            <h5>Phone</h5>
            <p>{store.selectedContact.phone}</p>
          </div>
          <div className="contact-info">
            <h5>Email</h5>
            <p>{store.selectedContact.email}</p>
          </div>
        </div>
        <div className="contact-actions">
          <Link to="/" className="btn btn-primary">
            Back to Agenda
          </Link>
          <button className="btn btn-success ml-3" onClick={handleEdit}>
            Edit
          </button>
        </div>
      </div>
    </div>
  );}

export default ContactDetails;