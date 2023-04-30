import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Footer from './component/footer';
import Contact from './views/Contact';
import AddContact from './views/AddContact';
import ContactDetails from './views/ContactDetails';
import injectContext from './store/appContext';
import Navbar from './component/Navbar';

const Layout = () => {
  return (
    <div className="d-flex flex-column">
      <Router>
        <Navbar />
        <div className="container">
          <Routes>
            <Route path="/" element={<Contact />} />
            <Route path="/add" element={<AddContact />} />
            <Route path="/contact/:contactId" element={<ContactDetails />} />
          </Routes>
        </div>
        <Footer />
      </Router>
    </div>
  );
};

export default injectContext(Layout);