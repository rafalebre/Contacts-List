import React, { useState, useContext, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Context } from '../store/appContext';
import { Link } from 'react-router-dom';

const EditContact = () => {
  const { contactId } = useParams();
  const { store, actions } = useContext(Context);
  const navigate = useNavigate();

  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [address, setAddress] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    (async () => {
      await actions.loadContact(contactId);
      setLoading(false);
      const contact = store.currentContact;
      if (contact) {
        setFullName(contact.full_name);
        setEmail(contact.email);
        setPhone(contact.phone);
        setAddress(contact.address);
      }
    })();
  }, []);


  const handleSubmit = (e) => {
    e.preventDefault();
    actions.updateContact(contactId, { fullName, email, phone, address });
    navigate('/');
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-8 offset-md-2">
          <h1 className="text-center my-5">Edit Contact</h1>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label>Full Name</label>
              <input
                type="text"
                className="form-control"
                placeholder="Full Name"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label>Email</label>
              <input
                type="email"
                className="form-control"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label>Phone</label>
              <input
                type="tel"
                className="form-control"
                placeholder="Phone"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label>Address</label>
              <input
                type="text"
                className="form-control"
                placeholder="Address"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
              />
            </div>
            <button type="submit" className="btn btn-primary m-1">
              Save Changes
            </button>
            
          </form>
          <Link to="/" className="btn btn-info m-1">Back to Contacts</Link>
        </div>
      </div>
    </div>
  );
};

export default EditContact;