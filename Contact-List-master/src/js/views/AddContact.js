import React, { useState, useContext } from 'react';
import { Context } from '../store/appContext';
import { useNavigate } from 'react-router-dom';

const AddContact = () => {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [address, setAddress] = useState('');
  const { actions } = useContext(Context);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    actions.addContact({ fullName, email, phone, address });
    navigate('/');
  };

  return (
    <div>
      <h1>Add Contact</h1>
      <form onSubmit={handleSubmit}>
        {/* ... form inputs ... */}
      </form>
    </div>
  );
};

export default AddContact;