const getState = ({ getStore, getActions, setStore }) => {
  return {
    store: {
      contacts: [],
      currentContact: null,
    },
    actions: {
      loadContacts: async () => {
        try {
          const response = await fetch('https://assets.breatheco.de/apis/fake/contact/agenda/rafalebre');
          const data = await response.json();
          setStore({ contacts: data });
        } catch (error) {
          console.error('Error fetching contacts:', error);
        }
      },
      addContact: async (contact) => {
        try {
          const response = await fetch('https://assets.breatheco.de/apis/fake/contact/', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({
              full_name: contact.fullName,
              email: contact.email,
              agenda_slug: 'rafalebre',
              address: contact.address,
              phone: contact.phone
            })
          });

          if (!response.ok) {
            throw new Error('Error adding contact');
          }

          // Reload contacts
          getActions().loadContacts();
        } catch (error) {
          console.error('Error adding contact:', error);
        }
      },
      loadContact: async (contactId) => {
        setStore({ isLoadingContact: true });
        try {
          const response = await fetch(`https://assets.breatheco.de/apis/fake/contact/${contactId}`);
          const data = await response.json();
          setStore({ currentContact: data, isLoadingContact: false });
        } catch (error) {
          console.error('Error fetching contact:', error);
          setStore({ isLoadingContact: false });
        }
      },
      updateContact: async (contactId, updatedContact) => {
        try {
          const response = await fetch(`https://assets.breatheco.de/apis/fake/contact/${contactId}`, {
            method: 'PUT',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({
              full_name: updatedContact.fullName,
              email: updatedContact.email,
              agenda_slug: 'rafalebre',
              address: updatedContact.address,
              phone: updatedContact.phone
            })
          });

          if (!response.ok) {
            throw new Error('Error updating contact');
          }

          // Reload contacts
          getActions().loadContacts();
        } catch (error) {
          console.error('Error updating contact:', error);
        }
      },
      deleteContact: async (contactId) => {
        try {
          const response = await fetch(`https://assets.breatheco.de/apis/fake/contact/${contactId}`, {
            method: 'DELETE'
          });

          if (!response.ok) {
            throw new Error('Error deleting contact');
          }

          // Reload contacts
          await getActions().loadContacts();
        } catch (error) {
          console.error('Error deleting contact:', error);
        }
      },
      resetCurrentContact: () => {
        setStore({ currentContact: null });
      }
    }
  };
};

export default getState;