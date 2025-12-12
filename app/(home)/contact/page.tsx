import React from 'react';
import ContactForm from './components/ContactForm';
import ContactDetails from './components/ContactDetails';

const Contact = () => {
  return (
    <div className="container mx-auto flex flex-col-reverse gap-5 lg:flex-row py-5 lg:py-10 lg:mt-10">
      <ContactForm />
      <ContactDetails />
    </div>
  );
};

export default Contact;
