import React, { useContext, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Footer from './component/footer';
import Contact from './views/Contact';
import AddContact from './views/AddContact';
import EditContact from './views/EditContact';
import { Context } from './store/appContext';
import injectContext from './store/appContext';
import Navbar from './component/navbar';


const Layout = () => {
  const { actions } = useContext(Context);

  useEffect(() => {
    actions.loadContacts();
  }, [actions]);

  return (
    <div className="d-flex flex-column">
      <Router>
        <Navbar />
        <div className="container">
          <Routes>
            <Route path="/" element={<Contact />} />
            <Route path="/add" element={<AddContact />} />           
            <Route path="/contact/:contactId/edit" element={<EditContact />} />
          </Routes>
        </div>
        <Footer />
      </Router>
    </div>
  );
};

export default injectContext(Layout);